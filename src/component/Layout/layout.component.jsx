import React from "react";
import { Outlet } from 'react-router-dom'

import './layout.style.scss'
import LeftSidebar from "../left-sidebar/left-sidebar.component";

export const Layout = () => (
  <section className="App">
    <LeftSidebar/>
    <div className="page">
      <span className="tags top-tags">&lt;body&gt;</span>

      <Outlet />
      <span className="tags bottom-tags">
        &lt;/body&gt;
        <br />
        <span className="bottom-tag-html">&lt;/html&gt;</span>
      </span>
    </div>
  </section>
)