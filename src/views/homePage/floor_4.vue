<template>
  <div class="container floor-4">
    <h2>更适合您的餐饮小程序</h2>
    <p>共享微信10亿用户、连接线下服务场景、行业专有模板使用方便体验良好</p>
    <div class="options">
      <div class="one" v-for="item in imgList" :key="item.name" v-lazy:background-image="item.background">
        <div class="inner">
          <img v-lazy="item.iconUrl" alt="">
          <div class="line"></div>
          <div class="name">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.floor-4 {
  height: 900px;
  padding-top:90px;
  > h2 {
    font-size: 34px;
    font-weight: bold;
  }
  > p {
    font-size: 14px;
    color: #999;
  }
  .options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    margin-top:91px;
    .one {
      position: relative;
      width: 234px;
      height: 377px;
      background-size: cover;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      .inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 1;
        img {
          width: 144px;
        }
        .line {
          width: 36px;
          border-top: 4px solid #fff;
          margin: 16px 0 25px 0;
        }
        .name {
          color: #fff;
          font-size: 24px;
        }
      }
    }
    .one::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 234px;
      height: 377px;
      overflow: hidden;
      content: " ";
      background: RGBA(0, 179, 138, 0.7);
      transform: translateY(100%);
      transition: all 1s;
      // z-index: 1;
    }
    .one:hover::before {
      transform: translateY(0);
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      imgList: [
        {
          name: "快餐",
          iconUrl: require("./../../assets/homepage/icon_fastfood@2x.png"),
          background: require("./../../assets/homepage/pic1@2x.png")
        },
        {
          name: "中餐/特色零售",
          iconUrl: require("./../../assets/homepage/icon_zhongcan@2x.png"),
          background: require("./../../assets/homepage/pic1@2x.png")
        },
        {
          name: "外卖",
          iconUrl: require("./../../assets/homepage/icon_waimai@2x.png"),
          background: require("./../../assets/homepage/pic_fastfood1@2x.png")
        },
        {
          name: "火锅",
          iconUrl: require("./../../assets/homepage/icon_huoguo@2x.png"),
          background: require("./../../assets/homepage/pic_huoguo@2x.png")
        },
        {
          name: "饮品",
          iconUrl: require("./../../assets/homepage/icon_drink@2x.png"),
          background: require("./../../assets/homepage/pic_drink@2x.png")
        }
      ]
    };
  }
};
</script>
