import { Box, Button, Modal, Paper } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CreateUser from "./CreateUser";

function UserHome() {
  const [showGroupCreate, setShowGroupCreate] = useState(false);
  useEffect(() => {}, [showGroupCreate]);
  const [isRefreshTableData, setIsRefreshTableData] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
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

  const handleTableDataRefresh = () => {
    setIsRefreshTableData(true);
  };
  return (
    <div>
      {/* <Paper elevation={12} square> */}
      <div className="p-3">
        {showGroupCreate ? (
          <>
            <div className="create-button  ">
              <div className="d-flex justify-content-between p-3">
                <h3>Create User</h3>
                <Button
                  variant="contained"
                  className="button-primary"
                  startIcon={<ArrowBackIosIcon />}
                  onClick={() => {
                    setShowGroupCreate(false);
                  }}
                >
                  Back
                </Button>
              </div>
            </div>
            <CreateUser />
          </>
        ) : (
          <>
            {" "}
            <div className="create-button  ">
              <div className="d-flex justify-content-between p-3">
                <h3>Users</h3>
                <Button
                  variant="contained"
                  className="button-primary"
                  startIcon={<AddIcon />}
                  // onClick={() => {
                  //   setShowGroupCreate(true);
                  // }}
                  onClick={handleOpen}
                >
                  Create
                </Button>
              </div>
            </div>
            <UserTable isRefreshTableData={isRefreshTableData} />
          </>
        )}
      </div>
      {/* </Paper> */}
      <Modal
        open={openModal}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateUser
          // handleClose={handleClose}
          // handleTableDataRefresh={handleTableDataRefresh}
          />
        </Box>
      </Modal>
    </div>
  );
}

export default UserHome;
