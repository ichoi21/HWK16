import React from "react";
import { MDBDataTableV5 } from "mdbreact";

const Table = (props) => {
  const columns = [
    {
      label: "Profile",
      field: "profile",
      width: 100,
    },
    {
      label: "Name",
      field: "name",
      width: 200,
    },
    {
      label: "Age",
      field: "age",
      width: 100,
    },
    {
      label: "Email",
      field: "email",
      width: 100,
    },

    {
      label: "Phone Number",
      field: "phone",
      width: 100,
    },
  ];
  let rows = props.employeeInfo;
  const data = {
    columns: columns,
    rows: rows,
  };
  return <MDBDataTableV5 sortable striped hover data={data} />;
};

export default Table;
