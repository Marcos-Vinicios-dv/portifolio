import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  width: 100%;
  padding: 100px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #1f2235;
`;

export const Title = styled.h1`
  margin: 56px 0 40px 115px;
  border-bottom: 1px solid #f5163f;
  width: 110px;

  &::before {
    content: 'Projetos';
    font-size: 3.5rem;
    font-weight: 400;
    color: #fbfbff;
    position: relative;
    left: -50%;
  }
`;

export const CardsGroup = styled.ul`
  list-style: none;
  width: 90%;
  max-width: 1370px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
  gap: 20px;

  place-content: center;
  place-items: center;
  li {
    width: 100%;
    max-width: 400px;
    padding: 16px;
    background-color: #f5163f;

    box-shadow: 0px 10px 12px rgba(0, 0, 0, 0.2);

    & + li {
      box-shadow: none;
      background: #23263a;
      /* border: 2px solid #24283d; */
      border-radius: 5px;
    }
    img {
      max-width: 100%;
      max-height: auto;
    }
    a {
      width: 100%;
    }

    h2 {
      color: #fbfbff;
    }

    p {
      color: rgba(209, 209, 209, 0.7);
    }
  }
`;
