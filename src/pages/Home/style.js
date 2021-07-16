import styled from 'styled-components';
import { lighten } from 'polished';

export const HomeContainer = styled.div`
  height: 90vh;
  width: 90%;
  max-width: 1370px;

  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-top: 70px;
    padding-bottom: 20px;
    height: auto;
    div {
      width: 100%;
      text-align: center;
    }

    button {
      margin: 0 auto;
    }
  }
`;

export const InfoContainer = styled.div`
  height: 100%;
  width: 45%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  span:first-child {
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
export const ImageContainer = styled.div`
  height: 100%;
  flex: 1;

  display: flex;

  @media (max-width: 768px) {
    order: -1;
    margin-bottom: 16px;
  }
`;

export const IconButton = styled.button`
  width: 40px;
  height: 40px;

  border: 1px solid #ec2236;
  border-radius: 50%;

  background-color: rgba(0, 0, 0, 0.35);

  padding-top: 8px;

  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    border: none;
    background-color: #ec2236;
  }
`;

export const DownloadButton = styled.button`
  width: 180px;
  height: 50px;

  background-color: #ec2236;

  border: none;
  border-radius: 5px;

  box-shadow: 0px 10px 12px rgba(0, 0, 0, 0.2);

  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  font: 400 1.7rem 'Open-Sans', sans-serif;
  color: #fbfbff;

  &:hover {
    box-shadow: none;
    background-color: ${lighten(0.05, `#ec2236`)};
  }

  @media (max-width: 768px) {
    width: 140px;
  }
`;
