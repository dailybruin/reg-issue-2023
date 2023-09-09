import styled from 'styled-components';
import { mediaQueries } from '../shared/config';
import ArticleCard from "./ArticleCard";
import ImageCard from './ImageCard';
import blue1 from "../images/blue1.svg";

const OuterContainer = styled.div`
    max-width: 100vw;
    position: relative;
    margin-top: 1em;
`;
const Grid = styled.div`
    height: fit-content;
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

const EmptyPlaceHolder = styled.div`

`;
export default function ArticleGrid(props) {
    console.log("bruh");
    console.log(props.articles);
    return (
        <OuterContainer>
            <Grid>
                {props && props.articles
                    ? props.articles.map((item) => {
                        if (!item.article_title) {
                            // If article_title is empty, return empty space
                            return <EmptyPlaceHolder/>;
                        }
                        else if (item.article_title.includes('*')) {
                            return (
                                <ImageCard
                                article_image={blue1}
                                color = {item.color}
                                />
                            )
                        }
                        else {
                            return (
                                <ArticleCard
                                article_title={item.article_title}
                                article_byline={item.article_byline}
                                color = {item.color}
                                article_image={item.article_image}
                                article_url={item.article_url}
                            />
                            )
                        };
                    })
                : null}
            </Grid>
        </OuterContainer>
    )
}