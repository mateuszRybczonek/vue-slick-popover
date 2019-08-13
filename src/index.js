import VueSlickPopover from "./components/VueSlickPopover/VueSlickPopover.vue";
import VueSlickPopoverContent from "./components/VueSlickPopoverContent/VueSlickPopoverContent.vue";

const plugin = {
  install(Vue) {
    Vue.component("VueSlickPopover", VueSlickPopover);
    Vue.component("VueSlickPopoverContent", VueSlickPopoverContent);
  }
};

export { VueSlickPopover };
export { VueSlickPopoverContent };

// Auto-install
let GlobalVue = null;

if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}
