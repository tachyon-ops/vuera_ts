<template>
  <div class="toto">
    Hello there 2
    <my-test :foo="msg" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ReactInVue } from "vuera_ts_lib";

import { Test } from "./Test.react";

const TestInVue = ReactInVue(Test);
console.log(TestInVue);

export default Vue.extend({
  data() {
    return {
      msg: "Hi from vue2!",
    };
  },
  components: {
    "my-test": TestInVue,
  },
});
</script>

<style scoped>
.toto {
  color: blue;
}
</style>
