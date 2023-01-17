<template>
  <div>
    <h1>Home</h1>
    <PostList :posts="posts" />
  </div>
</template>
<script>
import PostList from "../components/PostList.vue";
import { ref } from "vue";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const posts = ref([
      {
        title: "welcome to the blog",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil eaque nesciunt aut fuga eligendi odio ipsam blanditiis ipsa corporis autem, dicta architecto unde voluptates quisquam! Laudantium, quae laborum cumque minus magnam ab blanditiis optio earum dolore placeat atque sint maiores architecto, veritatis voluptatum accusantium nostrum repellat consequatur dicta maxime similique vel culpa. Deserunt id adipisci ad laborum ex nam alias vel dolores fugit a qui rerum, quos modi aliquam vero quidem deleniti debitis veniam fuga tempore molestias odit voluptates reprehenderit officia. Tempore unde amet exercitationem deleniti saepe rem natus, optio libero voluptas quaerat nihil maiores, eligendi nulla sequi in laboriosam!",
        id: 1,
      },
      { title: "top 5 CSS tips", body: "lorem ipsum", id: 2 },
    ]);
    return { posts };
  },
};
</script>
<style></style>
