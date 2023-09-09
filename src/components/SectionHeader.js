import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8em;
`;

const Text = styled.div`
  font-family: 'Reem Kufi Ink', sans-serif;
  font-size: 40px;
  font-weight: 600;
  color: white;
  text-transform: uppercase;

  ${mediaQueries.mobile} {
    font-size: 36px;
  }
`;

export default function SectionHeader(props) {
  return (
    <Container>
      <Text>{props.text}</Text>
    </Container>
  );
}