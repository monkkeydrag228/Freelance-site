<template>
  <div  v-if="task" class="card" >
    <h2>Название задачи: {{ task.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.type || 'pending'" /></p>
    <p><strong>{{ task.date }}</strong> </p>
    <p><strong>{{ task.description }}</strong></p>
    <div>
      <button class="btn" @click="updateTaskStatus(task, 'active')">Взять в работу</button>
      <button class="btn primary" @click="updateTaskStatus(task, 'done')">Завершить</button>
      <button class="btn danger" @click="updateTaskStatus(task, 'cancelled')">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ taskId }}</strong> нет.
  </h3>
</template>

<script>
import { ref, onMounted } from 'vue';
import AppStatus from '../components/AppStatus';
import { useRouter } from 'vue-router';

export default {
  components: { AppStatus },
  setup() {
    const tasks = ref(localStorage.getItem('tasks'))
    const router = useRouter();
    const taskId = ref(null);
    const task = ref(null);

    // const loadTasks = () => {
    //   const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    //   tasks.value = storedTasks;
    // };

    const updateTaskStatus = (task, type) => {
      task.type = type;
      localStorage.setItem('tasks', tasks.value);
    };

    onMounted(() => {
      taskId.value = parseInt(router.currentRoute.value.params.id);
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        const tasks = JSON.parse(storedTasks);
        const foundTask = tasks.find((task) => task.id === taskId.value);
        if (foundTask) {
          task.value = foundTask;
        }
      }
    });

    return {
      taskId,
      task,
      tasks,
      updateTaskStatus,
    };
  },
};
</script>