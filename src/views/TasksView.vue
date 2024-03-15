<template>
  <div>
    <h1 class="text-white center">Задач пока нет</h1>
    <template v-if="tasks.length === 0">
      <h3 class="text-white">Всего активных задач: 0</h3>
    </template>
    <template v-else>
      <h3 class="text-white">Всего активных задач: {{ tasks.length }}</h3>
      <div class="card" v-for="task in tasks" :key="task.id">
        <h2 class="card-title">
          {{ task.title }}
          <AppStatus :type="task.type || 'pending'" />
        </h2>
        <p>
          <strong>
            <small>
              {{ task.date }}
            </small>
          </strong>
        </p>
        <!-- <p>{{ task.description }}</p> -->
        <router-link :to="`/task/${task.id}`" class="btn">Посмотреть</router-link>
      </div>
    </template>
  </div>
</template>


<script>
import { ref, watchEffect } from 'vue';
import AppStatus from '../components/AppStatus';

export default {
  components: { AppStatus },
  setup() { 
    const tasks = ref([]);

    watchEffect(() => {
      console.log(tasks.value); // Use tasks.value to access the array
    });

    const loadTasks = () => {
      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.value = storedTasks; // Set the value of tasks
    };

    loadTasks(); // Call the function to load tasks initially

    return {
      tasks,
    };
  },
};

</script>
