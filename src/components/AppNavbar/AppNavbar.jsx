import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  NavContainer,
  Logo,
  NavControls,
  NavButton
} from './AppNavbar.styles';

const AppNavbar = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <NavContainer>
      <Logo onClick={handleGoHome}>
        <img src="/logo.png" alt="InvoiceCr8tor" />
        <span>Invoice Cr8tor</span>
      </Logo>
      <NavControls>
        <NavButton onClick={handleGoHome}>
          Back to Home
        </NavButton>
      </NavControls>
    </NavContainer>
  );
};

export default AppNavbar;