import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


import { mediaQueries, colors } from "../../shared/config";
import BEAR from "../../images/BEAR.png";


const BearContainer = styled.button`
    border: none;
    background: none;
    margin-top: -20px;
    
`
const Bear = styled.img`
    opacity: ${props => props.highlight ? 1 : 0};
    margin: auto;
  
    ${mediaQueries.tablet} {
      max-height: 20px;
      opacity: 0;
    }
`
const OuterContainer = styled.button`
    min-height: 20px;
    max-height: 60px;
    box-shadow: 2px 2px 2px 0px #00000040;
    background: ${props => props.highlight ? colors.navActiveBtnBackground : colors.navBtnBackground};
    border: none;
    padding-left: 4px;
    padding-right 4px;

    ${mediaQueries.notTablet} {
      border-left: ${props => props.index === 0 ? 1:0};
      transition: 0.3s;
      &:hover {
        background: 'black';
      }
    }
    ${mediaQueries.tablet} {
      &:active {
        background: ${colors.navButtonHover};
      }
      margin-right: 10px;
      margin-bottom: 10px;
    }


`
const InnerContainer = styled.button`
    min-height: 10px;
    max-height: 50px;
    border: 1px solid black;
    margin-top: 2px;
    margin-bottom: 2px;
    background: ${props => props.highlight ? colors.navActiveBtnBackground : colors.navBtnBackground};
    padding-left: 4px;
    padding-right: 4px;

    ${mediaQueries.tablet} {
      padding-right: -5px;
    }

`

const StyledButton = styled.button`
  min-height: 20px;
  max-height: 50px;
  border: none;
  margin-top: 2px;
  margin-bottom: 2px;
  background: ${props => props.color};


  color: white;

  font-family: Reem Kufi;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;


  /* identical to box height */
  align-items: center;
  text-align: center;
  padding-left: 15px;
  padding-right: 15px;

  white-space: nowrap;

  line-height: 24px;
  text-shadow: -0.5px 0.5px 0 #000,
                0.5px 0.5px 0 #000,
                0.5px -0.5px 0 #000,
                -0.5px -0.5px 0 #000;
`

const NavButton = (props) => {
  const media = window.matchMedia('(max-width: 900px)')
  const [isMobile, setIsMobile] = useState(media.matches)

  media.addEventListener("change", () => {
    if (media.matches !== isMobile) {
      setIsMobile(media.matches)
    }
  })

  return (
    <BearContainer>
        <Bear highlight={props.highlight} src={BEAR} style={{display:'block'}}></Bear>
    
    <OuterContainer highlight={props.highlight} 
        onClick={() => {
            const target = document.getElementById(props.section)
            if (target) {
            const rem = parseFloat(getComputedStyle(document.documentElement).fontSize)
            const remDisplacement = isMobile ? 19 * rem : 7 * rem; 
            const top = target.getBoundingClientRect().top + window.pageYOffset - remDisplacement;
            window.scrollTo({ top, behavior: "smooth" })
            }
        }}
    >
        <InnerContainer highlight={props.highlight}>
            <StyledButton
            index={props.index}
            highlight={props.highlight}
            onClick={() => {
                const target = document.getElementById(props.section)
                if (target) {
                const rem = parseFloat(getComputedStyle(document.documentElement).fontSize)
                const remDisplacement = isMobile ? 19 * rem : 7 * rem; 
                const top = target.getBoundingClientRect().top + window.pageYOffset - remDisplacement;
                window.scrollTo({ top, behavior: "smooth" })
                }
            }}
            color={props.color}
            >
            {props.section}
            </StyledButton>
        </InnerContainer>
    </OuterContainer>
    </BearContainer>
  )
  
}

NavButton.propTypes = {
  section: PropTypes.string.isRequired,
  highlight: PropTypes.bool
}

export default NavButton