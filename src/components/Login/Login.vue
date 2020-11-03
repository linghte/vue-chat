<template>
  <!-- 登陆 -->
  <div class="wrapper">
    <div class="login">
      <div class="form">
        <div class="username">username:</div><br/>
        <input type="text" v-model="userinfo.user" class="text" 
        placeholder="QQ号/手机号/邮箱" ref="user"><br/>
        <div class="Password">Password:</div><br/>
        <input type="password" v-model="userinfo.pwd" class="text" 
        placeholder="密码"><br/>
        <!-- <input type="button" class="btn" value="登录" @click="this.login"> -->
        <button type="submit" class="btn btn-primary" @click="this.login">submit</button>
        <!-- <router-link to="" class="left">忘记密码?</router-link>
        <router-link to="/register" class="right">新用户注册</router-link> -->
      </div>
      <div class="footer">
          <p>登录即代表已阅读并同意<span>服务条款</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import {mockLogin} from '../../api/mockApi';
export default {
  name: 'login',
  data(){
    return {
      userinfo:{
        user:'',
        pwd:''
      }
    }
  },
  computed: {
  },
  created(){
    //如果已经登陆了，则进入消息页面
  },
  mounted(){

},
  methods:{
    login(){
      mockLogin(this.username,this.password).then(item=>{
        console.log(item);
         this.$router.push({path:"/Friend",query:{alert:"success"}});
      })
    }
  },
  components:{
    
  }
}
</script>

<style scoped lang="scss" type="text/css">
.wrapper{
  background:#fff;
  .footer{
    color: #666;
    text-align: center;
    margin-top:150px;
    width: 100%;
    span{
      color: #1E90FF;
      cursor: pointer;
    }
  }

  .login{

    .form{
      margin: 10% 8% 0 8%;
      .username,.Password{
        display: flex;
        text-align: left;
      }
      input{
        display: block;
        width: 100%;
        height: calc(1.5em + .75rem + 2px);
        padding: .375rem .75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      }
      .btn {
        display: inline-block;
        font-weight: 400;
        color: #212529;
        text-align: center;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-color: transparent;
        border: 1px solid transparent;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: .25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      }
      .btn-primary{
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
      }
      a{
        margin-top: 20px;
        color: #1E90FF;
      }
      ::-webkit-input-placeholder,::-moz-placeholder,::-moz-placeholder,
      ::-ms-input-placeholder { color: #333;} 
    }
  }
}
</style>
