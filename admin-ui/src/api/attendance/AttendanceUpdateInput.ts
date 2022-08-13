import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type AttendanceUpdateInput = {
  attendanceType?: "Present" | "Absent" | "Leave";
  date?: Date;
  employee?: EmployeeWhereUniqueInput | null;
};
