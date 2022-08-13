import { SortOrder } from "../../util/SortOrder";

export type AttendanceOrderByInput = {
  attendanceType?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
