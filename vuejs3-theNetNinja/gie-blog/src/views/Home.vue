<template>
  <div>
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading ...</div>
  </div>
</template>
<script>
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const { posts, error, load } = getPosts();

    load();

    return { posts, error };
  },
};
</script>
<style></style>
