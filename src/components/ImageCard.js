import styled from 'styled-components';
import { mediaQueries } from '../shared/config';

import blue1 from "../images/blue1.svg";
import blue2 from "../images/blue2.png";
import green1 from "../images/green1.png"
import green2 from "../images/green2.png"
import yellow1 from "../images/yellow1.png"
import yellow2 from "../images/yellow2.png"
import red1 from "../images/red1.png"
import purple1 from "../images/purple1.png"
import magenta1 from "../images/magenta1.png"
import magenta2 from "../images/magenta2.png"

function getBarColor(color){
    if (color == "blue") {
        return "005181";
    }
    else if(color == "green") {
        return "83A440";
    }
    else if(color == "yellow") {
        return "FFDB21";
    }
    else if (color == "red") {
        return "CB0000";
    }
    else if (color == "purple") {
        return "412260";
    }
    else if (color == "black") {
        return "000000";
    }
    else if (color == "magenta") {
        return "A8239B";
    }
}


export default function ImageCard(props){
    const OuterContainer = styled.div`
        position: relative;
        width: 100%;
        height: fit-content;
        min-height: 450px;
        margin: auto;
        background-color: #C0DCCF;
        color: black;
        border: 3px solid black;
        box-sizing: border-box;

        a {
            text-decoration: none;
        }
    `;

    const Bar = styled.div`
        height: 15px;
        background-color: #${getBarColor(props.color)};
        width: 100%;
    `;


    const Image = styled.img`
        height: 60%;
        width: 100%;
        display: block;
        object-fit: scale-down;
        border-top: 2.5px solid black;
        margin: auto;
        padding-top: 27%;

        ${mediaQueries.mobile} {
            padding-top: 0%;
        }
    `;

    const images = [
        blue1,
        blue2,
        green1,
        green2,
        yellow1,
        yellow2,
        red1,
        purple1,
        magenta1,
        magenta2
    ]

    return(
        <div>
            {props.article_title != 'blank' &&
                <OuterContainer>
                    <Bar/>
                    <Image src={images[props.index]}></Image>
                </OuterContainer>
            }
        </div>
        


    )
}
