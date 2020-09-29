import { mount, RouterLinkStub, createLocalVue } from "@vue/test-utils";
import HasBeen from "../../src/views/HasBeen.vue";
import Eventlist from "../../src/components/Eventlist.vue";
import Event from "../../src/components/Event.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("HasBeen", () => {
  let wrapper;
  let actions;
  let store;
  let data = {
    hasjoint: [
      {
        id: 1,
        title: "Fika in Stockhome",
        desc:
          "We are a group of people living in Stockholm, we love fika very much! We do fika meeting every Thursday afternoon!",
        location: "Stockholm",
        time: "September 24, 2020 16:00 to 17:00 GMT+2",
        pic: ""
      },
      {
        id: 2,
        title: "We are Entrepreneurs",
        desc:
          "All entrepreneurs in Sweden should join our group! We hold mingle every Tuesday. During this mingle, we will discuss many amazing business ideas with talented businessmen.",
        location: "Gothenburg",
        time: "October 8, 2020 09:00 to 11:00 GMT+2",
        pic: ""
      }
    ]
  };
  let commentList = [
    {
      comment: "I go here everyday, very good, benefit for everyone.",
      eventId: 8,
      id: 2
    }
  ];
  const Parent = {
    data: () => ({
      hasjoint: data.hasjoint
    })
  };
  beforeEach(() => {
    actions = {
      getHasJoin: () => jest.fn(),
      getCommentList: () => jest.fn()
    };
    store = new Vuex.Store({ actions, state: { commentList: commentList } });

    wrapper = mount(HasBeen, {
      localVue,
      parentComponent: Parent,
      stubs: {
        RouterLink: RouterLinkStub
      },
      store
    });
  });

  it("should show Event.vue component in Eventlist.vue in HasBeen", async () => {
    let findEventlist = wrapper.findComponent(Eventlist);
    await findEventlist.setProps({
      events: [
        {
          id: 1,
          title: "Fika in Stockhome",
          desc:
            "We are a group of people living in Stockholm, we love fika very much! We do fika meeting every Thursday afternoon!",
          location: "Stockholm",
          time: "September 24, 2020 16:00 to 17:00 GMT+2",
          pic: ""
        }
      ]
    });
    await wrapper.vm.$nextTick();
    let findAllEvent = findEventlist.findComponent(Event);

    expect(findAllEvent.exists()).toBe(true);
  });
});
