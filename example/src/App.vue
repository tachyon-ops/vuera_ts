<template>
  <div id="app">
    <!-- <my-dashboard /> -->
    <my-react-component title="App2" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { DashboardTitleReact } from "./components/DashboardTitle.react";
import MyDashboard from "./components/MyDashboard";

@Component({
  components: {
    "my-dashboard": MyDashboard,
    "my-react-component": DashboardTitleReact as Vue.Component,
  },
})
export default class App extends Vue {}
</script>

<style></style>
