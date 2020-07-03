import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  padding: 10px 0;
  margin-bottom: 20px;
  width: 100%;
  height: 50px;
  background-color: #2196f3;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  list-style: none;
`;

const AppTitle = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 25px;
`;

const MenuContainer = styled.ul`
	display: inline-flex;

`;

const MenuItem = styled.li`
  list-style: none;
  color: #fff;
	cursor: pointer;
	margin-left: 40px;

	&:hover {
		color: red;
	}
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <NavContainer>
        <AppTitle to='/'>Trade In's</AppTitle>

        <MenuContainer>
          <MenuItem>Sign in</MenuItem>
          <MenuItem>Sign up</MenuItem>
        </MenuContainer>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
