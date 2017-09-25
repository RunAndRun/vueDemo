<template>
	<div class="user">
    <div class="wrapper" ref="wrapper">
      <div>
      	<div class="top">
	        <div class="info">
		        <img :src="user.picture" class="img">
		        <span class="name">ID: {{user.name}}</span>
	        </div>
	        <p class="sign">签名: {{user.sign}}</p>
	      </div>
	      <ul class="list">
		      <li v-for="item in items" class="item">
			      <p>{{item}}</p>
			      <div class="border_1px"></div>
		      </li>
	      </ul>
      </div>
    </div>
	</div>
</template>

<script type="text/javascript">
  import axios from "axios"
  import BScroll from "better-scroll"

  var ITEMS=["我的消息","我的关注","我的收藏","我的红包","我的发表","我的反馈","我的资料","我的设置"]

  export default {
    name:"user",
    data(){
    	return {
    		items:ITEMS,
    		user:{}
    	}
    },
    created(){
      axios.get("/static/data/user.json").then((res) => {
      	this.user=res.data;
      })
    },
    mounted(){
    	var _this=this;
    	this.$nextTick(()=>{
    		new BScroll(this.$refs.wrapper,{
    			click:true,
    			bounce:false
    		})
    	})
    }
  }
</script>

<style lang="scss">
  .user{
  	position: relative;
  	.wrapper{
  		position:absolute;
  		top: 0;
  		bottom: 2.5rem;
  		width: 100%;
  		overflow: hidden;
  		.top{
  			width: 100%;
  			height: 9.0rem;
  			padding: 2.5rem 0.75rem 0.75rem 0.75rem;
  			box-sizing:border-box;
  			background: #90c6ef;
  			.info{
  				font-size: 0;
  				margin-bottom: 1.0rem;
          .img{
          	display: inline-block;
          	width: 3.0rem;
          	height: 3.0rem;
          	border-radius:50%;
          	margin-right: 1.2rem;
          }
          .name{
          	display: inline-block;
          	height: 100%;
          	line-height: 3.0rem;
          	font-size: 1.2rem;
          	color: black;
          	vertical-align: top;
          }
  			}
  		}
  		.list{
  			padding: 0.5rem;
  			padding-bottom:0;
        .item{
        	height: 2.5rem;
        	line-height: 2.5rem;
        	font-size: 0.9rem;
        }
  		}
  	}
  }
</style>