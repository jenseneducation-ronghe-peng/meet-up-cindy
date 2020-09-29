import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import Event from "../../src/components/Event.vue";
import JoinBtn from "../../src/components/JoinBtn.vue";
import CommentForm from "../../src/components/CommentForm.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);
const router = new VueRouter();
router.push("/description/4");

describe("Event", () => {
  let wrapper;
  let store;
  let event = {
    id: 4,
    title: "Daily Yoga meetups",
    desc:
      "Yoga lovers look at here! Here you can meet many friends who have the same habit with you! We love Yoga! And all activities in this group are about YOGA!!!",
    location: "Nordstan, Gothenburg",
    time: "September 26, 2020 09:00 to 10:30 GMT+2",
    pic: ""
  };
  let commentList = [
    {
      comment: "I go here everyday, very good, benefit for everyone.",
      eventId: 8,
      id: 2
    }
  ];

  /*beforeEach(() => {
    
  });*/
  it("should show event info in Event.vue", () => {
    store = new Vuex.Store({
      state: {
        commentList: commentList,
        linkActive: true,
        joinBtn: true,
        commentBtn: false
      }
    });

    wrapper = mount(Event, {
      localVue,
      router: router,
      propsData: { event },
      stubs: {
        RouterLink: RouterLinkStub,
        JoinBtn: true,
        CommentForm: true
      },
      store
    });
    const expected = event.title;
    const actual = wrapper.find(".eventTitle").text();

    expect(actual).toBe(expected);
  });

  it("should go to /description/4", () => {
    store = new Vuex.Store({
      state: {
        commentList: commentList,
        linkActive: true,
        joinBtn: true,
        commentBtn: false
      }
    });

    wrapper = mount(Event, {
      localVue,
      router: router,
      propsData: { event },
      stubs: {
        RouterLink: RouterLinkStub,
        JoinBtn: true,
        CommentForm: true
      },
      store
    });
    const expected = "/description/4";
    const link = wrapper.findComponent(RouterLinkStub);
    expect(link.props("to")).toBe(expected);
  });

  //
  it("should not find routerlink", () => {
    store = new Vuex.Store({
      state: {
        commentList: commentList,
        linkActive: false,
        joinBtn: true,
        commentBtn: false
      }
    });

    wrapper = mount(Event, {
      localVue,
      router: router,
      propsData: { event },
      stubs: {
        RouterLink: RouterLinkStub,
        JoinBtn: true,
        CommentForm: true
      },
      store
    });
    const expected = false;
    const link = wrapper.findComponent(RouterLinkStub);
    expect(link.exists()).toBe(expected);
  });

  it("should find JoinBtn if joinBtn is true", () => {
    let actions = {
      getJoin: () => jest.fn()
    };
    store = new Vuex.Store({
      actions,
      state: {
        commentList: commentList,
        linkActive: false,
        joinBtn: true,
        commentBtn: false
      }
    });

    wrapper = mount(Event, {
      localVue,
      router: router,
      propsData: { event },
      stubs: {
        RouterLink: RouterLinkStub,
        //JoinBtn: true,
        CommentForm: true
      },
      store
    });
    const expected = true;
    const link = wrapper.findComponent(JoinBtn);
    expect(link.exists()).toBe(expected);
  });

  it("should not find JoinBtn if joinBtn is false", () => {
    let actions = {
      getJoin: () => jest.fn()
    };
    store = new Vuex.Store({
      actions,
      state: {
        commentList: commentList,
        linkActive: false,
        joinBtn: false,
        commentBtn: false
      }
    });

    wrapper = mount(Event, {
      localVue,
      router: router,
      propsData: { event },
      stubs: {
        RouterLink: RouterLinkStub,
        //JoinBtn: true,
        CommentForm: true
      },
      store
    });
    const expected = false;
    const link = wrapper.findComponent(JoinBtn);
    expect(link.exists()).toBe(expected);
  });

  it("should find CommentForm if commentBtn is true", () => {
    let actions = {
      addNewComment: () => jest.fn()
    };
    store = new Vuex.Store({
      actions,
      state: {
        commentList: commentList,
        linkActive: false,
        joinBtn: false,
        commentBtn: true
      }
    });

    wrapper = mount(Event, {
      localVue,
      router: router,
      propsData: { event },
      stubs: {
        RouterLink: RouterLinkStub,
        JoinBtn: true
        //CommentForm: true
      },
      store
    });
    const expected = true;
    const link = wrapper.findComponent(CommentForm);
    expect(link.exists()).toBe(expected);
  });

  it("should not find CommentForm if commentBtn is false", () => {
    let actions = {
      addNewComment: () => jest.fn()
    };
    store = new Vuex.Store({
      actions,
      state: {
        commentList: commentList,
        linkActive: false,
        joinBtn: false,
        commentBtn: false
      }
    });

    wrapper = mount(Event, {
      localVue,
      router: router,
      propsData: { event },
      stubs: {
        RouterLink: RouterLinkStub,
        JoinBtn: true
        //CommentForm: true
      },
      store
    });
    const expected = false;
    const link = wrapper.findComponent(CommentForm);
    expect(link.exists()).toBe(expected);
  });
});
