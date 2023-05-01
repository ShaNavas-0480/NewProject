import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import APIService from "../../services/APIService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
function GroupTable({ isRefreshTableData }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    listGroups();

    isRefreshTableData && listGroups();
  }, [isRefreshTableData]);
  const listGroups = () => {
    APIService.post(
      process.env.REACT_APP_LOCAL_HOST_URL + "/UserSec/ListGroups",
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
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleEdit = () => {};
  const handleDelete = () => {};

  return (
    <>
      {" "}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Created By</TableCell>
              <TableCell>Created Date</TableCell>
              <TableCell>Modified By</TableCell>
              <TableCell>Modified Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow
                key={row.gid}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.gid}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.group_name}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.created_by}</TableCell>
                <TableCell>{row.create_date}</TableCell>
                <TableCell>{row.modified_by}</TableCell>
                <TableCell>{row.modify_date}</TableCell>
                <TableCell>
                  <span onClick={handleEdit}>
                    <Button>
                      <ModeEditIcon />
                    </Button>
                  </span>{" "}
                  &nbsp;{" "}
                  <span onClick={handleDelete}>
                    <DeleteIcon />{" "}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}

export default GroupTable;
