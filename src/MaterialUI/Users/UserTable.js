import {
  Box,
  Button,
  Modal,
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
import React, { useEffect } from "react";
import APIService from "../../services/APIService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TableRows } from "@mui/icons-material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import WarningIcon from "@mui/icons-material/Warning";
function UserTable() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(0);
  useEffect(() => {
    listUsers();
  }, []);
  const listUsers = () => {
    APIService.post(
      process.env.REACT_APP_LOCAL_HOST_URL + "/UserSec/ListUserProfiles",
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

  const [openModal, setOpenModal] = useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
  };
  const handleCancel = () => setOpenModal(false);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleEdit = (e) => {
    console.log(e);
    setSelectedRow(e);
  };
  const handleDelete = (e) => {
    setOpenModal(true);
    setSelectedRow(e);
    console.log(e);
  };

  const handleDeleteOk = () => {
    APIService.post(
      process.env.REACT_APP_LOCAL_HOST_URL + "/UserSec/DeleteUser",
      { user_id: selectedRow.user_id },
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
        toast.success("User Deleted Successfully");
        listUsers();
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
    <>
      {" "}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Created By</TableCell>
              <TableCell>Tel Extension</TableCell>
              <TableCell>Tel Number</TableCell>
              <TableCell>Status</TableCell>
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
                key={row.user_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.user_id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.user_name}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.created_by}</TableCell>
                <TableCell>{row.tel_exten}</TableCell>
                <TableCell>{row.user_tel_no}</TableCell>
                <TableCell>{row.status ? "Active" : "In Active"}</TableCell>

                <TableCell>
                  <span onClick={() => handleEdit(row)}>
                    <Button>
                      <ModeEditIcon />
                    </Button>
                  </span>{" "}
                  &nbsp;{" "}
                  <span
                    className="cursor-pointer"
                    onClick={() => handleDelete(row)}
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
      <Modal
        open={openModal}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="delete-card-body">
            <div>
              <div className="d-flex justify-content-center mb-3 warning-icon">
                <WarningIcon />
              </div>
              <p className="alert-delete-text mt-2">
                Are you Sure You want to Delete{" "}
                <span className="highlight-name">{selectedRow.user_name}?</span>
              </p>

              <div className="buttons">
                <Button variant="contained" onClick={handleDeleteOk}>
                  OK
                </Button>

                <Button
                  variant="contained"
                  className="ms-3"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default UserTable;
