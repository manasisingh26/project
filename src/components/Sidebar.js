import React from "react";
import {
  BsSearch,
  BsGrid1X2Fill,
  BsFillBagCheckFill,
  BsFillGearFill,
} from "react-icons/bs";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { BiSolidVideos, BiSolidContact, BiSolidSend } from "react-icons/bi";
import { FaHandsHelping, FaFileInvoiceDollar } from "react-icons/fa";
import {Link} from "react-router-dom"

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <p>Search</p>
          <BsSearch className="icon_header" /> 
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link href="">
            <BsGrid1X2Fill className="icon" />
            <p>Dashboard</p>
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link href="">
            <HiChatBubbleLeftRight className="icon" />
            <p>Discuss</p>
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link href="">
            <BiSolidVideos className="icon" />
            <p>Subscription</p>
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link href="">
            <BiSolidContact className="icon" />
            <p>Contact</p>
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link href="">
            <FaHandsHelping className="icon" />
            <p>CRM</p>
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link href="">
            <BsFillBagCheckFill className="icon" />
            <p>Sales</p>
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link href="">
            <FaFileInvoiceDollar className="icon" />
            <p>Invoice</p>
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link href="">
            <BiSolidSend className="icon" />
            <p>Email marketing</p>
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link href="">
            <BsFillGearFill className="icon" />
            <p>Setting</p>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
