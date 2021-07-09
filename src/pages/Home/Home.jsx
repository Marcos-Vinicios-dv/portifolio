import {
  HomeContainer,
  InfoContainer,
  IconButton,
  DownloadButton,
  ImageContainer,
} from './style';

import { linkedIn, gitHub, email, ArtPort } from '../../assets/index';

export const Home = () => {
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
        <span>
          <a href="https://drive.google.com/file/d/1Pi8evBzW-eGZZPH28erqNaDJLx6J5aSU/view?usp=sharing">
            <DownloadButton>Download CV</DownloadButton>
          </a>{' '}
        </span>
      </InfoContainer>
      <ImageContainer>
        <img src={ArtPort} alt="ArtPort" />
      </ImageContainer>
    </HomeContainer>
  );
};
