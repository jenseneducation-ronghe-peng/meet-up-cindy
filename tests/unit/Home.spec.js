import { mount, RouterLinkStub, createLocalVue } from "@vue/test-utils";
import Home from "../../src/views/Home.vue";
import Eventlist from "../../src/components/Eventlist.vue";
import Event from "../../src/components/Event.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);
//const router = new VueRouter();

describe("Home", () => {
  let wrapper;
  let actions;
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
  const Parent = {
    data() {
      return data;
    }
  };
  beforeEach(() => {
    actions = {
      getData: () => jest.fn(),
      getJoin: () => jest.fn()
    };
    store = new Vuex.Store({ actions });

    wrapper = mount(Home, {
      localVue,
      //router,
      parentComponent: Parent,
      stubs: {
        RouterLink: RouterLinkStub
      },
      store
    });
  });

  it("should show Event.vue component in Eventlist.vue in Home", async () => {
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
