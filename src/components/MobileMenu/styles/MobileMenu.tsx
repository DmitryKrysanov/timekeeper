import styled from 'styled-components';

export const Container = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.4);

  display: ${({isOpen}) => (isOpen ? 'block' : 'none')};
`;
