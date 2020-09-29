<template>
  <div class="HasBeen">
    <Eventlist v-bind:events="hasbeen" />
  </div>
</template>

<script>
// @ is an alias to /src
import Eventlist from "../components/Eventlist.vue";

export default {
  name: "HasBeen",
  components: {
    Eventlist,
  },
  created() {
    this.$store.dispatch("getHasJoin");
    this.$store.dispatch("getCommentList");
    this.$store.state.joinBtn = false;
    this.$store.state.linkActive = false;
    this.$store.state.commentBtn = true;
  },
  computed: {
    hasbeen() {
      return this.$store.state.hasjoint;
    },
  },
};
</script>
