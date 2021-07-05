import styled from 'styled-components';

import Home from '../pages/Home';
import Skills from '../pages/Skills';
import About from '../pages/About';
import Projects from '../pages/Projects';

const MainContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = () => {
  return (
    <MainContainer>
      <Home />
      <About />
      <Skills />
      <Projects />
    </MainContainer>
  );
};

export default Main;
