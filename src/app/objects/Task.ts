interface Task {
  idTask: number;
  nameTask: string;
  statusTask: boolean;
}
function showTask(task: Task) {
  return "Task : " + task.idTask + " " + task.nameTask + " " + task.statusTask;
}
