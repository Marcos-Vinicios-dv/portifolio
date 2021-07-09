import { Foto } from '../../assets/index';

import { SobreContainer, ImageContainer, InfoContainer } from './style';

export const Sobre = () => {
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
