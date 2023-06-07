import { useEffect, useState } from "react";
import {
  DataGrid,
  GridColDef,
  GridEventListener,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import Unit from "../models/Unit";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "code", headerName: "Code", width: 130 },
  { field: "branch", headerName: "Etablissement", width: 130 },
];
export default function App() {
  const [rows, setRows] = useState<
    {
      id: string;
      name: string;
      code: string;
      branch: string;
    }[]
  >([]);
  useEffect(() => {
    fetch("http://localhost:3000/units")
      .then((r) => r.json())
      .then((d) =>
        setRows(
          d.map((u: any) => ({
            id: u.name,
            name: u.name,
            code: u.code,
            branch: u.branch.name,
          }))
        )
      )
      .catch((e) => console.log(e));
  }, []);
  return (
    <Box m="40px">
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          // onRowClick={handleEvent}
          rows={rows}
          columns={columns}
          // pageSize={5}
          pageSizeOptions={[3, 6]}
          // rowsPerPageOptions={[5]}
          // checkboxSelection
        />
      </div>
    </Box>
  );
}
