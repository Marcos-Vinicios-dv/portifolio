import CardProject from '../../components/CardProject';

import {
  ReactExpenses,
  ReactElections,
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
          title="ig.news"
          src="https://camo.githubusercontent.com/231970608a55e34e951535d5e77e8ddb780daeffe290225a8ab3b6cfb1228322/68747470733a2f2f696b2e696d6167656b69742e696f2f77676c757178767469616c2f436170747572615f64655f74656c615f64655f323032312d30372d32345f31312d34322d34385f4c7479687a54595268472e706e673f7570646174656441743d31363237313337393230323035"
          link="https://github.com/marcos-vinicios-dv/ignews/blob/main/README.md"
        >
          Projeto desenvolvido com Next, TypesScript, next-auth, stripe e
          faunaDB.
        </CardProject>
        <CardProject
          title="dt money"
          src="https://camo.githubusercontent.com/6ebc30f00594cd6f3a6df5f880e1c65d919c9aebf68db3236c3749d3f8e6b1db/68747470733a2f2f6d656469612d657870332e6c6963646e2e636f6d2f646d732f696d6167652f4335363232415146567a5978563559486975672f6665656473686172652d736872696e6b5f323034385f313533362f302f313632363231323337333232393f653d3136323933333132303026763d6265746126743d32574b4e5a34576f6e4c3177506b6e56346777376a734f58434561705763524376614e484772764a443363"
          link="https://github.com/marcos-vinicios-dv/dtmoney"
        >
          Projeto desenvolvido com React, TypesScript, styled-components,
          axios...
        </CardProject>
        <CardProject
          title="React - Elections"
          src={ReactElections}
          link="https://github.com/marcos-vinicios-dv/React-Elections"
        >
          Projeto desenvolvido com React, Javascript e TailWind CSS.
        </CardProject>
        <CardProject
          title="Flash-Cards"
          src={FlashCards}
          link="https://github.com/marcos-vinicios-dv/react-flash-cards"
        >
          Projeto desenvolvido com React, Javascript, react-tabs e TailWind CSS.
        </CardProject>
        <CardProject
          title="Case - Maker"
          src={CaseMaker}
          link="https://github.com/marcos-vinicios-dv/case-maker"
        >
          Projeto desenvolvido com React, Javascript, Redux, Redux Saga,
          Router-dom...
        </CardProject>
        <CardProject
          title="MainCases"
          src={MainCases}
          link="https://github.com/marcos-vinicios-dv/mainCases"
        >
          Projeto desenvolvido com React, Javascript, Redux, Redux Saga,
          Router-dom...
        </CardProject>
      </CardsGroup>
    </ProjectsContainer>
  );
};
