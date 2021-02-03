export const environment = {
  production: true,
  endpoints:{
    getTaskList:'tasks/',
    creatTask:'tasks/create',
    getOneTask:'/task/{taskId}',
    updateTask:'tasks/update/{taskId}',
    deleteTask:'tasks/delete/{taskId}'
  }
};
