import Data from "./meetup.json";

function fetchData() {
  const LS_KEY = "viewlist_events";
  let fromLs = localStorage.getItem(LS_KEY);

  if (!fromLs) {
    localStorage.setItem(LS_KEY, JSON.stringify(Data.data.events));
    fromLs = localStorage.getItem(LS_KEY);
  }
  return JSON.parse(fromLs);
}

function fetchJoinlist() {
  const LS_KEY = "joinlist";
  let fromLs = localStorage.getItem(LS_KEY);
  if (fromLs) {
    return JSON.parse(fromLs);
  }
}

function fetchhasJoinList() {
  const LS_KEY = "hasjoint_events";
  let fromLs = localStorage.getItem(LS_KEY);

  if (!fromLs) {
    localStorage.setItem(LS_KEY, JSON.stringify(Data.data.haveBeenEvents));
    fromLs = localStorage.getItem(LS_KEY);
  }
  return JSON.parse(fromLs);
}

function fetchCommentList() {
  const LS_KEY = "comment_list";
  let fromLs = localStorage.getItem(LS_KEY);
  if (fromLs) {
    return JSON.parse(fromLs);
  }
}

export { fetchData, fetchJoinlist, fetchhasJoinList, fetchCommentList };
