import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Slideburger = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 19;

  li {
    padding: 18px 10px;
    padding: 20px;
  }
  a {
    text-decoration: none;
    font-weight: 400;
    font-style: normal;
    color: #262a2d!important;
  }
  a:hover {
    color: #fff!important;
    font-weight: bold;
  }

  li:hover {
    background: #ffcc00;
  }

  .twitter:hover {
    background-color: var(--tr);
  }

  .facebook:hover {
    background-color: var(--fb);
  }

  .instagram:hover {
    background-color: var(--im);
  }

  .logoBurger {
    display: none;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background: #f1f1f1;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: auto;
    width: 80%;
    padding-top: 5.5rem;
    text-align: center;
    }
    .logoBurger {
      display: block;
      width: 75px;
      height: 75px;
      margin: auto;
      border-radius: 50%;
    }
  } ;
`;

// eslint-disable-next-line react/prop-types
const RightNav = ({ open }) => {
  return (
    <Slideburger open={open}>
      {/* <li>
        <Link to="/">Accueil</Link>
      </li> */}
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li className="twitter">
        <Link to="/twitter">Twitter</Link>
      </li>
      <li className="facebook">
        <Link to="/facebook">Facebook</Link>
      </li>
      <li className="instagram">
        <Link to="/instagram">Instagram</Link>
      </li>
    </Slideburger>
  );
};

export default RightNav;
