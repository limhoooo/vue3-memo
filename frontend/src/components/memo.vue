<template>
  <div class="memo">
    <div class="act">
      <input class="input" type="text" v-model="state.inputData" />
      <button class="btn btn-primary" @click="addFnc">+ 추가</button>
    </div>
    <template v-if="state.data.length > 0">
      <ul>
        <li v-for="(obj, idx) in state.data" :key="idx" @click="updateFnc(idx)">
          {{ obj }}
          <div onclick="event.cancelBubble=true">
            <button @click="deleteFnc(idx)">X</button>
          </div>
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
      const content = state.inputData;
      axios.post("/api/memos", { content }).then((res) => {
        if (res.status === 200) {
          getList();
          state.inputData = "";
        }
      });
    };
    const updateFnc = (idx) => {
      const content = prompt("수정해주세요.", state.data[idx]);
      if (!content) return;
      axios.post("/api/edit", { content, idx }).then((res) => {
        if (res.status === 200) {
          getList();
        }
      });
    };
    const deleteFnc = (idx) => {
      axios.post("/api/delete", { idx }).then((res) => {
        if (res.status === 200) {
          getList();
        }
      });
    };
    const getList = () => {
      axios.get("/api/memos").then((res) => {
        state.data = res.data;
      });
    };
    const oncreated = () => {
      getList();
    };
    oncreated();
    return {
      state,
      addFnc,
      updateFnc,
      deleteFnc,
    };
  },
};
</script>

<style lang="scss" scoped>
.memo {
  .act {
    padding: 10px 10px 5px 5px;
    text-align: right;
    display: flex;
    justify-content: center;
    .input {
      width: 75%;
    }
    .btn {
      width: 25%;
    }
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
      display: flex;
      justify-content: space-between;
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