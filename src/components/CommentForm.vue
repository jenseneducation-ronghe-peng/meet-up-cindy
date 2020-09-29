<template>
  <div class="CommentForm">
    <form v-on:submit.prevent="addComment" class="commentForm">
      <h3>Your comment</h3>
      <textarea
        name="comments"
        cols="30"
        rows="10"
        v-model="input"
        placeholder="Leave your comment to help others"
        class="inputArea"
      ></textarea>
      <hr />
      <button type="submit" class="leaveComment">Leave Comment</button>
    </form>
    <div v-if="comments">
      <h4>Comments</h4>
      <Comment v-for="comment in commentList" v-bind:key="comment.id" v-bind:comment="comment" />
    </div>
  </div>
</template>

<script>
import Comment from "./Comment.vue";
export default {
  name: "CommentForm",
  components: { Comment },
  props: ["commentList", "eventId"],
  data: () => {
    return {
      id: null,
      input: "",
    };
  },
  methods: {
    addComment() {
      if (this.input !== "") {
        var comment = {
          id: this.commentListLength + 1,
          comment: this.input,
          eventId: this.eventId,
        };
        this.$store.dispatch("addNewComment", comment);
        this.input = "";
      }
    },
  },
  created() {},
  computed: {
    comments() {
      var comments = this.$store.state.commentList;
      var forEventList = comments.filter(
        (comment) => comment.eventId === this.eventId
      );
      if (forEventList.length !== 0) {
        return true;
      } else {
        return false;
      }
    },
    commentListLength() {
      var comments = this.$store.state.commentList;
      return comments.length;
    },
  },
};
</script>
<style scoped>
.inputArea {
  width: 95%;
  border-radius: 10px;
}
</style>