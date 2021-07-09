import styled from 'styled-components';

export const SobreContainer = styled.div`
  background-color: #1f2235;
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

export const ImageContainer = styled.div`
  height: 100%;
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    height: 460px;
    width: 360px;
    min-width: 280px;
    border: 8px solid #ec2236;
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
      background-color: #24283d;
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
      border: 6px solid #ec2236;
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
      border: 4px solid #ec2236;
      div {
        top: -16px;
        right: -16px;
      }
    }
  }
`;

export const InfoContainer = styled.div`
  height: 100%;
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    margin: 32px 0 32px 100px;
    border-bottom: 1px solid #ec2236;
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
