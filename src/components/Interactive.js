import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
    padding-top: 3em;
`;

const Box = styled.div`

    iframe {
        height: 80vh;
        max-height: 90vh;
        width: 35vw;
        border: none;
        text-align: center;
        display: block;
        margin: auto;

        ${mediaQueries.mobile} {
            width: 80vw;
            height: 90vh;
        }
    }
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