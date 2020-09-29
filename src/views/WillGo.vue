<template>
  <div class="WillGo">
    <Eventlist v-bind:events="joinlist" />
  </div>
</template>

<script>
// @ is an alias to /src
import Eventlist from "../components/Eventlist.vue";

export default {
  name: "WillGo",
  components: {
    Eventlist,
  },
  created() {
    this.$store.dispatch("getJoin");
    this.$store.state.joinBtn = true;
    this.$store.state.linkActive = true;
    this.$store.state.commentBtn = false;
  },
  computed: {
    /*listExist() {
      var list = this.$store.state.joinlist;
      if (list.length === 0) {
        return false;
      } else {
        return true;
      }
    },*/
    joinlist() {
      return this.$store.state.joinlist;
    },
  },
};
</script>
