<template>
  <div class="Eventlist">
    <Event v-for="event in events" v-bind:key="event.id" v-bind:event="event" />
  </div>
</template>
<script>
import Event from "./Event.vue";

export default {
  name: "Eventlist",
  components: {
    Event,
  },
  props: ["events"],
  computed: {},
};
</script>
<style scoped>
.Eventlist {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>