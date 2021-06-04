import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from '../images/syn.png';

const NavWrapper = styled.div`
  width: 100%;
  height: 7vh;
  background: #f7f7f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: right;

  .logo {
    display: flex;
    width: 35px;
    height: 35px;
    margin-left: 30px;
    border-radius: 50%;
  }
`;

const Navbar = ({ connected, connectedWithToken, toggleMenu }) => {
  return (
    <NavWrapper>
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      {connected || !connectedWithToken ? (
        <button
          className="btn-sidebar btn btn-default"
          type="button"
          onClick={() => toggleMenu(true)}
        >
          <i className="fa fa-cog fa-2x" />
        </button>
      ) : null}
    </NavWrapper>
  );
};

export default Navbar;

Navbar.propTypes = {
  connected: PropTypes.string,
  connectedWithToken: PropTypes.string,
  toggleMenu: PropTypes.func,
};

Navbar.defaultProps = {
  connected: 'undefined',
  connectedWithToken: 'undefined',
  toggleMenu: 'undefined',
};
