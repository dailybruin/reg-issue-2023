import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const OvalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 3em;
`;

const Oval = styled.div`
    background-color: #005181;
    border: 2px solid black;
    border-radius: 50%;
    width: 50vw;
    height: 200px;

    ${mediaQueries.mobile} {
        width: 80vw;
    }
`;

const Text = styled.div`
    font-family: 'Reem Kufi Ink', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color:  white;

    text-align: center;
    margin-top: 2.5em;

    ${mediaQueries.mobile} {
        margin-top: 3.5em;
        font-size: 16px;
    }

`;


export default function About(props) {
    return (
    <OvalContainer>
        <Oval>
            <Text>
                Like what you see?
                <br></br>
                Apply for a Daily Bruin internship now at
                <br></br>
                <a href="https://apply.uclastudentmedia.com/" style={{color: 'yellow'}}>
                    apply.uclastudentmedia.com.
                </a> 
            </Text>
        </Oval>
    </OvalContainer>
    );
  }