import { AttendanceCreateNestedManyWithoutEmployeesInput } from "./AttendanceCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  attendances?: AttendanceCreateNestedManyWithoutEmployeesInput;
  dob: Date;
  name: string;
  salary: number;
  ssl: string;
};
