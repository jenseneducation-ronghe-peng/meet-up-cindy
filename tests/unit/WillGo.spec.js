import { mount, RouterLinkStub, createLocalVue } from "@vue/test-utils";
import WillGo from "../../src/views/WillGo.vue";
import Eventlist from "../../src/components/Eventlist.vue";
import Event from "../../src/components/Event.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("WillGo", () => {
  let wrapper;
  let actions;
  let store;
  let data = {
    joinlist: [
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
  const Parent = {
    data: () => ({
      joinlist: data.joinlist
    })
  };
  beforeEach(() => {
    actions = {
      getJoin: () => jest.fn()
    };
    store = new Vuex.Store({ actions });

    wrapper = mount(WillGo, {
      localVue,
      parentComponent: Parent,
      stubs: {
        RouterLink: RouterLinkStub
      },
      store
    });
  });

  it("should show Event.vue component in Eventlist.vue in WillGo", async () => {
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
