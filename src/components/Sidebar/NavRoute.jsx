import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function NavRoute() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <Navbar toggleMenu={setIsOpened} />
      <Sidebar show={isOpened} setIsOpened={setIsOpened} />
    </>
  );
}
