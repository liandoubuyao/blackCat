<template>
  <view class="login">
    <view class="login-content">
      <u-form :model="form" ref="uForm">
        <u-form-item label="姓名" prop="name">
          <u-input :placeholder="rules.name[0].message" v-model="form.name" />
        </u-form-item>
        <u-form-item label="密码" prop="password">
          <u-input :placeholder="rules.password[0].message" v-model="form.password" type="password" :password-icon="true" />
        </u-form-item>
      </u-form>
      <u-button @click="submit">提交</u-button>
    </view>
	</view>
</template>

<script>
export default {
  name:"login",
  data(){
    return {
      form: {
				name: '',
        password:''
			},
			rules: {
				name: [
					{
						required: true,
						message: '请输入姓名',
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
				} else {
					console.log('验证失败');
				}
			});
		}
  },
  // 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
	onReady() {
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