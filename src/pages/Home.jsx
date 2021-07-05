import styled from 'styled-components';
import { darken } from 'polished';

import linkedIn from '../assets/images/linkedIn.svg';
import gitHub from '../assets/images/github.svg';
import email from '../assets/images/email.svg';
import ArtPort from '../assets/images/ArtPort2.svg';

const Home = () => {
  return (
    <HomeContainer
      name="home"
      data-aos="fade-right"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <InfoContainer>
        <span>
          <a
            href="https://www.linkedin.com/in/marcos-vinicios-dv/"
            target="_black"
          >
            <IconButton>
              <img src={linkedIn} alt="LinkedIn" />
            </IconButton>
          </a>
          <a href="https://github.com/Marcos-Vinicios-dv" target="_black">
            <IconButton>
              <img src={gitHub} alt="GitHub" />
            </IconButton>
          </a>
          <a href="mailto:marcosviniciosdev13@gmail.com" target="_black">
            <IconButton>
              <img src={email} alt="E-mail" />
            </IconButton>
          </a>
        </span>
        <div>
          <h1>Olá, eu sou Marcos Vinicios!</h1>
          <span>
            Me chamo Marcos Vinicios Teixeira e sou desenvolvedor Front-end,
            buscando minha primeira oportunidade no mercado de tecnologia.{' '}
          </span>
        </div>
        <a href="https://drive.google.com/file/d/1Pi8evBzW-eGZZPH28erqNaDJLx6J5aSU/view?usp=sharing">
          <DownloadButton>Download CV</DownloadButton>
        </a>{' '}
      </InfoContainer>
      <ImageContainer>
        <img src={ArtPort} alt="ArtPort" />
      </ImageContainer>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  height: 90vh;
  width: 90%;
  max-width: 1370px;

  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    div {
      width: 100%;
      text-align: center;
    }

    button {
      margin: 0 auto;
    }
  }

  @media (max-width: 340px) {
    span {
      width: 100%;
    }
  }
`;

const InfoContainer = styled.div`
  height: 100%;
  width: 45%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > span {
    a {
      & + a {
        margin-left: 16px;
      }
    }
  }

  div {
    margin: 32px auto;

    h1 {
      font-size: 4rem;
      color: #fbfbff;

      margin-bottom: 8px;
    }

    span {
      color: rgba(209, 209, 209, 0.7);
    }
  }
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;

  display: flex;

  @media (max-width: 768px) {
    order: -1;
    position: relative;
    top: 8.5%;
    margin-bottom: 16px;
  }
`;

const IconButton = styled.button`
  width: 40px;
  height: 40px;

  border: 1px solid #ef5252;
  border-radius: 50%;

  background-color: rgba(0, 0, 0, 0.35);

  padding-top: 8px;

  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    border: none;
    background-color: #ef5252;
  }
`;

const DownloadButton = styled.button`
  width: 180px;
  height: 50px;

  background-color: #ef5252;

  border: none;
  border-radius: 5px;

  box-shadow: 0px 10px 12px rgba(0, 0, 0, 0.2);

  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  font: 400 1.7rem 'Open-Sans', sans-serif;
  color: #fbfbff;

  &:hover {
    box-shadow: none;
    background-color: ${darken(0.05, `#ef5252`)};
  }

  @media (max-width: 768px) {
    width: 140px;
  }
`;
