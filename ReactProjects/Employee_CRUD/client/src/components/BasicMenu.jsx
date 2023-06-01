import {Button, Menu, MenuItem, Link} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{ color: "white" }}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link href="/employee/table" sx={{textDecoration: "none"}}>
            All Employees
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/employee/new" sx={{textDecoration: "none"}}>
            New Employee
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/employee/3" sx={{textDecoration: "none"}}>
            Update Employee
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}