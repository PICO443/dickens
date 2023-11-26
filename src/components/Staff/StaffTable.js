import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
  styled,
  TextField
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { Group, Schedule } from '@mui/icons-material';
import { deleteTeacher } from "../../services/StaffService";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  '&.MuiTableCell-head': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  '&.MuiTableCell-body': {
    fontSize: 14,
    backgroundColor: theme.palette.background.paper,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.background.paper,
  },
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.background.default,
  },
}));

function TeacherTable({ teachers, setPendingUpdates }) {
  const [rows, setRows] = useState(teachers);
  const [editingRow, setEditingRow] = useState(null);
  const [editingData, setEditingData] = useState({});

  useEffect(() => {
    setRows(teachers);
  }, [teachers]);

  const editRow = (row) => {
    setEditingRow(row);
    setEditingData(rows[row]);
  };

  const deleteRow = (row) => {
    deleteTeacher(teachers[row].id)
    setPendingUpdates({deletedTeacher: teachers[row]})
    // setRows(rows.filter((_, index) => index !== row));
    
  };

  const saveEdit = () => {
    setRows(rows.map((teacher, index) => (index === editingRow ? editingData : teacher)));
    cancelEdit();
    // Add logic for saving edited teacher data here
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
            <StyledTableCell align="center"><Box sx={{ fontSize: 16 }}><Schedule /></Box> Department</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ id, name, department }, index) => (
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
                  <TextField name="department" value={editingData.department} onChange={handleInputChange} />
                ) : (
                  department
                )}
              </StyledTableCell>
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

export default TeacherTable;
