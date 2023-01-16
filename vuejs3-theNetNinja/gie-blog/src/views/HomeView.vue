<template>
  <div class="home">
    home
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">add 1 to age</button>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HomeView",
  setup() {
    const p = ref(null);

    // not reactive
    // let name = "mario";
    // let age = 30;

    // reactive
    let name = ref("mario");
    let age = ref(30);

    const handleClick = () => {
      name.value = "luigi";
      age.value = 35;
    };

    return { name, age, handleClick };
  },
};
</script>
