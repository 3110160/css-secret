module.exports = function wrapper(content) {
  // content = cardWrapper(content);
  // content = escape(content);

  return `
<template>
  <section v-html="content" v-once />
</template>

<script>
export default {
  created() {
    this.content = \`${content}\`;
  },

  mounted() {
    const anchors = [].slice.call(this.$el.querySelectorAll('h2, h3, h4, h5'));

    anchors.forEach(anchor => {
      // anchor.addEventListener('click', this.scrollToAnchor);
    });
  },

  methods: {
    scrollToAnchor(event) {
      if (event.target.id) {
        this.$router.push({
          path: this.$route.path,
          hash: event.target.id
        })
      }
    }
  }
};
</script>
`;
}