<template>
  <div class="Description" v-if="event">
    <div class="backDiv">
      <router-link v-bind:to="'/'">
        <button class="goBackHome">Go Back Home</button>
      </router-link>
    </div>

    <h1 class="descriptionTitle">{{event.title}}</h1>
    <img class="eventImg" v-if="event.pic" v-bind:src="require(`../assets/img/${event.pic}.jpg`)" />
    <h4>{{event.time}}</h4>
    <h5>{{event.location}}</h5>
    <div class="desc">
      <p>{{event.desc}}</p>
    </div>
    <JoinBtn v-bind:id="event.id" />
  </div>
</template>

<script>
import JoinBtn from "../components/JoinBtn.vue";

export default {
  name: "Description",
  components: {
    JoinBtn,
  },
  created() {
    if (!this.event) {
      this.$router.push("/");
    }
    this.$store.state.commentBtn = false;
    this.$store.state.JoinBtn = true;
  },
  computed: {
    events() {
      return this.$store.state.eventlist;
    },
    event() {
      let id = this.$route.params.id;
      return this.$store.state.eventlist.find((event) => event.id == id);
    },
  },
};
</script>
<style scoped>
.eventImg {
  width: 90%;
}
.backDiv {
  display: flex;
  flex-direction: row;
  justify-content: start;
}
.goBackHome {
  margin-left: 5rem;
}
@media (max-width: 515px) {
  .goBackHome {
    margin-left: 2rem;
  }
}
</style>