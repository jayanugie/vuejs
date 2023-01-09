const { createApp } = Vue;

createApp({
  data() {
    return {
      showForm: false,
      items: [
        {
          title: "Vue",
          desc: "what a green",
          image: "vue.png",
          state: true,
        },
        {
          title: "React",
          desc: "blue from facebook",
          image: "react.png",
          state: false,
        },
      ],
    };
  },
  methods: {
    submitForm(event) {
      const els = event.target.elements;

      let title = els.title.value;
      let desc = els.desc.value;
      let image = els.image.value;

      this.items.push({
        title: title,
        desc: desc,
        image: image,
        state: false,
      });

      els.title.value = "";
      els.desc.value = "";
      els.image.value = "";

      this.showForm = false;
    },
  },
  computed: {
    completedItems() {
      return this.items.filter((item) => item.state == true).length;
    },
  },
}).mount("#subject");
