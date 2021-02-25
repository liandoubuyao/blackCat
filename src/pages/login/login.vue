<template>
  <view class="login">
    <view class="login-content">
      <u-form :model="form" ref="uForm" label-width="150">
        <u-form-item label="用户名" prop="username">
          <u-input :placeholder="rules.username[0].message" v-model="form.username" />
        </u-form-item>
        <u-form-item label="密码" prop="password">
          <u-input :placeholder="rules.password[0].message" v-model="form.password" type="password" :password-icon="true" />
        </u-form-item>
      </u-form>
      <u-button @click="submit">提交</u-button>
    </view>
    <u-toast ref="uToast" />
	</view>
</template>

<script>
import {postFormAPI} from '../../api/api'
export default {
  name:"login",
  data(){
    return {
      form: {
				username: '',
        password:''
			},
			rules: {
				username: [
					{
						required: true,
						message: '请输入用户名',
						trigger: ['blur', 'change']
					}
        ],
        password: [
					{
						required: true,
						message: '请输入密码',
						trigger: ['blur', 'change']
					}
				]
			}
    }
  },
  methods:{
    submit() {
			this.$refs.uForm.validate(valid => {
				if (valid) {
          console.log('验证通过');
          console.log(this.form)
          postFormAPI('/api/login',this.form).then(res=>{
            console.log(res.data.code)
            if(res.data.code == 200){
              this.$refs.uToast.show({
                title: res.data.msg,
                type: 'success'
              })
              localStorage.setItem("userInfo",JSON.stringify(res.data.data))
              setTimeout(()=>{
                uni.reLaunch({
                    url: '/pages/index/index'
                });
              },2000)
            }else{
              this.$refs.uToast.show({
                title: res.data.msg,
                type: 'error'
              })
            }
          }).catch(err=>{
              this.$refs.uToast.show({
                title: err,
                type: 'error'
              })

          })
          
				} else {
					console.log('验证失败');
				}
			});
    },
  },
  // 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
	onReady() {
    if(localStorage.getItem("userInfo")){
      uni.reLaunch({
        url: '/pages/index/index'
      });
    }
		this.$refs.uForm.setRules(this.rules);
	}
}
</script>

<style lang="scss" scoped>
.login{
  .login-content{
    width:90%;
    margin: 0 auto;
  }
}
</style>