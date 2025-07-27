import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
} from "@mui/material";

const Add = () => {
  const [EmpName, setEmpName] = useState("");
  const [EmpId, setEmpId] = useState("");
  const [EmpPosition, setEmpPosition] = useState("");
  const [employees, setEmployees] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = { EmpName, EmpId, EmpPosition };

    if (editIndex !== null) {
      const updatedEmployees = [...employees];
      updatedEmployees[editIndex] = newEmployee;
      setEmployees(updatedEmployees);
      setEditIndex(null);
    } else {
      setEmployees([...employees, newEmployee]);
    }

    setEmpName("");
    setEmpId("");
    setEmpPosition("");
  };

  const handleEdit = (index) => {
    const employee = employees[index];
    setEmpName(employee.EmpName);
    setEmpId(employee.EmpId);
    setEmpPosition(employee.EmpPosition);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Employee Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Employee Name"
          value={EmpName}
          onChange={(e) => setEmpName(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Employee ID"
          value={EmpId}
          onChange={(e) => setEmpId(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Position"
          value={EmpPosition}
          onChange={(e) => setEmpPosition(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          {editIndex !== null ? "Update Employee" : "Add Employee"}
        </Button>
      </form>

      <Grid container spacing={2} sx={{ mt: 4 }}>
        {employees.map((emp, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ textAlign: "center", p: 2 }}>
            
            <Avatar
  sx={{ width: 80, height: 80, mx: "auto", mb: 1 }}
  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${emp.EmpName}`}
/>

              <CardContent>
                <Typography variant="h6">{emp.EmpName}</Typography>
                <Typography variant="body2">ID: {emp.EmpId}</Typography>
                <Typography variant="body2">Position: {emp.EmpPosition}</Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ mt: 1, mr: 1 }}
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  sx={{ mt: 1 }}
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Add;
