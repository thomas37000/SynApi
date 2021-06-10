import styled from 'styled-components';

const SidebarStyled = styled.div`
  position: fixed;
  z-index: 555;
  top: 0;
  left: 0;
  background-color: #f7f7f7;
  padding: 1rem;
  color: var(--dark);
  max-width: 340px;
  height: 100%;
  transform: translateX(${(props) => (props.show ? '0' : '-100%')});
  transition: all 0.3s ease-in-out;
  overflow-x: hidden;
`;

const SidebarWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  padding: 10px 35px 16px 0px;

  & span,
  & span:before,
  & span:after {
    cursor: pointer;
    border-radius: 1px;
    height: 3px;
    width: 30px;
    background: var(--dark);
    position: absolute;
    display: block;
    content: '';
  }

  & span {
    background-color: transparent;
  }

  & span:before {
    top: 0;
    transform: rotate(45deg);
  }

  & span:after {
    top: 0;
    transform: rotate(-45deg);
  }
`;

export { CloseIcon, SidebarStyled, SidebarWrapper };
