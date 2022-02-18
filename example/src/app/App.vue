<template>
  <div class="toto">
    Hello there 2
    <my-test :foo="msg" />
  </div>
</template>

<script lang="ts">
import { Test } from "./Test.react";

import { ReactInVue } from "vuera_ts_lib";

const TestInVue = ReactInVue(Test);
console.log(TestInVue);

export default {
  data() {
    return {
      msg: "Hi from vue!",
    };
  },
  components: {
    "my-test": TestInVue,
  },
};
</script>

<style scoped>
.toto {
  color: blue;
}
</style>
