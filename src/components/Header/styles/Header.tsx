import styled from 'styled-components';
import PrimaryIconButton from '../../UI/IconButton';

export const Container = styled.header`
  height: 72px;
  padding: 0 24px;
  display: flex;
  align-items: center;

  grid-area: header;

  @media screen and (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const MenuIcon = styled(PrimaryIconButton)`
  margin-right: 16px;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const HeaderTitle = styled.h2`
  text-transform: capitalize;
`;
