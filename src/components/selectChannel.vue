<template>
  <div class="selectChannel">
    <div class="head">
      <span class="backIcon icon-backward" v-tap="{methods:hideChannel}"></span>
      <h2 class="headTxt">频道定制</h2>
      <div class="border_1px"></div>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="selected">
          <h3 class="title">
            <span class="selectedChannel">已选频道</span>
            <span class="explain">可点击/拖动还不行</span>
          </h3>
          <options :close="true" :items="defaultChannels"></options>
        </div>
        <div class="unselected">
          <div class="channelOption">
            <span class="optionBtn leftBtn" :class="{active:tab}" @click="tab=true">推荐频道</span>
            <span class="optionBtn rightBtn" :class="{active:!tab}"  @click="tab=false">地方新闻</span>
            <div class="border_1px"></div>
          </div>
          <div class="recommendation" v-if="tab">
            <options :items="recommendations"></options>
          </div>
          <div class="local" v-else>
            <options :items="placeNews"></options>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import options from "./base/option"
  import BScroll from "better-scroll"

  export default {
    name:"selectChannel",
    data(){
      return {
        tab:true
      }
    },
    computed:{
      defaultChannels(){
        return this.$store.state.channels.default
      },
      recommendations(){
        return this.$store.state.channels.recommendations;
      },
      placeNews(){
        return this.$store.state.channels.placeNews;
      }
    },
    components:{
      options
    },
    mounted(){
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper,{
          click:true
        })
      })
    },
    watch:{
      defaultChannels(){
        this.$nextTick(() => {
          this.scroll.refresh();
        })
      }
    },
    methods:{
      hideChannel(){
        this.$store.dispatch("hideChannelsPage");
      }
    }
  }
</script>

<style lang="scss">
  .selectChannel{
    position: fixed;
    width: 100%;
    height: 100%;
    background: #fff;
    left: 0;
    top: 0;
    .head{
      width: 100%;
      height: 2.25rem;
      position:relative;
      background:#fff;
      text-align: center;
      line-height: 2.25rem;
      box-sizing:border-box;
      background:#fff;
      color: #1b1d1f;
      .backIcon{
        position:absolute;
        left: 0;
        top: 0;
        padding: 0.5rem 0.8rem;
        font-size: 1.2rem;
      }
      .headTxt{
        font-size: 0.9rem;
      }
      .border_1px{
        position:absolute;
        left: 0;
        bottom:0;
      }
    }
    .wrapper{
      position:absolute;
      left: 0;
      top: 2.25rem;
      bottom: 0;
      width: 100%;
      box-sizing:border-box;
      overflow: hidden;
      .content{
        .selected{
          .title{
            display: flex;
            font-size: 0.7rem;
            padding:0.5rem 1.0rem 0 1.0rem;
            .selectedChannel{
              flex:1;
              text-align: left;
              color: #1b1d1f;
            }
            .explain{
              flex:1;
              text-align: right;
              color:rgba(7,17,27,.5);
            }
          }
        }
        .unselected{
          .channelOption{
            position:relative;
            width: 100%;
            height: 2.25rem;
            padding:0 2.5rem;
            overflow: hidden;
            box-sizing:border-box;
            .optionBtn{
              height: 100%;
              padding:0 1.0rem;
              line-height: 2.25rem;
              font-size: 0.9rem;
              color: #1b1d1f;
              &.active{
                border-bottom:2px solid #2487ea;
                box-sizing:border-box;
              }
            }
            .leftBtn{
              float: left;
            }
            .rightBtn{
              float: right;
            }
            .border_1px{
              position:absolute;
              left: 0;
              bottom:0;
            }
          }
        }
      }
    }
  }
</style>