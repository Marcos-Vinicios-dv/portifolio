import CardSkill from '../../components/CardSkill';
import SkillBar from '../../components/SkillBar';

import { SkillsContainer, Title, CardsGroup } from './style';

export const Skills = () => {
  return (
    <SkillsContainer name="skills">
      <Title />
      <CardsGroup>
        <CardSkill title="Linguagens">
          <SkillBar
            language="JS"
            percent={75}
            primaryColor="#EFDF52"
            secondaryColor="#A79C7C"
          />
          <SkillBar
            language="TS"
            percent={40}
            primaryColor="#9752EF"
            secondaryColor="#75699B"
          />
          <SkillBar
            language="JAVA"
            percent={30}
            primaryColor="#EF5252"
            secondaryColor="#916972"
          />
        </CardSkill>
        <CardSkill title="Frameworks">
          <SkillBar
            language="React"
            percent={50}
            primaryColor="#52A4EF"
            secondaryColor="#6B879F"
          />
          <SkillBar
            language="R.Native"
            percent={10}
            primaryColor="#05B6F6"
            secondaryColor="#588AA0"
          />
        </CardSkill>
      </CardsGroup>
    </SkillsContainer>
  );
};
