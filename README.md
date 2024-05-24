# Vue 3 Intro


<!-- TABLE OF CONTENTS -->
### Table of Contents

- [Create a Vue app](#create-a-vue-app)
- [Attribute Binding](#attribute-binding)
- [Conditional Rendering](#conditional-rendering)
- [List Rendering](#list-rendering)
- [Event Handling](#event-handling)
- [Class and Style binding](#class-and-style-binding)
- [Computed Properties](#computed-properties)
- [Components & Props](#components-and-props)
- [Communicating Events or Emit](#communicating-events-or-emitting-events)
- [Forms & v-model](#forms-and-v-model)

### Create a Vue app

- initialize the Vue project. create a Vue app using cdn.
- returned the product data from the app's option object.
- show the product dynamically on the UI.


<hr>


### Attribute Binding

In Vue.js, attribute binding allows you to dynamically bind HTML attributes to data in your Vue instances. This is achieved using the `v-bind` directive or its shorthand, `:`. By binding attributes, you can make them reactive, meaning they will update automatically whenever the underlying data changes.

- Here's a list of common attribute bindings in Vue.js along with examples:

1. **Basic Attribute Binding**:
   ```html
   <div v-bind:id="dynamicId"></div>
   <!-- Shorthand -->
   <div :id="dynamicId"></div>
   ```

2. **Binding with Expressions**:
   ```html
   <img :src="'/images/' + imageName">
   ```

3. **Boolean Attributes**:
   ```html
   <button :disabled="isDisabled">Button</button>
   ```

4. **Binding Class**:
   ```html
   <div :class="{ active: isActive, 'text-danger': hasError }"></div>
   <!-- Binding class as an array -->
   <div :class="[activeClass, errorClass]"></div>
   ```

5. **Binding Style**:
   ```html
   <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
   <!-- Binding style as an array -->
   <div :style="[baseStyles, overridingStyles]"></div>
   ```

6. **Binding Inline Styles**:
   ```html
   <div :style="stylesObject"></div>
   ```
   ```js
   data() {
     return {
       stylesObject: {
         color: 'red',
         fontSize: '14px'
       }
     }
   }
   ```

7. **Dynamic Attributes**:
   ```html
   <a :[attributeName]="url">Link</a>
   ```
   ```js
   data() {
     return {
       attributeName: 'href',
       url: 'https://example.com'
     }
   }
   ```

8. **Binding `data` Attributes**:
   ```html
   <div :data-id="dynamicDataId"></div>
   ```

9. **Binding `aria` Attributes**:
   ```html
   <div :aria-label="ariaLabel"></div>
   ```

10. **Binding `title` Attribute**:
    ```html
    <div :title="tooltipText"></div>
    ```

### Example in Context

Here's a comprehensive example demonstrating various attribute bindings in a Vue component:

```html
<template>
  <div>
    <!-- Basic Attribute Binding -->
    <div :id="dynamicId">Dynamic ID</div>

    <!-- Binding with Expressions -->
    <img :src="'/images/' + imageName" alt="Dynamic Image">

    <!-- Boolean Attributes -->
    <button :disabled="isDisabled">Button</button>

    <!-- Binding Class -->
    <div :class="{ active: isActive, 'text-danger': hasError }">Class Binding</div>

    <!-- Binding Style -->
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">Style Binding</div>

    <!-- Dynamic Attributes -->
    <a :[attributeName]="url">Dynamic Attribute</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicId: 'unique-id-123',
      imageName: 'example.jpg',
      isDisabled: true,
      isActive: true,
      hasError: false,
      activeColor: 'blue',
      fontSize: 20,
      attributeName: 'href',
      url: 'https://example.com',
    };
  },
};
</script>
```

In this example, various attribute bindings demonstrate how Vue.js can dynamically update HTML attributes based on the component's data properties. This makes the application reactive and dynamic, enhancing the user experience by automatically reflecting data changes in the UI.


<hr>


### Conditional Rendering

- showing conditional rendering using `v-if`, `v-else-if`, `v-else`, and `v-show`.

- `v-if` and `v-show` are same. The difference is if the condition is false, `v-if` will be hidden from DOM but the `v-show` element will exist with `display: none;` style


<hr>


### List Rendering

- `v-for` directive for list rendering

```javascript
<div v-for="variant in variants" :key="variant.id">{{ variant.color }}</div>
```

- Inside the v-for expression, we wrote: `variant in variants`. Here, `variants` refers to the `variants` array in our data, and `variant` is the alias for the current element from that array, as we’re looping through it to print out a new li.

Each li will display that array element because in the inner HTML we have written and expression: `{{ variant.color }}` to print out each detail.

- By saying `:key="variant.id"`, we’re using the shorthand for `v-bind` to the variant’s `id` to the key attribute this gives each DOM element a unique so that Vue can grasp onto the element and not lost track of it as  things update within the app

This provides some performance improvements, and later down the line, if you are doing something like animating your elements. You will find that the `key` attribute really helps Vue effectively manage your elements as they move around the DOM.


<hr>


### Event Handling

- handling events in Vue using `v-on` directive, shorthand `@`
- created a click handler for increment cart value and a mouseover for changing the image.

<hr>


### Class and Style binding

```javascript

// class binding
<div :class="{activeClass : isActive}"></div>

// class binding: multiple classes
<div class="circle-color" :class="{className : isActive}"></div>

// class binding: ternary operators
<div :class="[isActive ? 'isActive' : '']"></div>

// class binding
<div :class="!inStock ? 'disabledButton' : ''"></div>

// Camelcased property name in style object
<div :style="{backgroundColor: variant.color}"></div>

// kebab-cased property name in style object
<div :style="{'background-color': variant.color}"></div>

// style binding: object (index.html)
<div :style="styles"></div>
// (main.js)
data(){
  return{
    styles: {
      fontSize: '20px',
      color: 'red',
    }
  }
}


```


<hr>


### Computed properties

- Computed property returns a single value. computed properties cache value in a way and only update when needs to, when its dependences changed 


<hr>


### Components and Props

- Components: building blocks of a Vue app.
- Props: A custom attribute for passing data into a component


<hr>


### Communicating Events or Emitting Events

In Vue.js, the `emit` function is used to communicate from a child component to a parent component.

Emit Events: Tells parent when event happens

<hr>


### Forms and v-model

- `v-model` is a directive in Vue.js that creates a two-way binding on form elements, meaning any changes to the input are immediately reflected in the data and vice versa.

- In Vue.js, `v-model`.number is a modifier that you can use with the `v-model` directive to automatically convert the input value to a number. This is particularly useful when you're dealing with numeric inputs and you want to ensure the data type is consistent.

- In Vue.js, the `v-model` directive has three main modifiers that you can use to modify its behavior. These modifiers are:

1. lazy
2. number
3. trim

- In Vue.js, the `@submit.prevent` directive is a shorthand for adding an event listener to a form's submit event and preventing the default form submission behavior. 

The @submit.prevent directive consists of:

- `@submit`: This is an event listener for the form's submit event.
- `.prevent`: This is a modifier that calls `event.preventDefault()`, which prevents the default action of the form submission.
