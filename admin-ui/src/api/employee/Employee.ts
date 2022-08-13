import { Attendance } from "../attendance/Attendance";

export type Employee = {
  attendances?: Array<Attendance>;
  createdAt: Date;
  dob: Date;
  id: string;
  name: string;
  salary: number;
  ssl: string;
  updatedAt: Date;
};
