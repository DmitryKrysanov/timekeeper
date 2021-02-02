import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components/macro';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {IconBtn} from '../Button';

interface IMenu {
  children: any;
}

export function Menu({children}: IMenu) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<null | any>(null);

  const onMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleHideMenu = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleClickOutside = (event: Event) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleHideMenu, true);
    document.addEventListener('click', handleClickOutside, true);
  });

  return (
    <>
      <IconBtn onClick={onMenuClick}>
        <MoreVertIcon />
      </IconBtn>
      <MenuContainer open={isOpen} ref={menuRef}>
        {children}
      </MenuContainer>
    </>
  );
}

interface IMenuItem {
  children: any;
  onClick: () => void;
}

export function MenuItem({children, ...restProps}: IMenuItem) {
  return <MenuItemContainer {...restProps}>{children}</MenuItemContainer>;
}

// STYLES

const MenuContainer = styled.ul<{open: boolean}>`
  display: ${({open}) => (open ? 'block' : 'none')};

  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;

  position: absolute;
  top: 8px;
  right: 16px;
  z-index: 10;
`;

const MenuItemContainer = styled.li`
  padding: 16px 24px;

  &:hover {
    background-color: #e5e5e5;
  }
`;
