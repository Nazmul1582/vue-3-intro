# Vue 3 Intro

### List Rendering

- `v-for` directive for list rendering

```javascript
<div v-for="variant in variants" :key="variant.id">{{ variant.color }}</div>
```

- Inside the v-for expression, we wrote: `variant in variants`. Here, `variants` refers to the `variants` array in our data, and `variant` is the alias for the current element from that array, as we’re looping through it to print out a new li.

Each li will display that array element because in the inner HTML we have written and expression: `{{ variant.color }}` to print out each detail.

- By saying `:key="variant.id"`, we’re using the shorthand for `v-bind` to the variant’s `id` to the key attribute this gives each DOM element a unique so that Vue can grasp onto the element and not lost track of it as  things update within the app

This provides some performance improvements, and later down the line, if you are doing something like animating your elements. You will find that the `key` attribute really helps Vue effectively manage your elements as they move around the DOM.
