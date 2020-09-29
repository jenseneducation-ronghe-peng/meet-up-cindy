<template>
  <div class="Event">
    <h3 class="eventTitle">{{event.title}}</h3>
    <hr />
    <router-link v-if="linkActive" v-bind:to="'/description/' + event.id">
      <div class="info">
        <img v-if="event.pic" v-bind:src="require(`../assets/img/${event.pic}.jpg`)" />
        <h4>{{event.time}}</h4>
        <p>{{event.location}}</p>
      </div>
    </router-link>
    <div v-else class="info-noLink">
      <img v-if="event.pic" v-bind:src="require(`../assets/img/${event.pic}.jpg`)" />
      <h4>{{event.time}}</h4>
      <p>{{event.location}}</p>
    </div>
    <hr />

    <JoinBtn v-if="joinBtn" v-bind:id="event.id" />
    <CommentForm v-if="commentBtn" v-bind:commentList="commentList" v-bind:eventId="event.id" />
  </div>
</template>
<script>
import JoinBtn from "./JoinBtn.vue";
import CommentForm from "../components/CommentForm.vue";

export default {
  name: "Event",
  components: {
    JoinBtn,
    CommentForm,
  },
  props: ["event"],
  computed: {
    linkActive() {
      return this.$store.state.linkActive;
    },
    joinBtn() {
      return this.$store.state.joinBtn;
    },
    commentBtn() {
      return this.$store.state.commentBtn;
    },
    commentList() {
      var list = this.$store.state.commentList;
      var forEventList = list.filter(
        (comment) => comment.eventId === this.event.id
      );
      return forEventList;
    },
  },
};
</script>
<style scoped>
.Event {
  width: 25%;
  border: 1px solid #999da0;
  border-radius: 10px;
  margin: 1rem;
  padding: 1rem;
}
.info {
  cursor: pointer;
}
img {
  width: 200px;
  height: 150px;
  border-radius: 10px;
}
@media (max-width: 800px) {
  .Event {
    width: 40%;
  }
}
@media (max-width: 515px) {
  .Event {
    width: 60%;
  }
}
@media (max-width: 350px) {
  .Event {
    width: 80%;
  }
}
</style>