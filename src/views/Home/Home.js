import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <p>
        Come, browse our <NavLink to="/books">catalog</NavLink>.
      </p>
    </div>
  );
}
