// src/components/MyDashboard.tsx

/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";
import { DashboardTitleReact } from "./DashboardTitle.react";
import { ReactInVue } from "vuera_ts_lib";

const DashboardTitle = ReactInVue(DashboardTitleReact);

@Component({
  name: "MyDashboard2",
})
export default class MyDashboard extends Vue {
  render(h: any) {
    return <DashboardTitle title={"My Dashboard Title"} />;
  }
}
