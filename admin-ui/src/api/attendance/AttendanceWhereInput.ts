import { DateTimeFilter } from "../../util/DateTimeFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type AttendanceWhereInput = {
  attendanceType?: "Present" | "Absent" | "Leave";
  date?: DateTimeFilter;
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
};
