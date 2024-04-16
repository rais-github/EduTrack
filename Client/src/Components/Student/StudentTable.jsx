import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { StudentList } from "../index";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "firstName", headerName: "First name", width: 160 },
  { field: "lastName", headerName: "Last name", width: 160 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 100,
  },
];

export default function StudentTable({ students }) {
  const [selectedStudent, setSelectedStudent] = React.useState(null);

  const handleRowClick = (params) => {
    setSelectedStudent(params.row);
  };

  const rows = React.useMemo(() => {
    return students.map((student) => {
      const { id, firstName, lastName, age, coursesEnrolled, contact_info } =
        student;
      return {
        id,
        lastName,
        firstName,
        age,
        ...student,
      };
    });
  }, [students]);

  return (
    <div className="flex flex-wrap gap-7 justify-between items-center ">
      <div className="p-4 w-full sm:w-auto">
        {/* Pass the selected student to StudentList */}
        <StudentList selectedStudent={selectedStudent} />
      </div>
      <div
        className="m-4  w-full sm:w-auto"
        style={{
          height: 550,
          width: "70rem",
          backgroundColor: "#f9f9f9",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          onRowClick={handleRowClick}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 8 },
            },
          }}
          pageSizeOptions={[8, 10]}
        />
      </div>
    </div>
  );
}
