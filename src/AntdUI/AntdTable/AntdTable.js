import { css } from "@emotion/react";
import { Table } from "antd";
import React, { useState } from "react";

function AntdTable({ columns, dataSource }) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  //   const onSelectChange =
  const tableCSS = css({
    margin: "40px 120px",
    backgroundColor: "white",
    "& table": {
      borderCollapse: "collapse",
    },
    "& thead > tr > th": {
      backgroundColor: "darkblue",
      color: "white",
    },
    "& thead > tr": {
      borderWidth: "2px",
      borderColor: "yellow",
      borderStyle: "solid",
    },
  });
  return (
    <>
      <Table
        // rowKey={(record) => record.key}
        rowSelection={rowSelection}
        dataSource={dataSource}
        columns={columns}
        className={tableCSS}
      />
    </>
  );
}

export default AntdTable;
