# vue-slick-popover

> Popover component using popper.js for Vue.js apps

## Installation

```bash
npm install vue-slick-popover
```

## Documentation
https://vue-slick-popover.netlify.com/docs

## Demos

[Simple usage](https://codesandbox.io/s/vue-slick-popover-demo-l94h5)

[Dropdown menu](https://codesandbox.io/s/vue-slick-popover-demo-dropdown-menu-ft9ft
)

[Temporary form](https://codesandbox.io/s/vue-slick-popover-temporary-form-3q1be
)

[Onboarding](https://codesandbox.io/s/vue-slick-popover-demo-onboarding-6or57
)

## Usage

```html
<template>
  <div id="app">
    <img ref="popoverReference" width="20%" src="./assets/logo.png" @click="openPopover">
    
    <VueSlickPopover
      v-if="isPopoverVisible"
      :popover-options="popoverOptions"
      @closePopover="closePopover"
    >
      <VueSlickPopoverContent>
        <p @closePopover="closePopover">Content</p>
      </VueSlickPopoverContent>
    </VueSlickPopover>
  </div>
</template>
```

```js
import Vue from "vue"
import { VueSlickPopover, VueSlickPopoverContent } from "vue-slick-popover"
import "vue-slick-popover/dist/vue-slick-popover.css"

export default {
    components: {
        VueSlickPopover,
        VueSlickPopoverContent
    },
    
    data() {
        return {
          isPopoverVisible: false,
          popoverOptions: {
            animation: "scale-fade",
            popoverReference: null,
            placement: "top",
            offset: "0,0"
          }
        }
      },
    
      mounted() {
        this.popoverOptions.popoverReference = this.$refs.popoverReference
      },
    
      methods: {
        closePopover() {
          this.isPopoverVisible = false
        },
    
        openPopover() {
          this.isPopoverVisible = true
        }
      }
}
```

## Development

### Launch visual tests

```bash
npm run watch
```

### Build

Bundle the js and css of to the `dist` folder:

```bash
npm build
```

## Publishing

The `prepare` hook will ensure dist files are created before publishing. This
way you don't need to commit them in your repository.

```bash
# Bump the version first
# It'll also commit it and create a tag
npm version
# Push the bumped package and tags
git push --follow-tags
# Ship it 🚀
npm publish
```

## License

[MIT](http://opensource.org/licenses/MIT)
