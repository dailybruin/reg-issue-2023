import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
    padding: 5em;
`;

const Box = styled.div`
    border: 2px solid black; 
`;



export default function Interactive() {
    return (
        <Container>
            <Box>
                <iframe src="https://wp.dailybruin.com/wp-content/themes/caeruleum/js/interactives/regissue-2023/spinwheel">
                </iframe>
            </Box>
        </Container>
      );
  }