import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";
import dice from "../images/dice.svg";

const BlurbContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 7em;

    ${mediaQueries.mobile} {
        padding-top: 0em;
    }

`;

const Text = styled.div`
    font-family: 'Reem Kufi Ink', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color:  white;

    width: 50vw;
    text-align: left;
    padding: 2em;
    margin: 3em auto 1em auto;

    ${mediaQueries.mobile} {
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

const Image = styled.img`
    width: 200px;
    margin-top: 5rem;
    margin-left: 32rem;

    ${mediaQueries.mobile} {
        width: 180px;
        margin-left: 16rem;
    }
`;

export default function Blurb(props) {
    return (
      <BlurbContainer>
        <Text>
            Dear Bruins,
            <br></br>
            <br></br>
            Welcome back to campus, and welcome to the Daily Bruin’s 2023 Registration Issue! We couldn’t be more ecstatic for the school year to begin.
            <br></br>
            <br></br>
            Each year, The Bruin’s Registration Issue boasts a range of stories and multimedia projects to help both new and returning Bruins get acquainted with what’s ahead for the coming year. This time, we’re exploring Chancellor Gene Block’s final year in the role, transportation on UCLA campus, the state of women’s athletics and more. We hope each of these pieces provides insight into our school and how we can make it a better place for all.
            <br></br>
            <br></br>
            If telling the stories of the UCLA community through journalism – whether it be written, audio, visual or something else – sounds as cool to you as it does to us, please consider applying to join the Daily Bruin! Our team of reporters, editors, artists, software engineers and more would love to have you. Applications can be found on  
            <a href="https://apply.uclastudentmedia.com/" style={{ margin: '0 5px', color: "white"}} target="_blank">
                    apply.uclastudentmedia.com
            </a> and are due Oct. 9 at noon.
            <br></br>
            <br></br>
            We are wishing you a wonderful year at UCLA. Whether it’s your first, last or somewhere in between, we hope you make the most of it.
            <br></br>
            <br></br>
        </Text>
        <TextBottom>
            Sincerely,
            <br></br>
            Isabelle Friedman  
            <span style={{color: 'yellow'}}>
            &nbsp;•   Editor in chief
            </span> 
            <br></br>
            Abigail Siatkowski
            <span style={{color: 'yellow'}}>
            &nbsp;•   Managing editor
            </span> 
            <br></br>
            Emily Tang
            <span style={{color: 'yellow'}}>
            &nbsp;•   Digital managing editor
            </span>  
        </TextBottom>
        <Image src={dice}></Image>
      </BlurbContainer>
    );
  }