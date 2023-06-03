import { Button } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import NetworkConfigTable from "./NetworkConfigTable";

function NetworkConfigMain() {
  return (
    <>
      <div className="networkConfig">
        <div className="d-flex justify-content-between p-3">
          <h3>Network Config</h3>
          <Button
            variant="contained"
            className="button-primary"
            startIcon={<AddIcon />}
            // onClick={() => {
            //   setShowUserCreate(true);
            // }}
          >
            Create
          </Button>
        </div>
      </div>
      <NetworkConfigTable />
    </>
  );
}

export default NetworkConfigMain;
