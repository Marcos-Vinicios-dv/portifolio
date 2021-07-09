import styled from 'styled-components';
import CardSkill from '../components/CardSkill';
import SkillBar from '../components/SkillBar';

const Skills = () => {
  return (
    <SkillsContainer name="skills">
      <Title />
      <CardsGroup>
        <CardSkill title="Linguagens">
          <SkillBar
            language="JS"
            percent={65}
            primaryColor="#EFDF52"
            secondaryColor="#A79C7C"
          />
          <SkillBar
            language="TS"
            percent={30}
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
            percent={45}
            primaryColor="#52A4EF"
            secondaryColor="#6B879F"
          />
          <SkillBar
            language="R.Native"
            percent={5}
            primaryColor="#05B6F6"
            secondaryColor="#588AA0"
          />
        </CardSkill>
      </CardsGroup>
    </SkillsContainer>
  );
};

export default Skills;

const SkillsContainer = styled.div`
  width: 100%;
  max-width: 1370px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 64px;

  z-index: 1;

  @media (max-width: 980px) {
    height: 550px;
    > div {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const Title = styled.span`
  margin-bottom: 40px;
  margin-left: 70px;
  border-bottom: 1px solid #ec2236;
  width: 70px;

  &::before {
    content: 'Skills';
    font-size: 3.5rem;
    color: #fbfbff;
    position: relative;
    left: -50%;
  }
`;

const CardsGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
