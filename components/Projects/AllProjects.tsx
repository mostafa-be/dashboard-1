import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Modal } from "@mui/material";
import { AiOutlineDelete } from "react-icons/ai";
import { useTheme } from "next-themes";
import { FiEdit2 } from "react-icons/fi";
// import { format } from "timeago.js";
// import { styles } from "@/app/styles/style";
import toast from "react-hot-toast";
import Link from "next/link";
import { styles } from "../../../app/styles/style";

type Props = {
  expanded: boolean;
};

const AllProjects = ({ expanded }: Props) => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [productId, setProductId] = useState("");
  const columns = [
    { field: "id", headerName: "Id", flex: 0.5 },
    { field: "title", headerName: "Project Title", flex: 1 },
    { field: "date", headerName: "Date", flex: 0.5 },
    { field: "status", headerName: "Status", flex: 0.5 },
    { field: "budget", headerName: "Budget", flex: 0.5 },
    {
      field: "  ",
      headerName: "Edit",
      flex: 0.2,
      renderCell: (params: any) => {
        return (
          <>
            <div className="w-full items-center justify-center h-full">
              <Link href={`/Dashboard/projects/edit-project/`}>
                <FiEdit2 className="dark:text-white text-black" size={20} />
              </Link>
            </div>
          </>
        );
      },
    },
    {
      field: " ",
      headerName: "Delete",
      flex: 0.5,
      renderCell: (params: any) => {
        return (
          <>
            <Button
              onClick={() => {
                setOpen(!open);
              }}
            >
              <AiOutlineDelete
                className="dark:text-white text-black"
                size={20}
              />
            </Button>
          </>
        );
      },
    },
  ];

  const rows: any = [
    {
      id: "1",
      title: " Dashboard Ecommerce",
      date: "22/06/2024",
      status: "Private",
      budget: "$ 300",
    },
    {
      id: "2",
      title: " Dashboard Ecommerce",
      date: "22/06/2024",
      status: "Private",
      budget: "$ 300",
    },
    {
      id: "3",
      title: " Dashboard Ecommerce",
      date: "22/06/2024",
      status: "Private",
      budget: "$ 300",
    },
    {
      id: "4",
      title: " Dashboard Ecommerce",
      date: "22/06/2024",
      status: "Private",
      budget: "$ 300",
    },
    {
      id: "5",
      title: " Dashboard Ecommerce",
      date: "22/06/2024",
      status: "Private",
      budget: "$ 300",
    },
    {
      id: "6",
      title: " Dashboard Ecommerce",
      date: "22/06/2024",
      status: "Private",
      budget: "$ 300",
    },
  ];

  {
    /* useEffect(() => {
    if (isSuccess) {
      refetch();
      toast.success("Product Deleted successfully");
    }
    if (error) {
      if ("data" in error) {
        const errorMessege = error as any;
        toast.error(errorMessege.data.message);
      }
    }
  }, [isSuccess, error]);
  const handleDelete = async () => {
    const id = productId;
    await deleteProduct(id);
    setOpen(false);
    };
   */
  }
  return (
    <div className=" w-full mt-10   ">
      <Box
        m="40px 0 0 0"
        className={`shadow ${
          expanded
            ? "800px:max-w-screen-500px 1000px:max-w-screen-700px 1100px:max-w-screen-800px 1200px:max-w-screen-900px 1300px:max-w-screen-1000px 1500px:min-w-full"
            : "  w-full"
        }`}
        sx={{
          height: 400,
          "& .MuiDataGrid-root": {
            border: "none",
            outline: "none",
            background: theme === "dark" ? "#fff" : "#fff",
          },
          "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
            color: theme === "dark" ? "#000" : "#000",
          },
          "& .MuiDataGrid-sortIcon": {
            color: theme === "dark" ? "#fff" : "#000",
          },
          "& .MuiDataGrid-row": {
            color: theme === "dark" ? "#fff" : "#000",
            borderBottom:
              theme === "dark"
                ? "1px solid #ffffff30 !important"
                : "1px solid #ccc !important",
          },
          "& .MuiTablePagination-root": {
            color: theme === "dark" ? "#fff" : "#000",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-columm--cell": {
            color: theme === "dark" ? "#fff" : "#000",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme === "dark" ? "#F9FAFB" : "#A4A9FC",
            borderBottom: "none",
            color: theme === "dark" ? "#fff" : "#000",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          },
          "& .MuiDataGrid-virtualscroller": {
            backgroundColor: theme === "dark" ? "#e11d48" : "#F2F0F0",
          },
          "& .MuiDataGrid-footerContainer": {
            color: theme === "dark" ? "#fff" : "#000",
            borderTop: "none",
            backgroundColor: theme === "dark" ? "#e11d48" : "#a4A9FC",
          },
          "& .MuiCheckbox-root": {
            color: theme === "dark" ? "#b7ebde !important" : "#000 !important",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: "#fff !important",
          },
        }}
      >
        <DataGrid checkboxSelection rows={rows} columns={columns} />

        {open && (
          <Modal
            open={open}
            onClose={() => setOpen(!open)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none">
              <h1 className={`${styles.title}`}>
                Are you sure you want to delete Product?
              </h1>
              <div className="flex w-full items-center justify-between mb-6">
                <div
                  className={`${styles.button} !w-[120px] h-[30px] bg-[#57c7a3]`}
                  onClick={() => setOpen(!open)}
                >
                  Cancel
                </div>
                <div
                  className={`${styles.button} !w-[120px] h-[30px] bg-[#d63f7a]`}
                >
                  Delete
                </div>
              </div>
            </Box>
          </Modal>
        )}
      </Box>
    </div>
  );
};

export default AllProjects;
