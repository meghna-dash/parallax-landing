import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { openModal, closeModal } from '@redq/reuse-modal';
import NavbarWrapper from '../../../components/Navbar';
import Drawer from '../../../components/Drawer';
import { Button } from 'reactstrap';
import Logo from '../../../components/UI/Logo';
import HamburgMenu from '../../../components/HamburgMenu';
import ScrollSpyMenu from '../../../components/ScrollSpyMenu';
import { Container } from './navbar.style';
// import SearchPanel from '../SearchPanel';
// import LoginModal from '../LoginModal';
// import CopyrightSection from '../CopyrightsSection';
import LogoImage from '../../../assets/image/agency/logo.png';
import { DrawerContext } from '../../../contexts/DrawerContext';
import data from '../../../data/Agency/';

// Default close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

// Alt close button for modal
const CloseModalButtonAlt = () => (
  <Button
    className="modalCloseBtn alt"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const Navbar = ({ navbarStyle, logoStyle }) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  const StartButton = ({
    btnStyle,
  }) => {
    return (
      <p style={{ textAlign: 'left '}}>
        <Button
          href="#get_started"
          title="FREE DEMO"
          {...btnStyle}
        />
      </p>
    );
  };

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Logo
          href="#"
          logoSrc={LogoImage}
          title="Userarx"
          logoStyle={logoStyle}
        />
        <div style={{ display: 'flex', alignItems: 'right' }}>
          <Button
            outline
            className="buttonbutton"
            href="#login"
          >
            LOG IN
          </Button>
          <Button
            className="call-to-action lift"
            href="#get_started"
          >
            REGISTER
          </Button>
        </div>
      </Container>
    </NavbarWrapper>
  );
};

// Navbar style props
Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  btnStyle: PropTypes.object,
};

Navbar.defaultProps = {
  // Default navbar style
  navbarStyle: {
    minHeight: '70px',
  },
  // Default logo size
  logoStyle: {
    width: '220px',
    height: 'auto',
  },
  btnStyle: {
    minWidth: '160px',
    fontSize: '14px',
    fontWeight: '700',
    borderRadius: '4px',
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    backgroundColor: "#54a0c6",
    minHeight: "48px",
    boxSizing: "border-box",
    borderRadius: "4px"
  },
};

export default Navbar;
