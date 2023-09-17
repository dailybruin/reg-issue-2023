import styled from 'styled-components';
import { mediaQueries } from '../shared/config';


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


export default function ArticleCard(props){
    const OuterContainer = styled.div`
        position: relative;
        width: 100%;
        height: fit-content;
        min-height: 500px;
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
        border-bottom: 2.5px solid black;
        border-top: 2.5px solid black
    `;


    const ByLine = styled.p`
        display: block;
        font-size: 16px;
        font-weight: 200;
        text-align: center;
        color: black;
        font-family: 'Reem Kufi Ink', sans-serif;
        text-transform: uppercase;

        ${mediaQueries.mobile} {
            font-size: 12px;
        }

      `;

    const Title = styled.a`
        display: block;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        padding: 0.8em;
        color: black;
        font-family: 'Reem Kufi Ink', sans-serif;

        ${mediaQueries.mobile} {
            font-size: 12px;
        }
    `;


    return(
        <div>
            {props.article_title != 'blank' &&
                <OuterContainer>
                    <Bar/>
                    <a href={props.article_url}>
                        <Image src={props.article_image}></Image>
                    </a>
                    <a href={props.article_url}>
                        <Title> {props.article_title} </Title>
                    </a>
                    <ByLine> BY {props.article_byline} </ByLine>
                </OuterContainer>
            }
        </div>
        


    )
}
