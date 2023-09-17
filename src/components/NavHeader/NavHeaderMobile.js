import React, { useState } from 'react'

import styled, { keyframes } from 'styled-components'
import Navbar from './NavBar'
import MobileButtons from './MobileButtons'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const NavbarContainer = styled.div`
  z-index: 2000;

  position: fixed;
  width 100%;
  left: 0px;
  background: #10633B;
  border-bottom: 2px solid black;

  display: block;
  visibility: ${props => props.showNav ? 'visible' : 'hidden'};
  animation: ${props => props.showNav ? fadeIn : fadeOut} 0.2s linear;
  transition: visibility 0.2s linear 0.001s;
`

const NavHeader = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div>
        <MobileButtons
          callbacks={{
            setShowNav: setShowNav
          }}
        />
        <NavbarContainer showNav={showNav}>
          <Navbar mobile/>
        </NavbarContainer>
    </div>
  )
}

export default NavHeader