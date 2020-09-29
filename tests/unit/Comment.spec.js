import { mount, createLocalVue } from "@vue/test-utils";
import Comment from "../../src/components/Comment.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Comment", () => {
  let wrapper;
  let comment = {
    comment: "I go here everyday, very good, benefit for everyone.",
    eventId: 8,
    id: 2
  };

  wrapper = mount(Comment, {
    localVue,
    propsData: { comment }
  });
  it("should show comment in Comment.vue", () => {
    const expected = comment.comment;
    const actual = wrapper.find(".Comment").text();

    expect(actual).toBe(expected);
  });
});
