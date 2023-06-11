import React from "react";
import APIService from "../../../services/APIService";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { useEffect } from "react";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";

function NetworkConfigTable() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    listNetworkConfig();
  }, []);
  const [tableData, setTableData] = useState([]);
  const listNetworkConfig = () => {
    APIService.post(
      process.env.REACT_APP_LOCAL_HOST_URL + "/SysConfig/ListNWDetails",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: token ? `Bearer ${token}` : "",
        },
      }
    )
      .then((response) => {
        console.log(response);
        setTableData(response.data);
      })
      .catch((errors) => {
        console.log(errors);
        if (errors.response && errors.response.status === 440) {
          toast.warn("Session Timed Out");
          localStorage.clear();
          navigate("/");

          return;
        }
      });
  };
  return (
    <div>
      {" "}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>ISO Version </TableCell>
              <TableCell>MAC Version </TableCell>
              <TableCell>Signature</TableCell>
              <TableCell>IP</TableCell>
              <TableCell>PORT</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? tableData.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : tableData
            ).map((row) => (
              <TableRow
                key={row.Network_ID}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Network_ID}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.Network_Description}
                </TableCell>
                <TableCell>{row.ISO_VERSION_DESC}</TableCell>
                <TableCell>{row.MAC_Fields}</TableCell>

                <TableCell>{row.Signature_Fields}</TableCell>
                <TableCell>{row.NW_ENV_IP}</TableCell>
                <TableCell>{row.NW_ENV_PORT}</TableCell>

                <TableCell>
                  <span
                  //   onClick={() => handleEdit(row)}
                  >
                    <Button>
                      <ModeEditIcon />
                    </Button>
                  </span>{" "}
                  &nbsp;{" "}
                  <span
                    className="cursor-pointer"
                    // onClick={() => handleDelete(row)}
                  >
                    <DeleteIcon />{" "}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={tableData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}

export default NetworkConfigTable;
