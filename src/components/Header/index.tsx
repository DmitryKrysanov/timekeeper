import React, {useState} from 'react';
import Icon from '../UI/Icon';
import PrimaryButton from '../UI/PrimaryButton';
import PrimaryTextField from '../UI/PrimaryTextField';
import {Avatar, Container, HeaderTitle, MenuIcon} from './styles/Header';

interface IHeader {
  title: string;
  openAsideHandler: () => void;
  openCreateProjectHandler: () => void;
}

export default function Header({
  title,
  openAsideHandler,
  openCreateProjectHandler,
}: IHeader) {
  const [subname, setSubname] = useState('');
  return (
    <Container>
      {/* <MenuIcon
        isLoad={false}
        color="primary"
        variant="contained"
        onClick={openAsideHandler}
      >
        <Icon
          path="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6ZM2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12ZM3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H3Z"
          color="#666"
        />
      </MenuIcon> */}

      <HeaderTitle>{title}</HeaderTitle>

      <PrimaryTextField
        variant="standard"
        label="Search"
        name="search"
        type="text"
        onChange={(event) => setSubname(event.currentTarget.value)}
      />

      {title === 'projects' ? (
        <PrimaryButton
          isLoad={false}
          variant="contained"
          color="primary"
          type="button"
          onClick={openCreateProjectHandler}
        >
          Create Project
        </PrimaryButton>
      ) : null}
      <Avatar src="http://placehold.it/36x36" alt="avatar" />
    </Container>
  );
}
