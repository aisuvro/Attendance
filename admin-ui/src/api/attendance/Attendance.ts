import { Employee } from "../employee/Employee";

export type Attendance = {
  attendanceType?: "Present" | "Absent" | "Leave";
  createdAt: Date;
  date: Date;
  employee?: Employee | null;
  id: string;
  updatedAt: Date;
};
