import CardProject from '../../components/CardProject';

import { CaseMaker, MainCases } from '../../assets/index';

import { ProjectsContainer, Title, CardsGroup } from './style';

export const Projects = () => {
  return (
    <ProjectsContainer name="projects">
      <Title />
      <CardsGroup>
        <CardProject
          title="Case Maker"
          src="https://ik.imagekit.io/wgluqxvtial/CaseMaker_1__5a5Om-UHl1gz.png?updatedAt=1631916786820"
          link="https://github.com/marcos-vinicios-dv/case-maker"
        >
          Projeto desenvolvido com React, Typescript, Redux, Redux Saga,
          Router-dom...
        </CardProject>
        <CardProject
          title="Maniplay"
          src="https://ik.imagekit.io/wgluqxvtial/ManiPlay_sBNlG_flT.png?updatedAt=1631916641662"
          link="https://github.com/marcos-vinicios-dv/maniplay"
        >
          Projeto desenvolvido com React, Typescript, styled-components,
          axios...
        </CardProject>
        <CardProject
          title="spacetraveling"
          src="https://camo.githubusercontent.com/d40c03f6ee9ed415afc7ea18ab9c93bda72b74f3fea194f56fbcf5add8aaab20/68747470733a2f2f696b2e696d6167656b69742e696f2f77676c757178767469616c2f436170747572615f64655f74656c615f64655f323032312d30372d32375f31322d33372d32365f6b71546a36674d542d2d2e706e673f7570646174656441743d31363237343030363637333031"
          link="https://github.com/marcos-vinicios-dv/spacetraveling"
        >
          Projeto desenvolvido com Next, TypesScript, react-icons, date-fns,
          Prismic CMS...
        </CardProject>
        <CardProject
          title="ig.news"
          src="https://camo.githubusercontent.com/231970608a55e34e951535d5e77e8ddb780daeffe290225a8ab3b6cfb1228322/68747470733a2f2f696b2e696d6167656b69742e696f2f77676c757178767469616c2f436170747572615f64655f74656c615f64655f323032312d30372d32345f31312d34322d34385f4c7479687a54595268472e706e673f7570646174656441743d31363237313337393230323035"
          link="https://github.com/marcos-vinicios-dv/ignews"
        >
          Projeto desenvolvido com Next, TypesScript, next-auth, stripe,
          faunaDB...
        </CardProject>
        <CardProject
          title="dt money"
          src="https://ik.imagekit.io/wgluqxvtial/Captura_de_tela_de_2021-08-24_10-15-10_L0sTNa5Mu.png?updatedAt=1629810969335"
          link="https://github.com/marcos-vinicios-dv/dtmoney"
        >
          Projeto desenvolvido com React, TypesScript, styled-components,
          axios...
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
