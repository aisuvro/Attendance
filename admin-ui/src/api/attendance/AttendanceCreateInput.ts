import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type AttendanceCreateInput = {
  attendanceType: "Present" | "Absent" | "Leave";
  date: Date;
  employee?: EmployeeWhereUniqueInput | null;
};
