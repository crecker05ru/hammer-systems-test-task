import { 
  DashboardOutlined,GiftOutlined,FileTextOutlined,MailOutlined,MobileOutlined,PictureOutlined, 
  ShopOutlined,ShoppingCartOutlined,SettingOutlined,
  ShoppingOutlined,UserOutlined,UsergroupAddOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'main',
  path: `${APP_PREFIX_PATH}/main`,
  title: 'Основные',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'main-dashboard',
      path: `${APP_PREFIX_PATH}/main/dashboard`,
      title: 'Дашбоард',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-catalogue',
      path: `${APP_PREFIX_PATH}/main/catalogue`,
      title: 'Каталог',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'main-catalogue-products',
          path: `${APP_PREFIX_PATH}/main/catalogue/products`,
          title: 'Товары',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-catalogue-categories',
          path: `${APP_PREFIX_PATH}/main/catalogue/categories`,
          title: 'Категории',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-catalogue-collections',
          path: `${APP_PREFIX_PATH}/main/catalogue/collections`,
          title: 'Коллекции',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-catalogue-combo',
          path: `${APP_PREFIX_PATH}/main/catalogue/combo`,
          title: 'Комбо',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'main-orders',
      path: `${APP_PREFIX_PATH}/main/orders`,
      title: 'Заказы',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-clients',
      path: `${APP_PREFIX_PATH}/main/clients`,
      title: 'Клиенты',
      icon: UserOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'main-clientsList',
          path: `${APP_PREFIX_PATH}/main/clients/clients-list`,
          title: 'Список клиентов',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-clientsGroup',
          path: `${APP_PREFIX_PATH}/main/clients/clients-group`,
          title: 'Группы клиентов',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },    {
      key: 'main-banners',
      path: `${APP_PREFIX_PATH}/main/banners`,
      title: 'Баннеры',
      icon: PictureOutlined,
      breadcrumb: false,
      submenu: []
    },    {
      key: 'main-promocodes',
      path: `${APP_PREFIX_PATH}/main/promocodes`,
      title: 'Промокоды',
      icon: GiftOutlined,
      breadcrumb: false,
      submenu: []
    },    {
      key: 'main-offlineOutlet',
      path: `${APP_PREFIX_PATH}/main/offlineOutlet`,
      title: 'Оффлайн точки',
      icon: ShopOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'main-offlineOutlet-addresses',
          path: `${APP_PREFIX_PATH}/main/offlineOutlet/addresses`,
          title: 'Адреса',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-offlineOutlet-geozones',
          path: `${APP_PREFIX_PATH}/main/offlineOutlet/geozones`,
          title: 'Геозоны',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },{
      key: 'main-employees',
      path: `${APP_PREFIX_PATH}/main/employees`,
      title: 'Сотрудники',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },{
      key: 'main-maillingList',
      path: `${APP_PREFIX_PATH}/main/maillingList`,
      title: 'Рассылки',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
}]

const systemNavTree = [{
  key: 'system',
  path: `${APP_PREFIX_PATH}/system`,
  title: 'Системные',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'system-settings',
      path: `${APP_PREFIX_PATH}/system/settings`,
      title: 'Настройки',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    },    {
      key: 'system-mobileApp',
      path: `${APP_PREFIX_PATH}/system/mobileApp`,
      title: 'Мобильное приложение',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    },    {
      key: 'system-logs',
      path: `${APP_PREFIX_PATH}/system/logs`,
      title: 'Логи',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
}
]
const navigationConfig = [
  ...dashBoardNavTree,
  ...systemNavTree
]

export default navigationConfig;
