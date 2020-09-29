import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import JoinBtn from "../../src/components/JoinBtn.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("JoinBtn", () => {
  let wrapper;
  let store;
  let id = 1;
  let joinlist = [
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
  ];

  it("should show addToList button in JoinBtn.vue", () => {
    let data = () => ({
      shouldDisable: false
    });
    store = new Vuex.Store({
      actions: {
        getJoin: () => jest.fn(),
        addEvent: () => jest.fn(),
        deleteEvent: () => jest.fn()
      },
      state: {
        joinlist: joinlist
      }
    });
    wrapper = mount(JoinBtn, {
      localVue,
      propsData: { id },
      data: data,
      stubs: {
        RouterLink: RouterLinkStub
      },
      store
    });

    const expected = true;
    const actual = wrapper.find(".yesBtn");
    expect(actual.exists()).toBe(expected);
  });

  it("should change from addToList button to RemoveFromList button in JoinBtn.vue", async () => {
    let data = () => ({
      shouldDisable: false
    });
    store = new Vuex.Store({
      actions: {
        getJoin: () => jest.fn(),
        addEvent: () => jest.fn(),
        deleteEvent: () => jest.fn()
      },
      state: {
        joinlist: joinlist
      }
    });
    wrapper = mount(JoinBtn, {
      localVue,
      propsData: { id },
      data: data,
      stubs: {
        RouterLink: RouterLinkStub
      },
      store
    });

    let button = wrapper.find(".yesBtn");
    await button.trigger("click");
    const expected = true;
    const actual = wrapper.find(".noBtn");
    expect(actual.exists()).toBe(expected);
  });

  it("should change from RemoveFromList button to addToList button in JoinBtn.vue", async () => {
    let data = () => ({
      shouldDisable: true
    });
    store = new Vuex.Store({
      actions: {
        getJoin: () => jest.fn(),
        addEvent: () => jest.fn(),
        deleteEvent: () => jest.fn()
      },
      state: {
        joinlist: joinlist
      }
    });
    wrapper = mount(JoinBtn, {
      localVue,
      propsData: { id },
      data: data,
      stubs: {
        RouterLink: RouterLinkStub
      },
      store
    });

    let button = wrapper.find(".noBtn");
    await button.trigger("click");
    const expected = true;
    const actual = wrapper.find(".yesBtn");
    expect(actual.exists()).toBe(expected);
  });
});
