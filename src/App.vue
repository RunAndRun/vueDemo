<template>
  <div id="app">
    <router-view class="view"></router-view>
    <select-channel class="index" v-show="channelsToggle"></select-channel>
    <login class="index"></login>
    <div class="box">
      <div class="border_1px"></div>
      <div class="option">
        <router-link to="/news" class="items">
          <span class="icon icon-copy"></span>
          <p class="text">新闻</p>
        </router-link>
        <router-link to="/recommend" class="items">
          <span class="icon icon-insert-template"></span>
          <p class="text">推荐</p>
        </router-link>
        <router-link to="/live" class="items">
          <span class="icon icon-video-camera"></span>
          <p class="text">直播</p>
        </router-link>
        <router-link to="/search" class="items">
          <span class="icon icon-spinner10"></span>
          <p class="text">搜索</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import selectChannel from "./components/selectChannel"
  import login from "./components/login"

  export default {
    name: 'app',
    data(){
      return{
        loginToggle:true
      }
    },
    components:{
      selectChannel,
      login
    },
    computed:{
      channelsToggle(){
        return this.$store.state.channelsPage
      }
    }
  }
</script>

<style lang="scss">
  #app{
    width:100%;
    height:100%;
    background:#fff;
    .box{
      position:fixed;
      bottom:0;
      left:0;
      z-index:10;
      width:100%;
      height:2.5rem;
      box-sizing:border-box;
      background:#fff;
      .border_1px{
        position:absolute;
        left:0;
        top:0;
      }
      .option{
        display:flex;
        padding:0 1.0rem;
        height:100%;
        font-size:0;
        align-items:center;
        .items{
          flex:auto;
          display:inline-block;
          text-align:center;
          color:#131517;
          &.active{
            color:#1886da;
          }
          .icon{
            font-size:0.9rem;
          }
          .text{
            margin-top:0.1rem;
            font-size:0.5rem;
          }
        }
      }
    }
    .view{
      width:100%;
      height:100%;
    }
    .index{
      z-index: 20;
    }
  }
</style>
