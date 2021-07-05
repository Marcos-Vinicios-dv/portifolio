import styled from 'styled-components';

const SkillBar = ({
  language = 'lg',
  percent = 50,
  primaryColor = '#fff',
  secondaryColor = '#B9B9B9',
}) => {
  return (
    <SkillBarContainer>
      <Dot primaryColor={primaryColor} />
      <p>{language}</p>
      <Bar
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        percent={percent}
      >
        <div></div>
      </Bar>
      {percent + '%'}
    </SkillBarContainer>
  );
};

export default SkillBar;

const SkillBarContainer = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  color: rgba(209, 209, 209, 0.7);
  font-size: 1.5rem;
  p {
    padding-left: 8px;
    text-align: left;
    width: 20%;
  }

  @media (max-width: 740px) {
    font-size: 1.4rem;
  }
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.primaryColor};

  @media (max-width: 740px) {
    width: 8px;
    height: 8px;
  }
`;

const Bar = styled.span`
  width: 70%;
  height: 8px;
  margin-right: 8px;
  border-radius: 10px;
  background-color: ${props => props.secondaryColor};

  display: flex;
  flex-direction: column;

  div {
    width: ${props => props.percent}%;
    height: 8px;
    border-radius: 10px;
    background-color: ${props => props.primaryColor};
  }

  @media (max-width: 740px) {
    height: 6px;
  }
`;
