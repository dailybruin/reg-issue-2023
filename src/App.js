import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from "./components/Landing";
import Blurb from "./components/Blurb";
import background from "./images/Desktop.svg";
import mobileBackgroud from "./images/Mobile.svg";
import { mediaQueries } from "./shared/config";
import SectionHeader from "./components/SectionHeader";
import About from "./components/About";
import ArticleGrid from "./components/ArticleGrid";
import NavBar from "./components/NavHeader/NavBar";
import NavButton from "./components/NavHeader/NavButton";
import NavHeader from "./components/NavHeader";
import { HashRouter } from 'react-router-dom';
import Staff from "./components/Staff";

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/reg-issue-2023")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  const Container = styled.div`
    background-image: url(${background});
    background-size: cover;
    height: fit-content;

    ${mediaQueries.mobile} {
      background-image: url(${mobileBackgroud});
    }
  `;

  return data && (
    <div className="App">
      <HashRouter>
      <Header/>
      <NavHeader/>
      <Container>
        <Landing image={data.landing_image} credits={data.landing_credits}/>
        <Blurb blurb={data.description_text}/>
        <div id="INTERACTIVE">
          <SectionHeader text="INTERACTIVE"></SectionHeader>
        </div>
        <div id="NEWS">
          <SectionHeader text="NEWS"></SectionHeader> 
          <ArticleGrid articles={data.news}></ArticleGrid>
        </div>
        <div id="SPORTS">
          <SectionHeader text="SPORTS"></SectionHeader>
          <ArticleGrid articles={data.sports}></ArticleGrid>
        </div>
        <div id="ARTS">
          <SectionHeader text="ARTS"></SectionHeader>
          <ArticleGrid articles={data.arts}></ArticleGrid>
        </div>
        <div id="OPINION">
          <SectionHeader text="OPINION"></SectionHeader>
          <ArticleGrid articles={data.opinion}></ArticleGrid>
        </div>
        <div id="THE QUAD">
          <SectionHeader text="THE QUAD"></SectionHeader>
          <ArticleGrid articles={data.quad}></ArticleGrid>
        </div>
        <div id="PRIME">
          <SectionHeader text="PRIME"></SectionHeader>
          <ArticleGrid articles={data.prime}></ArticleGrid>
        </div>
        <div id="MULTIMEDIA">
          <SectionHeader text="MULTIMEDIA"></SectionHeader>
          <ArticleGrid articles={data.multimedia}></ArticleGrid>
        </div>
        <div id="ABOUT">
          <SectionHeader text="ABOUT"></SectionHeader>
          <About></About>
        </div>
        <Staff staff={data.staff}/>
        <Footer/>
      </Container>
      </HashRouter>
    </div>
    
  );
}

export default App;
