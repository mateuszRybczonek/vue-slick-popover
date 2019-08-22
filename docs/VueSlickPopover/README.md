# vue-slick-popover

> Popover component using popper.js for Vue.js apps

## Installation

```js
npm install vue-slick-popover
````

## Basic usage

### 1. Import component
```js
import Vue from "vue"
import { VueSlickPopover, VueSlickPopoverContent } from "vue-slick-popover"
import "vue-slick-popover/dist/vue-slick-popover.css"

export default {
    components: {
        VueSlickPopover,
        VueSlickPopoverContent
    }
}
```

### 2. Use component
```html
<template>
  <div>
    // trigger element
    <img ref="popoverReference" width="20%" src="./assets/logo.png" @click="openPopover">
    
    // popover component
    <VueSlickPopover
      v-if="isPopoverVisible"
      :popover-options="popoverOptions"
      @closePopover="closePopover"
    >
      // popover content
      <VueSlickPopoverContent>
        <p @closePopover="closePopover">Content</p>
      </VueSlickPopoverContent>
    </VueSlickPopover>
  </div>
</template>
```

```js
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
```

### 3. Demo

<DemoVueSlickPopover />

[Sandbox demo](https://codesandbox.io/s/vue-slick-popover-demo-l94h5)

## Listeners

### closePopover

Function fired when user clicks on the popover overlay.

## popover-options

### placement

- type: String
- default: `top`

- available options:
  - `top`
  - `top-start`
  - `top-end`
  - `right`
  - `right-start`
  - `right-end`
  - `bottom`
  - `bottom-start`
  - `bottom-end`
  - `left`
  - `left-start`
  - `left-end`

Popover placement in relation to trigger element.
[Popper.js documentation](https://popper.js.org/popper-documentation.html#Popper.placements)


### animation

- type: String
- default: `scale-fade`
- available options: 
    - `null`,
    - `scale-fade`,
    - `fade`

Animation applied to popover when showing up.

### offset

- type: String
- default: `0,0`

Modifier that shifts your popper on both its axis.

It accepts the following units:
- px or unit-less, interpreted as pixels
- % or %r, percentage relative to the length of the reference element
- %p, percentage relative to the length of the popper element
- vw, CSS viewport width unit
- vh, CSS viewport height unit

You can provide a single value (as Number or String), or a pair of values as String divided by a comma.

[Popper.js documentation](https://popper.js.org/popper-documentation.html#modifiers..offset)
