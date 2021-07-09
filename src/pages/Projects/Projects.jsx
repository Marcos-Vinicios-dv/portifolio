import CardProject from '../../components/CardProject';

import {
  ReactExpenses,
  ReactElections,
  ReactInvestments,
  FlashCards,
  CaseMaker,
  MainCases,
} from '../../assets/index';

import { ProjectsContainer, Title, CardsGroup } from './style';

export const Projects = () => {
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
