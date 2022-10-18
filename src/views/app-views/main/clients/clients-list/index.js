import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
import {fetchClients, asyncFetchClients} from 'redux/actions/Clients'
import moment from 'moment';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import Loading from 'components/shared-components/Loading';
import ClientData from './ClientData';

export class ClientsList extends Component {
  
  handleFetchClients = () => {
    this.props.fetchClients()
  }
	state = {
		users: [],
    loading: this.props.loading,
    error: this.props.error,
		userProfileVisible: false,
		selectedUser: null
	}

  componentDidMount(){
    console.log('component mounted')
    console.log('this',this)
    console.log('this.state',this.state)
    console.log('this.props',this.props)
   this.props.asyncFetchClients()
       console.log('AFTER this.state',this.state)
       console.log('AFTER this.props',this.props)
    this.setState({users: this.props.clients})
  }

	deleteUser = userId => {
		this.setState({
			users: this.state.users.filter(item => item.id !== userId),
		})
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	showUserProfile = userInfo => {
		this.setState({
			userProfileVisible: true,
			selectedUser: userInfo
		});
	};
	
	closeUserProfile = () => {
		this.setState({
			userProfileVisible: false,
			selectedUser: null
    });
	}

	render() {
		const {userProfileVisible, selectedUser} = this.state;

		const tableColumns = [
			{
				title: 'User',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex">
						<AvatarStatus src={record.img} name={record.name} subTitle={record.email}/>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
  						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Email',
				dataIndex: 'email',
				sorter: {
					compare: (a, b) => a.email.length - b.email.length,
				},
			},
			{
				title: 'Phone',
				dataIndex: 'phone',
				render: date => (
					<span>{moment.unix(date).format("MM/DD/YYYY")} </span>
				),
				sorter: (a, b) => moment(a.phone).unix() - moment(b.phone).unix()
			},
			{
				title: 'Website',
				dataIndex: 'website',
				render: status => (
					<Tag className ="text-capitalize" color={status === 'active'? 'cyan' : 'red'}>{status}</Tag>
				),
				sorter: {
					compare: (a, b) => a.website.length - b.website.length,
				},
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
            
						<Tooltip title="View">
							<Button type="primary" className="mr-2" 
              icon={<EyeOutlined />} 
              onClick={() => {this.showUserProfile(elm)}} 
              size="small"/>
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={()=> {this.deleteUser(elm.id)}} size="small"/>
						</Tooltip>
					</div>
				)
			}
		];
		return (
      <>
      {userProfileVisible ? <ClientData data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> 
      : 			<Card bodyStyle={{'padding': '0px'}}>
      {this.props.loading && <Loading align='center' cover='some'/>}
      <Table columns={tableColumns} dataSource={this.props.clients} rowKey='id' />	
    </Card>
      }

      </>
		)
	}
}

const mapStateToProps = ({clients: arr}) => {
	const { loading, clients, error } = arr;
  return { loading, clients, error }
}

const mapDispatchToProps = {
  fetchClients,
  asyncFetchClients
}


export default connect(mapStateToProps, mapDispatchToProps)(ClientsList)

