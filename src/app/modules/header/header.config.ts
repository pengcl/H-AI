export const appData = {
  app: {
    name: '中科华海',
    description: '中科华海',
    appQrCode: '/assets/images/qrCode.jpg',
    wxQrCode: '/assets/images/qrCode.jpg'
  },
  user: {
    name: 'Admin',
    avatar: './assets/tmp/img/avatar.jpg',
    email: '3559996@qq.com'
  },
  cities: [
    {label: '全国', code: '100000'},
    {label: '北京', code: '100001'},
    {label: '上海', code: '100002'},
    {label: '广州', code: '100003'},
    {label: '深圳', code: '100003'},
    {label: '海口', code: '100003'},
    {label: '佛山', code: '100003'},
    {label: '成都', code: '100003'},
    {label: '中山', code: '100003'},
    {label: '南京', code: '100003'},
    {label: '佛山', code: '100003'},
    {label: '杭州', code: '100003'},
    {label: '青岛', code: '100003'},
    {label: '无锡', code: '100003'},
    {label: '南通', code: '100003'}
  ],
  menu: [
    {
      text: '首页',
      link: '/',
      hover: false
    },
    {
      text: '华海云',
      link: '/dashboard',
      hover: false,
      children: [
        {
          text: '菜单',
          link: '/dashboard'
        },
        {
          text: '菜单',
          link: '/catalog/list'
        },
        {
          text: '菜单',
          link: '/theme/list'
        }
      ]
    },
    {
      text: 'IP资源池',
      link: '/dashboard',
      hover: false,
      children: [
        {
          text: '菜单',
          link: '/dashboard'
        },
        {
          text: '菜单',
          link: '/catalog/list'
        },
        {
          text: '菜单',
          link: '/theme/list'
        }
      ]
    },
    {
      text: '路演项目',
      link: '/dashboard',
      hover: false,
      children: [
        {
          text: '菜单',
          link: '/dashboard'
        },
        {
          text: '菜单',
          link: '/catalog/list'
        },
        {
          text: '菜单',
          link: '/theme/list'
        }
      ]
    },
    {
      text: '众筹',
      link: '/dashboard',
      hover: false,
      children: [
        {
          text: '菜单',
          link: '/dashboard'
        },
        {
          text: '菜单',
          link: '/catalog/list'
        },
        {
          text: '菜单',
          link: '/theme/list'
        }
      ]
    },
    {
      text: '创意商品',
      link: '/dashboard',
      hover: false,
      children: [
        {
          text: '菜单',
          link: '/dashboard'
        },
        {
          text: '菜单',
          link: '/catalog/list'
        },
        {
          text: '菜单',
          link: '/theme/list'
        }
      ]
    },
    {
      text: '资讯',
      link: '/dashboard',
      hover: false,
      children: [
        {
          text: '菜单',
          link: '/dashboard'
        },
        {
          text: '菜单',
          link: '/catalog/list'
        },
        {
          text: '菜单',
          link: '/theme/list'
        }
      ]
    },
    {
      text: '关于我们',
      link: '/dashboard',
      hover: false,
      children: [
        {
          text: '菜单',
          link: '/dashboard'
        },
        {
          text: '菜单',
          link: '/catalog/list'
        },
        {
          text: '菜单',
          link: '/theme/list'
        }
      ]
    }
  ]
};

