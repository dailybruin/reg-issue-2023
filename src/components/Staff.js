import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";
import StaffItem from "./StaffItem";

const Header = styled.div`
    font-family: 'Reem Kufi Ink', sans-serif;
    font-size: 36px;
    font-weight: 600;
    color: white;
    margin-top: 3em;
    margin-bottom: 2em;

    ${mediaQueries.mobile} {
        font-size: 32px;
    }
`;

const Container = styled.div`
  position: relative;
  margin: 2em auto 10% auto;
  padding-bottom: 50px;
  width: 80%;
  height: fit-content;
  block-size: fit-content;
  box-sizing: border-box;

  ${mediaQueries.mobile} {
    width: 80%;
  }
`;


const Grid = styled.div`
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2em;

    ${mediaQueries.mobile} {
        grid-template-columns: repeat(1, 1fr);
  }
`;

const BottomGrid = styled.div`
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    grid-template-areas: 
    "a b"
    "a c";
    gap: 2em;

    ${mediaQueries.mobile} {
        grid-template-columns: repeat(1, 1fr);
  }
`;

const Advertising = styled.div`
  position: relative;
  grid-area: a;
`;
const MIS = styled.div`
  position: relative;
  grid-area: b;
`;
const Advisors = styled.div`
  position: relative;
  grid-area: c;
`;


export default function Staff(props) {
    console.log(props.staff);
    return (
        <>
        <Header>
        Daily Bruin Editorial Staff
        </Header>
        <Container>
            <Grid>
            {props.staff.map((item) => {
                return(
                <StaffItem
                    section={item.section}
                    content={item.content}
                />
                );
            })}
            </Grid>
            <BottomGrid>
                <Advertising>
                        <StaffItem
                        section={props.staff_bottom[0].section}
                        content={props.staff_bottom[0].content}
                        />
                </Advertising>
                <MIS>
                    <StaffItem
                        section={props.staff_bottom[1].section}
                        content={props.staff_bottom[1].content}
                    />
                </MIS>
                <Advisors>
                    <StaffItem
                        section={props.staff_bottom[2].section}
                        content={props.staff_bottom[2].content}
                    />
                </Advisors>
                
            
            </BottomGrid>
        </Container>
        </>
      );
  }