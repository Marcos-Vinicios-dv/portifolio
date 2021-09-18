import styled from 'styled-components';

export const SkillsContainer = styled.div`
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

export const Title = styled.span`
  margin-bottom: 40px;
  margin-left: 70px;
  border-bottom: 1px solid #f5163f;
  width: 70px;

  &::before {
    content: 'Skills';
    font-size: 3.5rem;
    color: #fbfbff;
    position: relative;
    left: -50%;
  }
`;

export const CardsGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
