<template>
  <div>
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }} - {{ nameOne }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }} - {{ nameTwo }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "RefsReactive",
  setup() {
    // ref vs reactive
    // better to use refs

    const ninjaOne = ref({ name: "mario", age: 30 });
    const ninjaTwo = reactive({ name: "luigi", age: 35 });

    const nameOne = ref("mario");
    const nameTwo = ref("luigi"); // not reactive

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
      nameOne.value = "luigi";
    };

    const updateNinjaTwo = () => {
      ninjaTwo.age = 45;
      nameTwo = "mario"; // doesn't work
    };

    return {
      ninjaOne,
      updateNinjaOne,
      ninjaTwo,
      updateNinjaTwo,
      nameOne,
      nameTwo,
    };
  },
};
</script>
