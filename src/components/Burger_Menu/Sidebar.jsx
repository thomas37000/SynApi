/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Sidebar from 'react-sidebar';
// import PropTypes from 'prop-types';

const SidebarTool = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onSetSidebarOpen = (open) => {
    setSidebarOpen({ sidebarOpen: open });
  };
  return (
    <Sidebar
      sidebar={
        <button type="button" onClick={() => setSidebarOpen(!sidebarOpen)}>
          close
        </button>
      }
      open={sidebarOpen}
      onSetOpen={onSetSidebarOpen}
      styles={{ sidebar: { background: 'white', width: 350 } }}
    >
      <button type="button" onClick={() => onSetSidebarOpen(true)}>
        <i className="fas fa-cog" />
        paramètres
      </button>
    </Sidebar>
  );
};

// Sidebar.propTypes = {

// };

export default SidebarTool;
