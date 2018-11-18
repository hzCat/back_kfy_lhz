<template>
    <div class="container floor-2">
        <lazy-component>
            <img src="./../../assets/homepage/pic_noEquipment@2x.png" alt="">
        </lazy-component>
    </div>
</template>
<style lang="less">
.floor-2 {
  img {
    max-width: 1199px;
    margin: 0 auto;
  }
}
</style>
<script>
export default {
  date() {
    return {
      imgUrl: require("./../../assets/homepage/pic_noEquipment@2x.png")
    };
  }
};
</script>
