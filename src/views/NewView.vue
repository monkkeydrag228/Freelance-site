<template>
  <form class="card">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дедлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary" :disabled="isButtonDisabled" @click.prevent="createTask">Создать</button>
  </form>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const title = ref('');
    const date = ref('');
    const description = ref('');

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const createTask = () => {
  const tasksData = {
    id: tasks.length + 1,
    title: title.value,
    date: date.value,
    description: description.value,
    status: 'active'
  };

  tasks.push(tasksData);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  console.log(tasks);

  // Очистить данные во входных полях
  title.value = '';
  date.value = '';
  description.value = '';
};

 

    const isButtonDisabled = computed(() => {
      return !title.value || !date.value || !description.value;
    });

    return {
      title,
      date,
      tasks,
      description,
      createTask,
      isButtonDisabled
    };
  },
};
</script>
