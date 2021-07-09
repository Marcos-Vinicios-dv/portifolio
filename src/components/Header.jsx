import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import SideBar from './SideBar';
import NavLinks from './NavLinks';

const Header = () => {
  const [page, setPage] = useState('Home');
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function handleOnClickPage({ currentTarget }) {
    isOpenMenu && handleMenuOpenClose();
    setTimeout(() => {
      setPage(currentTarget.innerText);
    }, 2000);
  }

  function handleMenuOpenClose() {
    document.body.style.overflow = isOpenMenu ? 'initial' : 'hidden';
    setIsOpenMenu(!isOpenMenu);
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY < 250 && setPage('Home');
      window.scrollY > 250 && window.scrollY <= 850 && setPage('Sobre mim');
      window.scrollY > 850 && window.scrollY <= 1550 && setPage('Skills');
      window.scrollY > 1550 && window.scrollY <= 2050 && setPage('Projetos');
      window.scrollY > 2050 && setPage('Contato');
    });
  }, []);

  return (
    <HeaderContainer>
      <div>
        <Logo>
          <Link to="home" smooth={true} duration={50} isDynamic={true}>
            MARCOS
          </Link>
        </Logo>
        <Nav>
          <NavLinks handleOnClickPage={handleOnClickPage} page={page} />
        </Nav>

        <HamburgerMenu onClick={handleMenuOpenClose}>
          <div></div>
          <div></div>
          <div></div>
        </HamburgerMenu>

        <SideBar isOpen={isOpenMenu} closeMenu={handleMenuOpenClose}>
          <NavLinks handleOnClickPage={handleOnClickPage} page={page} />
        </SideBar>
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background-color: #1f2235;
  color: #fbfbff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  font: 400 2rem 'Open-Sans', sans-serif;

  > div {
    width: 90%;
    max-width: 1370px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  position: fixed;
  z-index: 10;
`;

const Nav = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;

const Logo = styled.div`
  font-weight: 700;
  flex: 1;

  a {
    cursor: pointer;
  }
`;

const HamburgerMenu = styled.div`
  @media (max-width: 600px) {
    width: 40px;
    height: 30px;

    div {
      height: 3px;
      width: 100%;
      margin: 6px auto;
      border-radius: 1px;
      background-color: #fbfbff;
    }
  }
`;
