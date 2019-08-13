<template>
  <div>
    <div
      ref="vueSlickPopoverContent"
      class="vue-slick-popover"
    >
      <slot />
    </div>

    <div
      ref="vueSlickPopoverOverlay"
      class="vue-slick-popover__overlay"
      @click.stop="destroyPopover"
    />
  </div>
</template>

<script>
import Popper from "popper.js";
import velocity from "velocity-animate";

const QUICK_ANIMATION_DURATION = 100;
const DEFAULT_ANIMATION_DURATION = 300;
const ARROW_WIDTH = 10;
const ARROW_HEIGHT = 16;

export default {
  name: "VueSlickPopover",

  props: {
    popoverOptions: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      popperInstance: null
    };
  },

  mounted() {
    this.initPopper(this.animateInPopover);
    this.updateOverlayPosition();
  },

  methods: {
    animateInPopover(popperInstanceData) {
      const popperInstance = this.popperInstance;
      const popoverOptions = this.popoverOptions;

      if (popperInstance) {
        const popoverContentNode = this.$refs.vueSlickPopoverContent;

        switch (popoverOptions.animation) {
          case "fade":
            velocity(
              popoverContentNode,
              { opacity: [1, 0] },
              { duration: QUICK_ANIMATION_DURATION }
            );
            break;

          case "scale-fade":
            const popperArrowOffset = popperInstanceData.offsets.arrow;

            const translateString = popoverContentNode.style.transform;
            const finalLeftPosition = this.getXValueFromTranslate3d(
              translateString
            );
            const finalTopPosition = this.getYValueFromTranslate3d(
              translateString
            );

            this.$nextTick(() => {
              const popperPlacement = popperInstanceData.placement;
              let arrowOffsetLeft = 0;
              let arrowOffsetTop = 0;
              let initialLeftPosition = finalLeftPosition;

              if (popperPlacement.includes("top")) {
                arrowOffsetTop =
                  popoverContentNode.clientHeight -
                  popperArrowOffset.top -
                  ARROW_HEIGHT / 2;
              } else if (popperArrowOffset.top !== "") {
                arrowOffsetTop = popperArrowOffset.top + ARROW_HEIGHT / 2;
              }

              if (popperPlacement.includes("left")) {
                arrowOffsetLeft =
                  popoverContentNode.clientWidth -
                  popperArrowOffset.left -
                  ARROW_WIDTH / 2;

                initialLeftPosition = finalLeftPosition + ARROW_WIDTH;
              } else if (popperPlacement.includes("right")) {
                initialLeftPosition = finalLeftPosition - ARROW_WIDTH / 2;
              } else if (popperArrowOffset.left !== "") {
                arrowOffsetLeft = popperArrowOffset.left + ARROW_WIDTH / 2;
              }

              velocity(
                popoverContentNode,
                {
                  opacity: [0.9, 0],
                  scaleX: [1.1, 0.2],
                  scaleY: [1.1, 0.2],
                  top: [finalTopPosition, finalTopPosition],
                  left: [finalLeftPosition, initialLeftPosition],
                  transformOriginX: [arrowOffsetLeft, arrowOffsetLeft],
                  transformOriginY: [arrowOffsetTop, arrowOffsetTop]
                },
                { duration: DEFAULT_ANIMATION_DURATION * 0.75 }
              );

              velocity(
                popoverContentNode,
                {
                  opacity: [1, 0.9],
                  scaleX: [1, 1.1],
                  scaleY: [1, 1.1],
                  top: [finalTopPosition, finalTopPosition],
                  left: [finalLeftPosition, finalLeftPosition],
                  transformOriginX: [arrowOffsetLeft, arrowOffsetLeft],
                  transformOriginY: [arrowOffsetTop, arrowOffsetTop]
                },
                { duration: DEFAULT_ANIMATION_DURATION * 0.25 }
              );
            });
            break;

          default:
            this.$refs.popoverContent.style.opacity = 1;
            break;
        }
      }
    },

    getXValueFromTranslate3d(translateString) {
      const n = translateString.indexOf("(");
      const n1 = translateString.indexOf(",");

      return parseInt(translateString.slice(n + 1, n1 - 2));
    },

    getYValueFromTranslate3d(translateString) {
      const n = translateString.indexOf(",");
      const n1 = translateString.indexOf(")");

      return parseInt(translateString.slice(n + 1, n1 - 1));
    },

    initPopper(animateMethod) {
      const modifiers = {};
      const { popoverReference, offset, placement } = this.popoverOptions;

      if (offset) {
        modifiers.offset = {
          offset
        };
      }

      if (placement) {
        modifiers.placement = placement;
      }

      this.popperInstance = new Popper(
        popoverReference,
        this.$refs.vueSlickPopoverContent,
        {
          placement,
          modifiers: {
            ...modifiers,
            preventOverflow: {
              boundariesElement: "viewport"
            }
          },
          onCreate(data) {
            animateMethod(data);
          }
        }
      );
    },

    destroyPopover() {
      this.animateOutPopover();

      setTimeout(() => {
        if (this.popperInstance) {
          this.popperInstance.destroy();
          this.popperInstance = null;
          this.$emit("closePopover");
        }
      }, QUICK_ANIMATION_DURATION);
    },

    animateOutPopover() {
      velocity(
        this.$refs.vueSlickPopoverContent,
        { opacity: 0 },
        { duration: QUICK_ANIMATION_DURATION }
      );
    },

    updateOverlayPosition() {
      const overlayElement = this.$refs.vueSlickPopoverOverlay;
      const overlayPosition = overlayElement.getBoundingClientRect();

      overlayElement.style.transform = `translate(-${overlayPosition.x}px, -${
        overlayPosition.y
      }px)`;
    }
  }
};
</script>

<style lang="scss" scoped>
.vue-slick-popover {
  position: relative;
  z-index: 50;

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 40;
    width: 100%;
    height: 100vh;
  }
}
</style>
