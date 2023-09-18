import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NavButton from './NavButton';
import { mediaQueries } from '../../shared/config';

/* This should always be on top (z-index) */
const NavbarContainer = styled.div`
  z-index: 2000;
  margin: auto;

  ${mediaQueries.notTablet} {
    position: fixed;
    top: 58px;
    width: 100%;
  }
  ${mediaQueries.tablet} {
    margin-top: 20px;
    margin-left: 10px;
    max-width: 100%;
  }
`;

const sections = [
  'INTERACTIVE',
  'NEWS',
  'SPORTS',
  'ARTS',
  'OPINION',
  'THE QUAD',
  'PRIME',
  'MULTIMEDIA',
  'ABOUT',
];
const colors = [
    '#895F80',
    '#005181',
    '#83A440',
    '#FFDB21',
    '#CB0000',
    '#412260',
    'black',
    '#A8239B',
    'black',
];

const Navbar = (props) => {
  const [visibleSection, setVisibleSection] = useState('');

  const getLastVisibleSection = (entries) => {
    let lastVisibleSection;
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        lastVisibleSection = entry.target.id;
      }
    });
    setVisibleSection(lastVisibleSection);
  };
const observer = new IntersectionObserver(getLastVisibleSection, {
    threshold: 0.05,
    rootMargin: '50px',
  });

  useEffect(() => {
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });
  });

  return (
    <NavbarContainer>
      {sections.map((section, i) => (
        <NavButton
          section={section}
          key={section}
          highlight={section === visibleSection}
          index={i}
          color={colors[i]}
        />
      ))}
    </NavbarContainer>
  );
};

Navbar.propTypes = {
  mobile: PropTypes.bool,
};

export default Navbar;