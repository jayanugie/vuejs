<template>
  <div class="backdrop" @click="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "text", "theme"],
  methods: {
    closeModal() {
      this.$emit('close')
      // this emit will be pass to parent file
    }
  }
};
</script>

<style scoped>
/* use 'scoped' for apply style only in this file */
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}

.backdrop {
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.modal h1 {
  color: green;
  text-decoration: none;
}

.sale {
  background: crimson;
  color: white;
}

.sale h1 {
  color: white;
}

</style>
