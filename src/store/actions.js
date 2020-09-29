import {
  fetchData,
  fetchJoinlist,
  fetchhasJoinList,
  fetchCommentList
} from "../assets/data/fetchData.js";

const actions = {
  async getData({ commit }) {
    const data = await fetchData();
    commit("showData", data);
  },
  addEvent({ commit }, id) {
    var joinedEvent = this.state.joinlist.find(event => event.id === id);
    if (!joinedEvent) {
      var willJoinEvent = this.state.eventlist.find(event => event.id === id);
      commit("putEvent", willJoinEvent);
    }
  },
  async getJoin({ commit }) {
    const data = await fetchJoinlist();
    if (data) {
      commit("showJoin", data);
    }
  },
  async getHasJoin({ commit }) {
    const data = await fetchhasJoinList();
    if (data) {
      commit("showHasJoin", data);
    }
  },
  async getCommentList({ commit }) {
    const data = await fetchCommentList();
    if (data) {
      commit("showCommentList", data);
    }
  },
  addNewComment({ commit }, comment) {
    commit("updataCommentList", comment);
  },
  deleteEvent({ commit }, id) {
    commit("removeFromWillGo", id);
  }
};

export default actions;
