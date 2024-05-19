# Vue 3 Intro

### Attribute binding

In Vue.js, attribute binding allows you to dynamically bind HTML attributes to data in your Vue instances. This is achieved using the `v-bind` directive or its shorthand, `:`. By binding attributes, you can make them reactive, meaning they will update automatically whenever the underlying data changes.

Here's a list of common attribute bindings in Vue.js along with examples:

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