import React from 'react';
import {IMenuListItem} from '../../layouts/MainLayout';
import {
  Container,
  ItemIcon,
  ItemLink,
  List,
  ListItem,
  Logo,
} from './styles/Aside';
import ic_logo from '../../assets/icons/ic_logo.svg';

interface IAside {
  activePage: any;
  menu: IMenuListItem[];
  header: 'logo' | 'back';
  open?: boolean;
}

export default function Aside({activePage, menu, header, open}: IAside) {
  return (
    <Container>
      {header === 'logo' ? (
        <Logo>
          <img src={ic_logo} alt="timekeeper" />
          Timekeeper
        </Logo>
      ) : header === 'back' ? (
        <h4>Back</h4>
      ) : null}

      <nav>
        <List>
          {menu.map(({label, iconPath, path}) => {
            const active =
              label.toLocaleLowerCase() === activePage ? true : false;
            return (
              <ListItem active={active} key={label}>
                <ItemIcon path={iconPath} color={active ? '#000' : '#666'} />
                <ItemLink to={path}>{label}</ItemLink>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </Container>
  );
}
