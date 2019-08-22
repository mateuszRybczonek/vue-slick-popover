import VueSlickPopover from "../src/components/VueSlickPopover/VueSlickPopover";
import VueSlickPopoverContent from "../src/components/VueSlickPopoverContent/VueSlickPopoverContent";

export default ({ Vue }) => {
  Vue.component("VueSlickPopover", VueSlickPopover);
  Vue.component("VueSlickPopoverContent", VueSlickPopoverContent);
};
