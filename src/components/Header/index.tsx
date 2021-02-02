import React from 'react';
import styled from 'styled-components/macro';
import Icon from '../UI/Icon';
import PrimaryIconButton from '../UI/IconButton';
import PrimaryButton from '../UI/PrimaryButton';
import PrimaryTextField from '../UI/PrimaryTextField';

interface IHeader {
  title: string;
  search: boolean;
  setSearch: (search: string) => void;
  createProject: boolean;
  openAsideHandler?: () => void;
  openCreateProjectHandler?: () => void;
}

export default function Header({
  title,
  search,
  setSearch,
  createProject,
  openAsideHandler,
  openCreateProjectHandler,
}: IHeader) {
  return (
    <HeaderContainer>
      <div className="navigation">
        <div className="menu">
          <PrimaryIconButton
            isLoad={false}
            color="primary"
            variant="contained"
            onClick={openAsideHandler}
          >
            <Icon
              path="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6ZM2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12ZM3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H3Z"
              color="#666"
            />
          </PrimaryIconButton>
        </div>
        <h2 className="title">{title}</h2>
      </div>
      <div className="actions">
        {search ? (
          <div className="search">
            <PrimaryTextField
              variant="standard"
              label="Search"
              name="search"
              type="text"
              onChange={(event) => setSearch(event.currentTarget.value)}
            />
          </div>
        ) : null}
        {createProject ? (
          <div className="create-project">
            <PrimaryButton
              isLoad={false}
              variant="contained"
              color="primary"
              type="button"
              onClick={openCreateProjectHandler}
            >
              Create Project
            </PrimaryButton>
          </div>
        ) : null}
        <div className="avatar">
          <img src="http://placehold.it/36x36" alt="avatar" />
        </div>
      </div>
    </HeaderContainer>
  );
}

// STYLES

const HeaderContainer = styled.header`
  height: 72px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  grid-area: header;

  .navigation {
    display: flex;
    align-items: center;

    .menu {
      display: none;

      @media screen and (max-width: 768px) {
        margin-right: 16px;
        display: block;
      }
    }

    .title {
      text-transform: capitalize;
    }
  }

  .actions {
    display: flex;
    align-items: center;

    .search {
      margin-right: 24px;
    }

    .create-project {
      margin-right: 24px;
    }

    .avatar {
      width: 36px;
      height: 36px;

      border-radius: 50%;

      overflow: hidden;
    }
  }
`;
