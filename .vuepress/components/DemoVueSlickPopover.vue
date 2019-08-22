<template>
  <div class="container">
    <section class="demo">
      <img
        ref="vueSlickPopoverReference"
        class="demo-trigger"
        width="20%"
        src="./assets/logo.png"
        alt="vue logo"
        @click="openPopover"
      />
      <VueSlickPopover
        v-if="isPopoverVisible"
        :popover-options="popoverOptions"
        :animation-duration="animationDuration"
        @closePopover="closePopover"
      >
        <VueSlickPopoverContent>
          <div class="demo-content">
            <img src="./assets/vue-kiss.svg" alt="vue kiss icon"/>
          </div>
        </VueSlickPopoverContent>
      </VueSlickPopover>
    </section>

    <section class="properties">
      <h3>popover-options</h3>
      <article class="property">
        <h4>placement</h4>
        <select class="vuepress-select" v-model="popoverOptions.placement">
          <option disabled value="">Please select one</option>
          <option>top</option>
          <option>top-start</option>
          <option>top-end</option>
          <option>right</option>
          <option>right-start</option>
          <option>right-end</option>
          <option>bottom</option>
          <option>bottom-start</option>
          <option>bottom-end</option>
          <option>left</option>
          <option>left-start</option>
          <option>left-end</option>
        </select>
      </article>

      <article class="property">
        <h4>animation</h4>
        <select class="vuepress-select" v-model="popoverOptions.animation">
          <option value="null">none</option>
          <option>scale-fade</option>
          <option>fade</option>
        </select>
      </article>

      <article class="property">
        <h4>offset</h4>
        <input v-model="popoverOptions.offset" />
      </article>

      <article class="properties">
        <h3>animation-duration</h3>
        <input v-model="animationDuration" type="number" />
      </article>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPopoverVisible: false,
      popoverOptions: {
        animation: 'scale-fade',
        popoverReference: null,
        placement: "top",
        offset: "0,0"
      },
      animationDuration: 300
    };
  },

  mounted() {
    this.popoverOptions.popoverReference =
      this.$refs.vueSlickPopoverReference ||
      this.$refs.vueSlickPopoverReference.$el;
  },

  methods: {
    closePopover() {
      this.isPopoverVisible = false;
    },

    openPopover() {
      this.isPopoverVisible = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./styles/index.scss";

.container {
  margin-top: 70px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.demo {
  display: flex;
  justify-content: center;

  &-trigger {
    cursor: pointer;
  }

  &-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 80px;
  }
}

.properties {
  margin-top: 70px;
}

.property {
  margin-top: 40px;
}

.vuepress-select {
  border: 0;
  color: #eee;
  background: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 2px 10px;
  height: 30px;
  -webkit-appearance: none;
  cursor: pointer;
  overflow: hidden;
  width: 350px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  box-shadow: 1px 1px 6px #330033;
  background: $primary-gradient-end url("http://i62.tinypic.com/15xvbd5.png")
  no-repeat scroll 319px center;
}

</style>
