import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const MenuItem = styled.div`
  padding: 3em;
`;

const NavbarLink = styled(NavLink)`
  text-decoration: none;
  fontweight: auto;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <MenuItem>
        <NavbarLink to="/checkin">Checkin</NavbarLink>
      </MenuItem>
      <MenuItem>
        <NavbarLink to="/insights">Insights</NavbarLink>
      </MenuItem>
    </NavbarContainer>
  );
};

export default Navbar;
