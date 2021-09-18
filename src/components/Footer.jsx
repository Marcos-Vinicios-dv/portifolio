import styled from 'styled-components';

import {
  roundLinkedIn,
  roundGithub,
  roundEmail,
  Maps,
  Phone,
} from '../assets/index';

const Footer = () => {
  return (
    <FooterContainer name="footer">
      <h1>Contato</h1>
      <MainContainer>
        <RedesSociais>
          <span>
            <img src={roundLinkedIn} alt="" />
            <a
              href="https://www.linkedin.com/in/marcos-vinicios-dv/"
              target="_black"
            >
              linkedin.com/in/marcos-vinicios-dv
            </a>
          </span>
          <span>
            <img src={roundGithub} alt="" />
            <a href="https://github.com/marcos-vinicios-dv" target="_black">
              github.com/marcos-vinicios-dv
            </a>
          </span>
          <span>
            <img src={roundEmail} alt="" />
            <a href="mailto:marcosviniciosdev13@gmail.com" target="_black">
              marcosviniciosdev13@gmail.com
            </a>
          </span>
        </RedesSociais>
        <InfoAdicional>
          <span>
            <img src={Maps} alt="" />
            <a
              href="https://www.google.com.br/maps/place/Artur+Nogueira,+SP,+13160-000/@-22.5637683,-47.1844445,14z/data=!3m1!4b1!4m5!3m4!1s0x94c88c8d15ed2f1d:0x1fff1b09fa877534!8m2!3d-22.5740094!4d-47.1714126"
              target="_black"
            >
              Artur Nogueira, SP
            </a>
          </span>
          <span>
            <img src={Phone} alt="" />
            <a href="tel:+5519996932478">+55 (19) 99693-2478</a>
          </span>
        </InfoAdicional>
      </MainContainer>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;

  padding: 32px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #f5163f;

  h1 {
    font-size: 3.5rem;
    font-weight: 400;
    color: #fbfbff;
    margin-bottom: 24px;
  }

  @media (max-width: 884px) {
    height: auto;
    div {
      align-items: center;
      flex-direction: column;
    }
  }
`;

const MainContainer = styled.div`
  width: 90%;
  max-width: 1024px;
  display: flex;
  justify-content: center;

  @media (max-width: 884px) {
    div {
      width: 100%;

      span {
        width: 100%;
        justify-content: center;
      }
    }
  }
`;

const RedesSociais = styled.div`
  width: 50%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  a {
    margin-left: 8px;
    color: rgba(209, 209, 209, 0.7);
    text-decoration: none;

    transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover {
      color: #fbfbff;
    }
  }

  span {
    margin-top: 16px;
    width: 60%;
    display: flex;
    align-items: center;
  }
`;

const InfoAdicional = styled.div`
  width: 50%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  a {
    margin-left: 8px;
    color: rgba(209, 209, 209, 0.7);
    text-decoration: none;

    transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  span {
    margin-top: 32px;
    width: 60%;
    display: flex;
    align-items: center;
  }
`;
