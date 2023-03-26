<script setup>
import { ref } from "vue";
import { useTodoListStore } from "@/stores/todoList.js";

const todo = ref("");

const store = useTodoListStore();

function addItemAndClear(item) {
  if (item.lenght === 0) {
    return;
  }

  store.addTodo(item);
  todo.value = "";
}
</script>

<template>
  <div>
    <form @submit.prevent="addItemAndClear(todo)">
      <input
        style="border: 1px black solid; margin-right: 10px"
        v-model="todo"
        type="text"
      /><button style="background-color: aqua">Add</button>
    </form>
  </div>
</template>

<style scoped></style>
