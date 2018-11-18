<template>
  <div class="container homepage">
    <nav>
      <div class="logo">
        <img src="" alt="" title='功夫元'>
        <div class='name'>云竹智慧餐饮</div>
      </div>
      <div class="nav">
        <div class="left">
          <div class="link active">首页</div>
          <div class="link">申请流程</div>
          <div class="link">联系我们</div>
        </div>
        <div class="right">
          <div class="login">登录</div>
          <div class="signin">注册</div>
        </div>
      </div>
    </nav>
    <floor1></floor1>
    <floor2></floor2>
    <floor3></floor3>
    <floor4></floor4>
  </div>
</template>

<style lang="less">
.homepage {
  nav {
    position: relative;
    z-index: 1;
    height: 70px;
    max-width: 100%;
    padding: 0 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0px 2px 8px 0px rgba(59, 57, 62, 0.12);
    overflow: hidden;
    .logo {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 384px;
      img {
        display: block;
        width: 30px;
        height: 30px;
        background: #999;
      }
      .name {
        font-size: 24px;
        background: linear-gradient(
          0deg,
          rgba(0, 179, 138, 1) 0%,
          rgba(138, 201, 142, 1) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-left: 17px;
      }
    }
    .nav {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      font-weight: bold;
      .left {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .link {
          color: #333333;
          padding: 13px 36px;
        }
        .active {
          color: #00b38a;
          border: 1px solid #00b38a;
          border-radius: 4px;
        }
      }
      .right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .login,
        .signin {
          border-radius: 4px;
          padding: 11px 24px;
        }
        .login {
          background: #00b38a;
          color: #fff;
        }
        .signin {
          color: #00b38a;
        }
      }
    }
  }
}
</style>

<script>
import floor1 from "./floor_1";
import floor2 from "./floor_2";
import floor3 from "./floor_3";
import floor4 from "./floor_4";
export default {
  components: {
    floor1: floor1,
    floor2: floor2,
    floor3: floor3,
    floor4: floor4
  }
};
</script>
