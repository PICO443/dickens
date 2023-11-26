import React, { useEffect, useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
  Paper, TextField, IconButton, Box, styled 
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { Group, Schedule, AttachMoney, EventBusy } from '@mui/icons-material';
import { deleteCourse } from "../../services/CourseService";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  '&.MuiTableCell-head': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  '&.MuiTableCell-body': {
    fontSize: 14,
    backgroundColor: theme.palette.background.paper,  // Follow the theme's paper color
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.background.paper,  // Follow the theme's paper color
  },
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.background.default,  // Follow the theme's default color
  },
  // Or if you want every row to be the same color, you can use this instead:
  // backgroundColor: theme.palette.background.paper,
}));

function CourseTable({ courses, setPendingUpdates }) {
  const [rows, setRows] = useState(courses);
  const [editingRow, setEditingRow] = useState(null);
  const [editingData, setEditingData] = useState({});

  // Update rows when courses changes
  useEffect(() => {
    setRows(courses);
  }, [courses]);

  const editRow = (row) => {
    setEditingRow(row);
    setEditingData(rows[row]);
  };

  const deleteRow = (row) => {
    setRows(rows.filter((_, index) => index !== row));
    deleteCourse(courses[row].id)
    setPendingUpdates(courses[row].id)
  };

  const saveEdit = () => {
    setRows(rows.map((course, index) => (index === editingRow ? editingData : course)));
    cancelEdit();
  };

  const cancelEdit = () => {
    setEditingRow(null);
    setEditingData({});
  };

  const handleInputChange = (event) => {
    setEditingData({ ...editingData, [event.target.name]: event.target.value });
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center"><Box sx={{ fontSize: 16 }}><Group /></Box> Name</StyledTableCell>
            <StyledTableCell align="center"><Box sx={{ fontSize: 16 }}><Schedule /></Box> Period Days</StyledTableCell>
            <StyledTableCell align="center"><Box sx={{ fontSize: 16 }}><AttachMoney /></Box> Fee</StyledTableCell>
            <StyledTableCell align="center"><Box sx={{ fontSize: 16 }}><EventBusy /></Box> Number of Instances</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ id, name, periodDays, fee, instances }, index) => (
            <StyledTableRow key={id}>
              <StyledTableCell align="center">
                {editingRow === index ? (
                  <TextField name="name" value={editingData.name} onChange={handleInputChange} />
                ) : (
                  name
                )}
              </StyledTableCell>
              <StyledTableCell align="center">
                {editingRow === index ? (
                  <TextField name="period" value={editingData.period} onChange={handleInputChange} />
                ) : (
                  periodDays
                )}
              </StyledTableCell>
              <StyledTableCell align="center">
                {editingRow === index ? (
                  <TextField name="fee" value={editingData.fee} onChange={handleInputChange} />
                ) : (
                  fee
                )}
              </StyledTableCell>
              <StyledTableCell align="center">{instances.length}</StyledTableCell>
              <StyledTableCell align="center">
                {editingRow === index ? (
                  <div>
                    <IconButton onClick={saveEdit}>
                      <SaveIcon color="primary" />
                    </IconButton>
                    <IconButton onClick={cancelEdit}>
                      <CancelIcon color="secondary" />
                    </IconButton>
                  </div>
                ) : (
                  <div>
                    <IconButton onClick={() => editRow(index)}>
                      <EditIcon color="action" />
                    </IconButton>
                    <IconButton onClick={() => deleteRow(index)}>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </div>
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CourseTable;
