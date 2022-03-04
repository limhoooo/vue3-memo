<template>
  <div class="memo">
    <div class="act">
      <input type="text" v-model="state.inputData" />
      <button class="btn btn-primary" @click="addFnc">+ 추가</button>
    </div>
    <template v-if="state.data.length > 0">
      <ul>
        <li v-for="(obj, idx) in state.data" :key="idx">
          {{ obj }}
        </li>
      </ul>
    </template>
    <template v-else>
      <div class="noneMemo">등록된 메모가 없습니다.</div>
    </template>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";
export default {
  setup() {
    const state = reactive({
      data: [],
      inputData: "",
    });
    const addFnc = () => {
      state.data.push(state.inputData);
      state.inputData = "";
    };
    const oncreated = () => {
      axios.get("/api/memos").then((res) => {
        state.data = res.data;
      });
    };
    oncreated();
    return {
      state,
      addFnc,
    };
  },
};
</script>

<style lang="scss" scoped>
.memo {
  .act {
    padding: 10px 10px 5px 5px;
    text-align: right;
  }
  ul {
    border: 1px solid #eee;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      padding: 15px;
      margin: 5px;
      border: 1px solid #eee;
    }
  }
  .noneMemo {
    text-align: center;
    padding: 40px;
    border: 1px solid #eee;
    color: #999;
  }
}
</style>