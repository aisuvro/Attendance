import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AttendanceTitle } from "../attendance/AttendanceTitle";

export const EmployeeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="attendances"
          reference="Attendance"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttendanceTitle} />
        </ReferenceArrayInput>
        <DateInput label="DOB" source="dob" />
        <TextInput label="Name" source="name" />
        <NumberInput label="Salary" source="salary" />
        <TextInput label="SSL" source="ssl" />
      </SimpleForm>
    </Create>
  );
};
