import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

export default function Projects() {
  const id = 123;
  return (
    <div>
      Projects
      <Link to={`${ROUTES.PROJECT}/${id}`}>Project1</Link>
    </div>
  );
}
