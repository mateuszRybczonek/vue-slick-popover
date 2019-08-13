<template>
  <div class="vue-slick-popover-content">
    <div class="vue-slick-popover-content__arrow" x-arrow />
    <div class="vue-slick-popover-content__body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "VueSlickPopoverContent"
};
</script>

<style lang="scss" scoped>
.vue-slick-popover-content {
  z-index: 50;

  &__arrow {
    position: absolute;
    border-color: #fff;
  }

  &__body {
    display: inline-block;
    flex: 1;
    width: 100%;
    text-align: center;
    border-radius: 0.25rem;
    user-select: none;
    background-color: #fff;
    -webkit-box-shadow: 0 15px 35px 0 rgba(51, 64, 82, 0.15),
      0 5px 15px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 15px 35px 0 rgba(51, 64, 82, 0.15),
      0 5px 15px rgba(0, 0, 0, 0.1);
    box-shadow: 0 15px 35px 0 rgba(51, 64, 82, 0.15),
      0 5px 15px rgba(0, 0, 0, 0.1);
  }
}
</style>

<style lang="scss">
.vue-slick-popover {
  &[x-placement^="top"] {
    margin-bottom: 8px;

    .vue-slick-popover-content__arrow {
      bottom: -8px;
      left: calc(50% - 8px);
      margin-top: 0;
      margin-bottom: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 8px solid #fff;
    }
  }

  &[x-placement^="bottom"] {
    margin-top: 8px;

    .vue-slick-popover-content__arrow {
      top: -8px;
      left: calc(50% - 8px);
      margin-top: 0;
      margin-bottom: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 8px solid #fff;
    }
  }

  &[x-placement^="right"] {
    margin-left: 8px;

    .vue-slick-popover-content__arrow {
      top: calc(50% - 8px);
      left: -8px;
      margin-right: 0;
      margin-left: 0;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-right: 8px solid #fff;
    }
  }

  &[x-placement^="left"] {
    margin-right: 8px;

    .vue-slick-popover-content__arrow {
      top: calc(50% - 8px);
      right: -8px;
      margin-right: 0;
      margin-left: 0;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-left: 8px solid #fff;
    }
  }
}
</style>
