import { Main } from 'scenes/Main'; 
import { EditTask } from 'scenes/EditTask';
import { NewTask } from 'scenes/NewTask';
import { TaskDetail } from 'scenes/TaskDetails';


export enum AppRoutes {
  MAIN = 'main',
  EDIT_TASK = 'edit_task',
  NEW_TASK = 'new_task',
  TASK_DETAILS = 'task_details',
};

export const routePath = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.EDIT_TASK]: '/edit-task',
  [AppRoutes.NEW_TASK]: '/new-task',
  [AppRoutes.TASK_DETAILS]: 'Task-details',
};

export const routeConfig = {
  [AppRoutes.MAIN]: {
    path: routePath.main,
    element: <Main />
  },
  [AppRoutes.EDIT_TASK]: {
    path: routePath.edit_task,
    element: <EditTask />
  },
  [AppRoutes.TASK_DETAILS]: {
    path: routePath.task_details,
    element: <TaskDetail />
  },
  [AppRoutes.NEW_TASK]: {
    path: routePath.new_task,
    element: <NewTask />
  }
};