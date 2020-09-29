import Vue from "vue";
import Vuex from "vuex";
import {
  //fetchData,
  fetchJoinlist
  //fetchhasJoinList,
  //fetchCommentList
} from "../assets/data/fetchData.js";
import actions from "./actions.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    eventlist: [],
    joinlist: [],
    hasjoint: [],
    joinBtn: true,
    linkActive: true,
    commentBtn: false,
    commentList: []
  },
  mutations: {
    showData(state, data) {
      state.eventlist = data;
    },
    async putEvent(state, event) {
      const data = await fetchJoinlist();
      if (data) {
        state.joinlist = data;
      }
      state.joinlist.push(event);
      localStorage.setItem("joinlist", JSON.stringify(state.joinlist));
    },
    showJoin(state, data) {
      state.joinlist = data;
    },
    showHasJoin(state, data) {
      state.hasjoint = data;
    },
    showCommentList(state, data) {
      state.commentList = data;
    },
    updataCommentList(state, comment) {
      var commentList = state.commentList;
      commentList.push(comment);
      localStorage.setItem("comment_list", JSON.stringify(commentList));
    },
    async removeFromWillGo(state, id) {
      var events = state.joinlist;
      var filteredEvents = events.filter(event => event.id !== id);
      state.joinlist = filteredEvents;
      localStorage.setItem("joinlist", JSON.stringify(state.joinlist));
    }
  },
  actions,
  modules: {}
});
