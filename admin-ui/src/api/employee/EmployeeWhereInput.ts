import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type EmployeeWhereInput = {
  attendances?: AttendanceListRelationFilter;
  dob?: DateTimeFilter;
  id?: StringFilter;
  name?: StringFilter;
  salary?: FloatFilter;
  ssl?: StringFilter;
};
