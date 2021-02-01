export interface IPeriod {
  start: any;
  end: any;
  duration: number;
}

export interface ITask {
  _id?: string;
  taskName: string;
  totalDuration: number;
  periods: IPeriod[];
  projectId: string;
  userId?: string;
}

export interface IProject {
  name: string;
  description?: string;
  color: string;
  owner?: string;
  tasks: ITask[] | null;
  _id?: string;
}
