//Write your missing code here



import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlinePlus } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.leftSection}>
        <Link to="/" style={styles.icon}>
          <AiOutlineHome size={24} />
        </Link>
        <h1 style={styles.title}>EmployeeApp</h1>
      </div>
      <div style={styles.rightSection}>
        <Link to="/add" style={styles.icon}>
          <AiOutlinePlus size={24} />
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px",
    backgroundColor: "#4B0082", // Indigo/Purple
    color: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  leftSection: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  title: {
    margin: 0,
    fontSize: "20px",
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    color: "#fff",
    textDecoration: "none",
    marginLeft: "15px",
  },
};

export default Navbar;
