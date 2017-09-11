<template>
	<div class="loginpage" v-show="hide"> 
	  <div class="back" v-tap="{methods:hidePage}">
		  <span class="icon-backward"></span>
	  </div>
	  <h1 class="title">登录News</h1>
	  <div class="loginBox">
		  <input class="userName" type="text" placeholder="News账户手机/邮箱" v-model="userName" @blur="checkName">
		  <div class="border_1px"></div>
		  <div class="infoBox">
		  	<input class="password word1" type="text"  maxlength="20" placeholder="请输入密码" v-model="password" @input="check">
			  <span :class="{'icon-eye-blocked':!visible,'icon-eye':visible}" class="icon" @click.prevent="togglePassWord"></span>
		  </div>
		  <div class="border_1px"></div>
	  </div>
	  <div class="notes">
      <span class="forget">忘记密码?</span>
      <span class="register">新用户注册</span>
	  </div>
	  <p class="loginBtn" v-tap="{methods:loginAccount}">登录</p>
	  <div class="otherLogin">
	    <p class="text">其他登录方式</p>
	    <ul class="others">
	      <li class="way"><span class="entry taobao">淘</span></li>
	      <li class="way"><span class="entry sina">Sina</span></li>
	      <li class="way"><span class="entry qq">QQ</span></li>
	    </ul>
	  </div> 
	</div>
</template>

<script>
	export default {
		name:"login",
		data(){
			return {
				visible:true,
				userName:"",
				password:"",
				checkuser:false,
				checkPassWord:false,
				oldWord:""
			}
		},
		methods:{
			hidePage(){
				this.$store.dispatch("hideLoginPage");
			},
			checkName(){
        const reEmail=/^\w+@[a-z0-9]+\.[a-z]+$/;
        const rePhone=/^1(3[0-9]|4[57]|5[0-35-9]|8[0-9]|7[780])\d{8}$/;
        if(reEmail.test(this.userName)){
          this.checkuser=true;
        	return
        }else if(rePhone.test(this.userName)){
          this.checkuser=true;
        	return
        }else if(this.userName){
        	this.checkuser=false;
        	alert("账户格式错误")
        }
			},
			checkWord(){
        const rePassWord=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
        if(this.checkuser&&this.userName){
          if(rePassWord.test(this.oldWord)){
        	 this.checkPassWord=true;
        	 return
	        }else if(this.oldWord){
	        	this.checkPassWord=false;
	        	alert("密码格式错误")
	        }
        }
			},
			togglePassWord(){
				this.visible=!this.visible;
				if(!this.visible){
					this.password=this.password.replace(/\w/g,"*");
				}
				else{
					this.password=this.oldWord;
				}
			},
			check(){
				if(this.userName&&this.checkuser){
					//如果账户名正确,就检查密码
					this.oldWord += this.password.charAt(this.password.length-1);
					//输入 
					this.oldWord = this.oldWord.substring(0,this.password.length);
					//回退
					if(!this.visible){
						this.password=this.password.replace(/\w/g,"*");
					}else{
						this.password=this.oldWord;
					}
				}else if(this.password){
					alert("请先输入账户名")
				}
			},
			loginAccount(){
				this.checkWord();  
				if(this.checkuser&&this.checkPassWord){
          alert("登录成功");
          this.userName="";
          this.password="";
          this.oldWord="";
          this.checkPassWord=false;
          this.checkuser=false;
        	this.$store.dispatch("hideLoginPage");
				}
			}
		},
		computed:{
      hide(){
      	return this.$store.state.loginPage;
      }
		}
	}
</script>

<style lang="scss">
	.loginpage{
		position: fixed;
		left:0;
		top: 0;
		padding:2.0rem 1.5rem;
		width: 100%;
		height: 100%;
		box-sizing:border-box;
		background: #fff;
		.back{
			position:absolute;
			padding:0.75rem;
			left: 0;
			top: 0;
			font-size: 1.2rem;
		}
		.title{
			padding:2.0rem 0;
			font-size: 1.5rem;
			font-weight: 700;
		}
		.loginBox{
			font-size: 0.9rem;
			color: #5c6d80;
			.userName{
				border:none;
				outline: none;
				height: 2.25rem;
				width: 100%;
			}
			.infoBox{
				display: flex;
				height: 2.25rem;
        .password{
        	flex: 1;
        	border:none;
        	outline: none;
        }
        .icon{
        	flex: 0 2.25rem;
        	line-height: 2.25rem;
        	font-size: 1.0rem;
        	padding-left: 0.5rem;
        	box-sizing:border-box;
        }
			}
		}
		.notes{
			padding:0.5rem 0;
			font-size: 0.8rem;
			color: #e0882b;
			overflow: hidden;
			.forget{
				float: left;
			}
			.register{
				float: right;
			}
		}
		.loginBtn{
			height: 2.25rem;
			margin-top: 0.75rem;
			border-radius:1.125rem;
			background:  #e0882b;
			line-height: 2.25rem;
			text-align: center;
			font-size: 0.8rem;
			color: #fff;
		}
		.otherLogin{
			padding-top: 0.5rem;
			.text{
        font-size: 0.7rem;
        text-align: center;
        padding:1.0rem 0;
        color: rgba(7,17,27,.5);
			}
			.others{
				display: flex;
				justify-content: center;
        .way{
        	width: 33.33333333%;
        	float: left;
        	display: flex;
        	justify-content: center;
        	.entry{
        		display: block;
        		width: 3.0rem;
        		height: 3.0rem;
        		border-radius:50%;
        		line-height: 3.0rem;
        		text-align: center;
        		color: #fff;
        		font-weight: 700;
        	}
        	.taobao{
        		background: #d27008;
        	}
        	.sina{
            background: #ce4216;
        	}
        	.qq{
        		background: #4693e0;
        	}
        }
			}
		}
	}
</style>