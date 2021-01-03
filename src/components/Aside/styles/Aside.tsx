import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import Icon from '../../UI/Icon';

export const Container = styled.aside`
  width: 202px;
  height: 100%;

  padding-top: 24px;

  background-color: #ededed;

  grid-area: aside;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 10;

  /* @media screen and (max-width: 768px) {
    display: none;
  } */
`;

export const Logo = styled.div`
  font-size: 0.875rem;
  font-weight: 500;

  display: flex;
  align-items: center;

  margin: 0 0 24px 8px;

  img {
    width: 32px;
    height: 32px;
  }
`;

export const List = styled.ul`
  width: 100%;

  padding: 8px;
`;

export const ListItem = styled.li<{active: boolean}>`
  padding: 8px;
  margin-bottom: 8px;

  background-color: ${({active}) => (active ? '#E6F7EA' : 'transparent')};
  border-radius: 4px;

  display: flex;
  align-items: center;
`;

export const ItemIcon = styled(Icon)``;

export const ItemLink = styled(LinkR)`
  width: 100%;
  height: 100%;

  margin-left: 16px;

  color: #1f1f1f;
  font-weight: 400;

  cursor: pointer;

  display: block;
`;
