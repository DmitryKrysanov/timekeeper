import styled from 'styled-components';
import PrimaryIconButton from '../../UI/IconButton';

export const Container = styled.header`
  height: 72px;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 168px 36px;
  column-gap: 24px;
  align-content: center;
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

export const Avatar = styled.img`
  width: 36px;
  height: 36px;
  display: block;
  border-radius: 50%;
`;
