import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const BlurbContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 7em;
`;

const Text = styled.div`
    font-family: 'Reem Kufi Ink', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color:  white;

    width: 50vw;
    text-align: center;
    padding: 2em;
    margin: 3em auto 1em auto;

    ${mediaQueries.mobile} {
        padding: 0;
        margin: 3em 0;
        width: 70vw;
    }
`;

const TextBottom = styled.div`
    font-family: 'Reem Kufi Ink', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color:  white;

    width: 50vw;
    text-align: center;
    line-height: 1.75em;

    ${mediaQueries.mobile} {
        width: 70vw;
    }
`;

export default function Blurb(props) {
    return (
      <BlurbContainer>
        <Text>{props.blurb}</Text>
        <TextBottom>
            Sincerely,
            <br></br>
            Isabelle Friedman  
            <span style={{color: 'yellow'}}>
            •   Editor in chief
            </span> 
            <br></br>
            Abigail Siatkowski
            <span style={{color: 'yellow'}}>
            •   Managing editor
            </span> 
            <br></br>
            Emily Tang
            <span style={{color: 'yellow'}}>
            •   Digital managing editor
            </span>  
        </TextBottom>
      </BlurbContainer>
    );
  }