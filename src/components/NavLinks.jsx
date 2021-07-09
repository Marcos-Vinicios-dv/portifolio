import styled, { css } from 'styled-components';
import { Link } from 'react-scroll';
import { lighten } from 'polished';

const NavLinks = ({ page = 'Home', handleOnClickPage = null }) => {
  return (
    <Navbar>
      <ul>
        <li>
          <NavLink
            page={page === 'Home' ? 1 : 0}
            to="home"
            smooth={true}
            duration={50}
            isDynamic={true}
            onClick={handleOnClickPage}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            page={page === 'Sobre mim' ? 1 : 0}
            to="about"
            smooth={true}
            offset={-50}
            duration={50}
            isDynamic={true}
            onClick={handleOnClickPage}
          >
            Sobre mim
          </NavLink>
        </li>
        <li>
          <NavLink
            page={page === 'Skills' ? 1 : 0}
            to="skills"
            smooth={true}
            offset={-270}
            duration={50}
            isDynamic={true}
            onClick={handleOnClickPage}
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            page={page === 'Projetos' ? 1 : 0}
            to="projects"
            smooth={true}
            duration={50}
            isDynamic={true}
            onClick={handleOnClickPage}
          >
            Projetos
          </NavLink>
        </li>
        <li>
          <NavLink
            page={page === 'Contato' ? 1 : 0}
            to="footer"
            smooth={true}
            duration={50}
            isDynamic={true}
            onClick={handleOnClickPage}
          >
            Contato
          </NavLink>
        </li>
      </ul>
    </Navbar>
  );
};

export default NavLinks;

const Navbar = styled.nav`
  ul {
    list-style: none;
    display: flex;
    li {
      cursor: pointer;
      a {
        padding: 15px 20px;

        &:hover {
          background-color: ${lighten(0.03, '#1f2234')};
        }
      }
    }
  }

  @media (max-width: 600px) {
    font-size: 2.5rem;
    height: 90%;
    width: 100%;
    ul {
      width: 100%;
      height: 80%;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    }
  }
`;

const NavLink = styled(Link)`
  ${(props) =>
    props.page &&
    css`
      border-bottom: 2px solid #c72939;
    `}
`;
