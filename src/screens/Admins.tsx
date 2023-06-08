import * as React from "react"
import {
  DataGrid,
  GridColDef,
  GridEventListener,
  GridValueGetterParams,
} from "@mui/x-data-grid"
import { Box } from "@mui/system"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import AdminModel from "../models/Admin"

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nom", headerName: "Nom", width: 130 },
  { field: "prenom", headerName: "prenom", width: 130 },
  { field: "email", headerName: "email", width: 130 },
  { field: "role", headerName: "role", width: 130 },
]

export default function DataTable() {
  const [rows, setRows] = React.useState<AdminModel[]>([])
  const navigate = useNavigate()

  React.useEffect(() => {
    // fetch("http://localhost:3000/branches")
    //   .then((r) => r.json())
    //   .then((d) =>
    //     setRows(
    //       d.map(
    //         ({
    //           location,
    //           ...branch
    //         }: {
    //           location: Location;
    //           [key: string]: any;
    //         }) => ({
    //           id: branch.name,
    //           ...branch,
    //           ...location,
    //         })
    //       )
    //     )
    //   )
    //   .catch((e) => console.log(e));

    setRows([
      {
        id: 1,
        nom: "Mike",
        prenom: "Tyson",
        email: "m@m.com",
        role: "admin",
        password: "doo",
      },
    ])
  }, [])

  const handleEvent: GridEventListener<"rowClick"> = (
    params, // GridRowParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details // GridCallbackDetails
  ) => {
    // alert(params.row.id);
    // alert(`Movie "${params.row.lastName}" clicked`);
    navigate(`${params.row.id}`)
    // navigate("/")
    // console.log()
  }

  return (
    <Box m="40px">
      <Header title="Admins : " />
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          onRowClick={handleEvent}
          rows={rows}
          columns={columns}
          // pageSize={5}
          pageSizeOptions={[3, 6]}
          // rowsPerPageOptions={[5]}
          // checkboxSelection
        />
      </div>
    </Box>
  )
}
