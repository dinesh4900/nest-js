export interface Task {
  id: string;
  name: string;
  description: string;
  status: StatusEnum;
}

export enum StatusEnum {
  OPEN = 'Open',
  IN_PROGRESS = 'In_Progress',
  DONE = 'dONES',
}
