export interface IPeriod {
  periodId: string;
  start: any;
  end: any;
  duration: number;
}

export interface ITask {
  taskId: string;
  taskName: string;
  totalDuration: number;
  periods: IPeriod[];
}

export interface IProject {
  name: string;
  description?: string;
  color: string;
  ownerId?: string;
  tasks: ITask[] | null;
  _id?: string;
}
