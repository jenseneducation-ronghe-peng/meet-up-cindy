<template>
  <div class="home">
    <Eventlist v-bind:events="events" />
  </div>
</template>

<script>
// @ is an alias to /src
import Eventlist from "../components/Eventlist.vue";

export default {
  name: "Home",
  components: {
    Eventlist,
  },
  created() {
    this.$store.dispatch("getData");
    this.$store.state.joinBtn = true;
    this.$store.state.linkActive = true;
    this.$store.state.commentBtn = false;
  },
  computed: {
    events() {
      return this.$store.state.eventlist;
    },
  },
};
</script>