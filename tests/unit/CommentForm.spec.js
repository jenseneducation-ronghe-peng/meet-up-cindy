import { mount, RouterLinkStub, createLocalVue } from "@vue/test-utils";
import CommentForm from "../../src/components/CommentForm.vue";
import Comment from "../../src/components/Comment.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("CommentForm", () => {
  let wrapper;
  let actions;
  let store;

  let commentList = [];
  actions = {
    addNewComment: jest.fn()
  };

  store = new Vuex.Store({
    actions,
    state: {
      commentList: commentList
    }
  });

  it("should not show Comment.vue in CommentFrom.vue", () => {
    let data = () => ({
      id: null,
      input: ""
    });
    wrapper = mount(CommentForm, {
      localVue,
      data: data,
      store,
      stubs: {
        RouterLink: RouterLinkStub
      },
      propsData: {
        //commentList: [],
        eventId: 1
      }
    });
    let findComment = wrapper.findComponent(Comment);
    const expected = false;
    const actual = findComment.exists();

    expect(actual).toBe(expected);
  });

  it("should call function addNewComment when submit the form in CommentForm.vue", async () => {
    let data = () => ({
      id: 1,
      input: "I love to go to this meetup event."
    });
    wrapper = mount(CommentForm, {
      localVue,
      data: data,
      store,
      stubs: {
        RouterLink: RouterLinkStub
      },
      propsData: {
        commentList: [],
        eventId: 1
      }
    });
    let form = wrapper.find(".commentForm");
    let callsBefore = actions.addNewComment.mock.calls.length;
    await form.trigger("submit.prevent");
    let callsAfter = actions.addNewComment.mock.calls.length;
    await wrapper.vm.$nextTick();
    const expected = 1;
    const actual = callsAfter - callsBefore;
    expect(actual).toBe(expected);
  });

  it("should show 1 Comment.vue in CommentFrom.vue", () => {
    let data = () => ({
      id: null,
      input: ""
    });
    let newStore = new Vuex.Store({
      actions,
      state: {
        commentList: [
          { id: 1, comment: "I love to go to this meetup event", eventId: 1 }
        ]
      }
    });
    wrapper = mount(CommentForm, {
      localVue,
      data: data,
      store: newStore,
      stubs: {
        RouterLink: RouterLinkStub
      },
      propsData: {
        commentList: [
          { id: 1, comment: "I love to go to this meetup event", eventId: 1 }
        ],
        eventId: 1
      }
    });
    let findComment = wrapper.findComponent(Comment);
    const expected = true;
    const actual = findComment.exists();

    expect(actual).toBe(expected);
  });
});
