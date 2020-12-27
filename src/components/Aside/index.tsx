import React from 'react';
import {Link} from 'react-router-dom';

export default function Aside() {
  return (
    <aside>
      Aside
      <Link to="/main/projects">Projects</Link>
      <Link to="/main/statistics">Statistics</Link>
      <Link to="/main/settings">Settings</Link>
    </aside>
  );
}
