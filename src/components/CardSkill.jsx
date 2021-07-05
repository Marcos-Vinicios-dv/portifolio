import styled from 'styled-components';

const CardSkillContainer = styled.div`
  height: 240px;
  width: 50%;
  max-width: 400px;
  min-width: 300px;
  text-align: center;

  > span {
    font-size: 2.4rem;
    color: #fbfbff;
  }

  @media (max-width: 980px) {
    & + div {
      margin-top: 16px;
    }
  }
`;

const Card = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: rgba(46, 48, 70, 1);
  border-radius: 10px;
  box-shadow: 0px 10px 12px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  margin-top: 16px;
`;

const CardSkill = ({ children: barras, title = 'Titulo' }) => {
  return (
    <CardSkillContainer
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <span>{title}</span>
      <Card>{barras}</Card>
    </CardSkillContainer>
  );
};

export default CardSkill;
