<template>
  <div class="Comment">
    <p>{{comment.comment}}</p>
  </div>
</template>

<script>
export default {
  name: "Comment",
  components: {},
  props: ["comment"],
  methods: {},
  created() {},
  computed: {},
};
</script>
<style scoped>
.Comment {
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 0.5rem;
  text-align: left;
  padding: 0.3rem;
}
</style>
