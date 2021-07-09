import styled from 'styled-components';
import CardProject from '../components/CardProject';

import CaseMaker from '../assets/images/CaseMaker.png';
import ReactExpenses from '../assets/images/ReactExpenses.png';
import ReactElections from '../assets/images/ReactElections.png';
import ReactInvestments from '../assets/images/ReactInvestments.png';
import MainCases from '../assets/images/MainCases.png';
import FlashCards from '../assets/images/Flash-Cards.png';

const Projects = () => {
  return (
    <ProjectsContainer name="projects">
      <Title />
      <CardsGroup>
        <CardProject
          title="React - Expenses"
          src={ReactExpenses}
          link="https://github.com/Marcos-Vinicios-dv/react-expenses"
        >
          Projeto desenvolvido com React, TypesScript, Router-dom e Material-UI.
        </CardProject>
        <CardProject
          title="React - Elections"
          src={ReactElections}
          link="https://github.com/Marcos-Vinicios-dv/React-Elections"
        >
          Projeto desenvolvido com React, Javascript e TailWind CSS.
        </CardProject>
        <CardProject
          title="React - Investments"
          src={ReactInvestments}
          link="https://github.com/Marcos-Vinicios-dv/react-investments"
        >
          Projeto desenvolvido com React, Javascript e TailWind CSS.
        </CardProject>
        <CardProject
          title="Flash-Cards"
          src={FlashCards}
          link="https://github.com/Marcos-Vinicios-dv/react-flash-cards"
        >
          Projeto desenvolvido com React, Javascript, Router-dom e TailWind CSS.
        </CardProject>
        <CardProject
          title="Case - Maker"
          src={CaseMaker}
          link="https://github.com/Marcos-Vinicios-dv/case-maker"
        >
          Projeto desenvolvido com React, Javascript, Redux, Redux Saga.
        </CardProject>
        <CardProject
          title="MainCases"
          src={MainCases}
          link="https://github.com/Marcos-Vinicios-dv/mainCases"
        >
          Projeto desenvolvido com React, Javascript, Redux, Redux Saga.
        </CardProject>
      </CardsGroup>
    </ProjectsContainer>
  );
};

export default Projects;

const ProjectsContainer = styled.div`
  width: 100%;
  padding: 100px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #1f2235;
`;

const Title = styled.h1`
  margin: 56px 0 40px 115px;
  border-bottom: 1px solid #ec2236;
  width: 110px;

  &::before {
    content: 'Projetos';
    font-size: 3.5rem;
    font-weight: 400;
    color: #fbfbff;
    position: relative;
    left: -50%;
  }
`;

const CardsGroup = styled.ul`
  list-style: none;
  width: 90%;
  max-width: 1370px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;

  li {
    justify-self: center;
    width: 100%;
    max-width: 400px;
    padding: 16px;
    background-color: #ec2236;

    box-shadow: 0px 10px 12px rgba(0, 0, 0, 0.2);

    & + li {
      box-shadow: none;
      background: none;
      border: 1px solid rgba(209, 209, 209, 0.7);
      border-radius: 5px;
    }
    img {
      width: 100%;
    }
    a {
      width: 100%;
    }

    h2 {
      color: #fbfbff;
    }

    p {
      color: rgba(209, 209, 209, 0.7);
    }
  }
`;
