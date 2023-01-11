<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name" />
  <button @click="handleClick">click me</button>
  <div v-if="showModal">
    <Modal :header="header" :text="text" theme="sale" @close="toggleModal">
      <!-- slots -->
      <template v-slot:links>
        <a href="#">sign up now</a>        
        <a href="#">more info</a>        
      </template>
      <p>Ninja Giveaway</p>

    </Modal>
  </div>
  <p>Welcome...</p>
  <button @click.alt="toggleModal">open modal (alt)</button>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My First Vue App :)",
      header: "Sign up for the Giveaway!",
      text: "Grab your ninja swag for half price!",
      showModal: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}

</style>
