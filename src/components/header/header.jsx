//Biome-ignore
import { Container, Drawer } from '@mui/material';
import React from 'react';
import './index.css';

export const Header = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="header">
      <Container maxWidth="lg" className="header">
        <h3 className="title">技術系合同新歓2025 特設サイト</h3>
        <ul className="nav">
          <li>
            <a href="#about">概要</a>
          </li>
          <li>
            <a href="#contents">開催内容</a>
          </li>
          <li>
            <a href="#circle">参加団体</a>
          </li>
          <li>
            <a href="#past">過去の開催</a>
          </li>
          <li>
            <a href="#contact">お問い合わせ</a>
          </li>
        </ul>
        <button
          type="button"
          className="menuButton"
          id="menuButton"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
          tabIndex="0"
          aria-label="メニュー"
        >
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </button>
      </Container>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <span
          className="square_btn"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
          tabIndex="0"
          role="button"
        />
        <div className="drawerContent">
          <ul className="drawerNav">
            <li>
              <a href="#about" onClick={toggleDrawer}>
                概要
              </a>
            </li>
            <li>
              <a href="#contents" onClick={toggleDrawer}>
                開催内容
              </a>
            </li>
            <li>
              <a href="#circle" onClick={toggleDrawer}>
                参加団体
              </a>
            </li>
            <li>
              <a href="#past" onClick={toggleDrawer}>
                過去の開催
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleDrawer}>
                お問い合わせ
              </a>
            </li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
};
