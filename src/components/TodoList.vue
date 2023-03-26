<script setup>
import { useTodoListStore } from "@/stores/todoList.js";
import { storeToRefs } from "pinia";

const store = useTodoListStore();

const { todoList } = storeToRefs(store);

const { toggleCompleted } = store;
</script>

<template>
  <div v-for="todo in todoList" :key="todo.id" class="item">
    <div class="content">
      <span style="margin-right: 20px" :class="{ completed: todo.completed }">{{
        todo.item
      }}</span>
      <span @click.stop="toggleCompleted(todo.id)">&#10004;</span>
    </div>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
