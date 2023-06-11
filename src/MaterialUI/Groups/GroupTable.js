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
import EditGroup from "./EditGroup";
import { TableRows } from "@mui/icons-material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
function GroupTable({ isRefreshTableData }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(0);
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

  const [openModal, setOpenModal] = useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
  };
  const handleClose = () => setOpenModal(false);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleEdit = (e) => {
    console.log(e);
    setSelectedRow(e);
    setOpenModal(true);
  };
  // const handleDelete = (e) => {};

  const handleTableDataRefresh = () => {
    listGroups();
  };

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
            {(rowsPerPage > 0
              ? tableData.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : tableData
            ).map((row) => (
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
                  <span onClick={() => handleEdit(row)}>
                    <Button>
                      <ModeEditIcon />
                    </Button>
                  </span>{" "}
                  {/* &nbsp;{" "}
                  <span onClick={() => handleDelete(row)}>
                    <DeleteIcon />{" "}
                  </span> */}
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
          <EditGroup
            handleClose={handleClose}
            handleTableDataRefresh={handleTableDataRefresh}
            selectedRowData={selectedRow}
          />
        </Box>
      </Modal>
    </>
  );
}

export default GroupTable;
