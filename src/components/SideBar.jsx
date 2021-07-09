import styled from 'styled-components';

import Close from '../assets/images/Close.svg';

const SideBar = ({ isOpen = false, closeMenu = null, children: NavLinks }) => {
  return (
    <SideBarContainer isOpen={isOpen}>
      <Icon onClick={() => closeMenu()}>
        <img src={Close} alt="Fechar" />
      </Icon>
      {NavLinks}
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 11;

  width: 100%;
  height: 100%;

  background-color: #1f2235;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

const Icon = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  img {
    width: 20px;
  }
`;
