import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";


const Item = styled.div`
  font-weight: 400;
  font-size: 16px;
  font-family: 'Reem Kufi Ink', sans-serif;
  text-align: left;
  color: white;
  display: flex;
  flex-direction: column;
  margin-bottom: 3em;
  
  ${mediaQueries.mobile} {
    font-size: 14px;
  }
`;

const Section = styled.div `
    font-weight: bold;
    font-size: 24px;
`;

const Content = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 1em;
`;

export default function StaffItem(props) {
    const contentParts = props.content.split('/').map(part => part.trim());

    return(
    <Item>

        <Section>{props.section}</Section>

        <Content>
        {contentParts.map((part) => {
            const [whitePart, yellowPart] = part.split('•').map(part => part.trim());
            return (
            <p style={{ marginTop: "-0.5em"}}>
                <span style={{ color: "white" }}>{whitePart}</span>
                <span style={{ color: "yellow" }}> • {yellowPart}</span>
            </p>
            );
        })}
        </Content>
    </Item>
    );
  }