import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import menu from '../../images/menu.png'
import vert_menu from '../../images/vert-menu.png'
import { colors, mediaQueries} from '../../shared/config'


const SquareButton = styled.button`
  width: 31px;
  height: 31px;
  background: none;
  border: 2px solid #000000;
  border-bottom: none;
  box-sizing: border-box;
  margin-left: -8px;
  margin-top: -1px;

  ${mediaQueries.mobile} {
    margin-left: 0px;
  margin-top: 0px;
}

  text-align: center;
  font-family: Karla;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #000000;

  transition: 0.2s;


`
const ButtonContainer = styled.div`
  z-index: 2002;

  top: -2px;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  
`

  const Image = styled.img`
    width: 29px;
    height: 29px;
    margin-left: -10px;
  `;

const MobileButtons = (props) => {
  const [active, setActive] = useState(false);
  const marginLeft = "-10px";
  return (
    <ButtonContainer>
      <SquareButton
        color={active ? colors.navActiveBtnBackground : colors.navBtnBackground}
        onClick={() => {
          setActive(prevActive => !prevActive)
          props.callbacks.setShowNav(prevShow => !prevShow)
        }}
      >
        {
          !active ? (
            <img src={menu} alt="menu" width= "29" height="29" style={{ marginLeft: '-6px' }}/>
            // <Image src={menu}></Image>
          ) : (
            <img src={vert_menu} alt="menu" width= "29" height="29" style={{ marginLeft: '-6px' }}/>
            // <Image src={menu}></Image>
          )
        }
      </SquareButton>
    </ButtonContainer>
  )
}

MobileButtons.propTypes = {
  callbacks: PropTypes.shape({
    setShowNav: PropTypes.func
  }),
  history: PropTypes.object
}

export default withRouter(MobileButtons)