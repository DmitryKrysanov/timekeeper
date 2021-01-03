import React from 'react';
import {IMenuListItem} from '../../layouts/MainLayout';
import Aside from '../Aside';
import {Container} from './styles/MobileMenu';

interface IMobileMenu {
  isOpen: boolean;
  activePage: string;
  menu: IMenuListItem[];
  header: 'logo' | 'back';
}

export default function MobileMenu({
  isOpen,
  activePage,
  menu,
  header,
}: IMobileMenu) {
  return (
    <Container isOpen={isOpen}>
      <Aside activePage={activePage} menu={menu} header="logo" />
    </Container>
  );
}
