import React, { useState, useEffect } from 'react';
import './SideMenu.css'; // Certifique-se de ter um arquivo de estilos CSS para personalizar o menu

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeMenuOnOutsideClick = (event) => {
      if (isOpen && !event.target.closest('.side-menu')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', closeMenuOnOutsideClick);

    return () => {
      document.removeEventListener('mousedown', closeMenuOnOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className={`side-menu ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleMenu}>
        Toggle Menu
      </button>
      <nav className="menu-items">
        {/* Coloque aqui os itens do menu */}
        <a href="#">Item 1</a>
        <a href="#">Item 2</a>
        <a href="#">Item 3</a>
      </nav>
    </div>
  );
};

export default SideMenu;
