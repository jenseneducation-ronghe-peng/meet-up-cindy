<template>
  <div class="JoinBtn">
    <div v-if="!shouldDisable">
      <button class="yesBtn" v-on:click="addToList">Yes, I'm in!</button>
    </div>
    <div v-else>
      <button class="noBtn" v-on:click="RemoveFromList">Not going</button>
    </div>
  </div>
</template>
<script>
//import { mapActions } from "vuex";
export default {
  name: "JoinBtn",
  components: {},
  props: ["id"],
  data: () => ({
    shouldDisable: false,
  }),
  async created() {
    await this.$store.dispatch("getJoin");
    var joinedList = this.$store.state.joinlist;
    if (joinedList) {
      if (joinedList.length !== 0) {
        var hasJoin = joinedList.find((item) => item.id === this.id);
        if (hasJoin) {
          this.shouldDisable = true;
        } else {
          this.shouldDisable = false;
        }
      } else {
        this.shouldDisable = false;
      }
    }
  },
  computed: {},
  methods: {
    addToList() {
      this.$store.dispatch("addEvent", this.id);
      this.$store.dispatch("getJoin");
      this.shouldDisable = true;
    },
    RemoveFromList() {
      this.$store.dispatch("deleteEvent", this.id);
      this.$store.dispatch("getJoin");
      this.shouldDisable = false;
    },
  },
};
</script>
<style scoped>
button {
  cursor: pointer;
}
</style>