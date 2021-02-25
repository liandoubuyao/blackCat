import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
Vue.use(uView);
Vue.config.productionTip = false

App.mpType = 'app'
if(!localStorage.getItem("userInfo")){
  if(location.href.replace("login") < 0){
    window.location.replace(location.origin+"/#/pages/login/login")
  }
}
const app = new Vue({
  ...App
})
app.$mount()
