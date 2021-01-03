export interface IPeriod {
  start: string;
  end: string;
  duration: number;
}

export interface ITask {
  name: string;
  periods: IPeriod[];
  totalDuration: number;
  id: string;
}

export interface IProject {
  name: string;
  description?: string;
  color: string;
  ownerId?: string;
  tasks: ITask[] | null;
  _id?: string;
}
