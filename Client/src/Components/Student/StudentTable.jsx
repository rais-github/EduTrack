import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "firstName", headerName: "First name", width: 160 },
  { field: "lastName", headerName: "Last name", width: 160 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 100, // Adjusted width
  },
  {
    field: "coursesEnrolled",
    headerName: "Courses Enrolled",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 200, // Adjusted width
  },
];

export default function StudentTable({ students }) {
  const rows = React.useMemo(() => {
    return students.map((student) => {
      const { id, firstName, lastName, age, coursesEnrolled, contact_info } =
        student;
      return {
        id,
        lastName,
        firstName,
        age,
        coursesEnrolled: coursesEnrolled ? coursesEnrolled.length : 0,
      };
    });
  }, [students]);

  return (
    <div
      style={{
        height: 550,
        width: "100%",
        backgroundColor: "#f9f9f9",
        padding: "1rem",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[8, 10]}
        checkboxSelection
      />
    </div>
  );
}
