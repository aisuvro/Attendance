import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  DateInput,
  ReferenceInput,
} from "react-admin";
import { EmployeeTitle } from "../employee/EmployeeTitle";

export const AttendanceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="attendanceType"
          label="AttendanceType"
          choices={[
            { label: "Present", value: "Present" },
            { label: "Absent", value: "Absent" },
            { label: "Leave", value: "Leave" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <DateInput label="Date" source="date" />
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="Employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
