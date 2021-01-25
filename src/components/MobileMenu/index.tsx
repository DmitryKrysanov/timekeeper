import React from 'react';
import {Container} from './styles/MobileMenu';

interface IMobileMenu {
  isOpen: boolean;
  activePage: string;
  menu: any;
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
      {/* <Aside activePage={activePage} mainMenu={menu} projectMeny header="logo" /> */}
    </Container>
  );
}
