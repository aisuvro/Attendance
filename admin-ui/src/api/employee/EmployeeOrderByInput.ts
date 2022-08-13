import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  createdAt?: SortOrder;
  dob?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  salary?: SortOrder;
  ssl?: SortOrder;
  updatedAt?: SortOrder;
};
