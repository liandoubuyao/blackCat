const tabBar = [{
  iconPath: "home",
  selectedIconPath: "home-fill",
  text: '首页',
  customIcon: false,
  pagePath:"/pages/index/index"
},
{
  iconPath: "heart",
  selectedIconPath: "heart-fill",
  text: '心率体重',
  customIcon: false,
  pagePath:"/pages/health/weightBP"
},
{
  iconPath: "trash",
  selectedIconPath: "trash-fill",
  text: '食谱',
  customIcon: false,
  pagePath:"/pages/recipe/recipe"
},
{
  iconPath: "account",
  selectedIconPath: "account-fill",
  text: '我的',
  customIcon: false,
  pagePath:"/pages/my/my"
}]

export {tabBar}