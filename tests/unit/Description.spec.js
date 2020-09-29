import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import Description from "../../src/views/Description.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Description", () => {
  let wrapper;
  let store;
  let data = {
    events: [
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
      },
      {
        id: 3,
        title: "This is Startup meetup",
        desc:
          "We are an amazing group, we hold mingles where new talented people can meet all interesting startups all over Stockholm!",
        location: "Hötorget, Stockholm",
        time: "October 8, 2020 11:30 to 13:00 GMT+2",
        pic: ""
      },
      {
        id: 4,
        title: "Daily Yoga meetups",
        desc:
          "Yoga lovers look at here! Here you can meet many friends who have the same habit with you! We love Yoga! And all activities in this group are about YOGA!!!",
        location: "Nordstan, Gothenburg",
        time: "September 26, 2020 09:00 to 10:30 GMT+2",
        pic: ""
      }
    ]
  };
  let eventlist = [
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
    },
    {
      id: 3,
      title: "This is Startup meetup",
      desc:
        "We are an amazing group, we hold mingles where new talented people can meet all interesting startups all over Stockholm!",
      location: "Hötorget, Stockholm",
      time: "October 8, 2020 11:30 to 13:00 GMT+2",
      pic: ""
    },
    {
      id: 4,
      title: "Daily Yoga meetups",
      desc:
        "Yoga lovers look at here! Here you can meet many friends who have the same habit with you! We love Yoga! And all activities in this group are about YOGA!!!",
      location: "Nordstan, Gothenburg",
      time: "September 26, 2020 09:00 to 10:30 GMT+2",
      pic: ""
    }
  ];
  let mockEvent = {
    id: 1,
    title: "Fika in Stockhome",
    desc:
      "We are a group of people living in Stockholm, we love fika very much! We do fika meeting every Thursday afternoon!",
    location: "Stockholm",
    time: "September 24, 2020 16:00 to 17:00 GMT+2",
    pic: ""
  };
  const Parent = {
    data() {
      return data;
    }
  };
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        joinBtn: true,
        commentBtn: false,
        eventlist: eventlist
      }
    });

    wrapper = mount(Description, {
      localVue,
      parentComponent: Parent,
      mocks: {
        $route: {
          path: "/description/1",
          params: { id: "1" }
        }
      },
      propsData: { event: mockEvent },
      stubs: {
        RouterLink: RouterLinkStub,
        JoinBtn: true
      },
      store
    });
  });
  it("should display event title in Description.vue", () => {
    const expected = mockEvent.title;
    const actual = wrapper.find(".descriptionTitle").text();

    expect(actual).toBe(expected);
  });

  it("should go back to Home.vue when clicking .goBackHome btn in Description.vue", () => {
    const link = wrapper.findComponent(RouterLinkStub);
    const expected = "/";
    expect(link.props("to")).toBe(expected);
  });
});
