import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";

import ShieldIcon from "@mui/icons-material/Security";
import PeopleIcon from "@mui/icons-material/People";
import BadgeIcon from "@mui/icons-material/Badge";
import PersonIcon from "@mui/icons-material/Person";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ReceiptIcon from "@mui/icons-material/Receipt";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsActiveIcon from "@mui/icons-material/Notifications";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

function Dashboard() {
  const { user } = useContext(AuthContext);
  if (!user) return <Box p={5}>Please login</Box>;

  const roleColors = {
    Admin: "error.main",
    HR: "primary.main",
    HRManager: "secondary.main",
    Employee: "success.main",
  };

  const cards = {
    Admin: [
      {
        to: "/admin/users",
        title: "Manage Users",
        text: "Create users, assign roles, reset passwords",
        icon: <ShieldIcon sx={{ fontSize: 40 }} color="error" />,
      },
      {
        to: "/admin/audit",
        title: "Audit Logs",
        text: "System actions history",
        icon: <ListAltIcon sx={{ fontSize: 40 }} color="error" />,
      },
    ],
    HR: [
      {
        to: "/hr/employees",
        title: "Employees",
        text: "Browse and manage employees",
        icon: <PeopleIcon sx={{ fontSize: 40 }} color="primary" />,
      },
      {
        to: "/hr/ctc",
        title: "CTC Creation",
        text: "Define salary structures",
        icon: <MonetizationOnIcon sx={{ fontSize: 40 }} color="primary" />,
      },
      {
        to: "/hr/payslip",
        title: "Generate Payslip",
        text: "Generate payroll slips w/ LOP",
        icon: <ReceiptIcon sx={{ fontSize: 40 }} color="primary" />,
      },
      {
        to: "/hr/exports",
        title: "Exports",
        text: "Export salary reports",
        icon: <FileDownloadIcon sx={{ fontSize: 40 }} color="primary" />,
      },
    ],
    HRManager: [
      {
        to: "/hr/employees", 
        title: "Employees",
        text: "Browse and manage employees",
        icon: <PeopleIcon sx={{ fontSize: 40 }} color="secondary" />,
      },
      {
        to: "/manager/approvals",
        title: "Approvals",
        text: "Approve or release CTCs & payslips",
        icon: <BadgeIcon sx={{ fontSize: 40 }} color="secondary" />,
      },
      {
        to: "/manager/analytics",
        title: "Analytics",
        text: "Payroll trends & reports",
        icon: <InsertChartIcon sx={{ fontSize: 40 }} color="secondary" />,
      },
      {
        to: "/hr/ctc", 
        title: "Create CTC",
        text: "Define salary structures",
        icon: <MonetizationOnIcon sx={{ fontSize: 40 }} color="secondary" />,
      },
      {
        to: "/hr/payslip",
        title: "Generate Payslip",
        text: "Create employee payslips manually",
        icon: <ReceiptIcon sx={{ fontSize: 40 }} color="secondary" />,
      },
      {
        to: "/manager/audit",
        title: "Audit Logs",
        text: "CTC and Payslip action logs",
        icon: <ListAltIcon sx={{ fontSize: 40 }} color="secondary" />,
      },
    ],

    Employee: [
      {
        to: "/employee/profile",
        title: "Profile",
        text: "Manage personal info & CTC",
        icon: <PersonIcon sx={{ fontSize: 40 }} color="success" />,
      },
      {
        to: "/employee/payslips",
        title: "Payslips",
        text: "View & download slips",
        icon: <ReceiptIcon sx={{ fontSize: 40 }} color="success" />,
      },
      {
        to: "/employee/compare",
        title: "Compare",
        text: "Compare salaries across months",
        icon: <InsertChartIcon sx={{ fontSize: 40 }} color="success" />,
      },
      {
        to: "/employee/notifications",
        title: "Notifications",
        text: "Messages & payroll alerts",
        icon: <NotificationsActiveIcon sx={{ fontSize: 40 }} color="success" />,
      },
    ],
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Welcome,{" "}
        <span style={{ color: roleColors[user.role] }}>{user.fullName}</span>{" "}
        <Typography component="span" color="text.secondary">
          ({user.role})
        </Typography>
      </Typography>

      <Grid container spacing={3} maxWidth="lg" justifyContent="center">
        {cards[user.role].map((c) => (
          <Grid item xs={12} sm={6} md={4} key={c.to}>
            <Card sx={{ height: "100%" }}>
              <CardActionArea
                component={Link}
                to={c.to}
                sx={{ height: "100%" }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  {c.icon}
                  <Typography variant="h6" mt={2}>
                    {c.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {c.text}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Dashboard;
