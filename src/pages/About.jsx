import styled from 'styled-components';

import Foto from '../assets/images/Marcos.jpg';

const Sobre = () => {
  return (
    <SobreContainer name="about">
      <div>
        <ImageContainer
          data-aos="flip-left"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <div>
            <div>
              <img src={Foto} alt="Marcos Vinicios" />
            </div>
          </div>
        </ImageContainer>
        <InfoContainer>
          <span></span>
          <div>
            <p>
              Sou estudante de TI no colégio Técnico de Limeira (COTIL), estou
              no meu segundo e último ano de ensino do curso e mesmo sem
              finalizá-lo irei me lançar no mercado de trabalho.
            </p>
            <p>
              Apaixonado por Front-end decidi me especializar nessa área, porém
              não irei me prender apenas ao front-end, tenho planos para
              futuramente ser FullStack.
            </p>
            <p>
              Estou buscando meu primeiro emprego na área e espero fazer parte
              de uma empresa em que eu possa desenvolver minhas habilidades e
              conhecer ainda mais desse universo que é a programação.
            </p>
          </div>
        </InfoContainer>
      </div>
    </SobreContainer>
  );
};

export default Sobre;

const SobreContainer = styled.div`
  background-color: #12162e;
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;

  > div {
    width: 90%;
    max-width: 1370px;
    display: flex;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 10% 0;
    div {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    height: 460px;
    width: 360px;
    min-width: 280px;
    border: 8px solid #c72939;
    box-shadow: -10px 10px 12px rgba(0, 0, 0, 0.2);

    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      width: 100%;
      height: 100%;
      position: relative;
      top: -32px;
      right: -32px;
      background-color: #181c33;
      border-radius: 3px;
      padding: 8px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media (max-width: 1252px) {
    > div {
      width: 300px;
      height: 400px;
      border: 6px solid #c72939;
      div {
        top: -24px;
        right: -24px;
      }
    }
  }
  @media (max-width: 768px) {
    > div {
      width: 280px;
      height: 350px;
      border: 4px solid #c72939;
      div {
        top: -16px;
        right: -16px;
      }
    }
  }
`;

const InfoContainer = styled.div`
  height: 100%;
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    margin: 32px 0 32px 100px;
    border-bottom: 1px solid #c72939;
    width: 200px;
    &::before {
      content: 'Sobre mim';
      font-size: 3.5rem;
      font-weight: 400;
      color: #fbfbff;
      position: relative;
      left: -50%;
    }
  }

  p {
    color: rgba(209, 209, 209, 0.7);
    & + p {
      margin-top: 24px;
    }
  }

  @media (max-width: 768px) {
    width: auto;
    text-align: center;
    align-items: center;

    span {
      width: 150px;
      margin-left: 140px;
    }
  }
`;
