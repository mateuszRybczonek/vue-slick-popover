# vue-slick-popover

> Popover component using popper.js for Vue.js apps

## Installation

```bash
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
To use the component you need to:
1. Create a trigger element that will be responsible for showing the popover (that can be anything).
2. Render `VueSlickPopover` component using `v-if` directive responsible for showing an hiding the popover.
3. Pass `popover-options` property to the `VueSlickPopover` with your options.
4. Pass any content into the default slot exposed by the `VueSlickPopover` component (that can be anything).

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

## Example usage

[Simple usage](https://codesandbox.io/s/vue-slick-popover-demo-l94h5)

[Dropdown menu](https://codesandbox.io/s/vue-slick-popover-demo-dropdown-menu-ft9ft
)

[Temporary form](https://codesandbox.io/s/vue-slick-popover-temporary-form-3q1be
)

[Onboarding](https://codesandbox.io/s/vue-slick-popover-demo-onboarding-6or57
)

## Interactive demo

<DemoVueSlickPopover />

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
