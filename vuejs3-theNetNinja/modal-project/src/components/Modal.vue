<template>
  <div class="backdrop">
    <div class="modal">
      <h1>Modal Title</h1>
      <p>Modal Content</p>
    </div>
  </div>
</template>

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

h1 {
  color: green; 
  text-decoration: none;
}

</style>
