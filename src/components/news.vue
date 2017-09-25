<template>
  <div class="news">
    <div class="header">
      <div class="wrapper" ref="channel">
	      <ul ref="ul">
	        <li class="items" v-for="(item,index) in channelsPage">
	          <router-link :to="channelsPath[index]" class="channelItem">{{item}}</router-link>
	        </li>
	      </ul>
	    </div>
		  <div class="border_1px"></div>
    </div>
    <router-view class="channelView"></router-view>
  </div>
</template>

<script>
  import axios from "axios"
  import Bscroll from "better-scroll"

  export default {
    name:"news",
    data(){
      return {
        liWidth:{
        	type:Number
        }
      }
    },
    mounted(){
      this.$nextTick(() => {
      	this._initScroll();
      })
    },
    methods:{
      _initScroll(){
      	const oUl=this.$refs.ul;
        this.liWidth=oUl.getElementsByTagName("li")[0].clientWidth;
        oUl.style.width=this.channelsPage.length*this.liWidth+"px";
        this.scroll = new Bscroll(this.$refs.channel,{
          scrollX:true,
          bounce:false,
          click:true,
          pullUpLoad:true
        });
      }
    },
    computed:{
      channelsPath(){
      	return this.$store.getters.channelsPath;
      },
      channelsPage(){
      	return this.$store.getters.channelsPage;
      }
    }
  }
</script>

<style lang="scss">
  .news{
  	position:relative;
    .header{
	    position:relative;
	    width:100%;
	    height:2.0rem;
	    background:#fff;
	    .border_1px{
	      position:absolute;
	      left:0;
	      bottom:0;
	    }
	    .wrapper{
	      width:100%;
	      height:100%;
	      overflow:hidden;
	      box-sizing:border-box;
	      .items{
	        display:inline-block;
	        height:2.0rem;
	        line-height:2.0rem;
	        width:2.25rem;
	        text-align:center;
	        font-size:0.7rem;
	        .channelItem{
	          display:block;
	          width:100%;
	          height:100%;
	          box-sizing:border-box;
	          font-weight:700;
		        color:#848586;
		        &.active{
		          border-bottom:0.15rem solid #1886da;
		          color:#333;
		        }
	        }
	      }
	    }
	  }
	  .channelView{
      position:absolute;
      width: 100%;
      left: 0;
      top: 2.0rem;
      bottom:2.5rem;
      overflow: hidden;
      background:#fff;
	  }
  }
</style>

