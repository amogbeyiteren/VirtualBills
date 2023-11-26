"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { List } from "react-bootstrap-icons";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const nav = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "About",
      path: "/about",
    },
    {
      text: "Services",
      path: "/services",
    },

    {
      text: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      <header className="h-min w-screen shadow-sm flex flex-row justify-start items-start bg-white">
        <div className="flex flex-row items-start h-[80px] justify-start gap-80 md:gap-40 sm:justify-around sm:gap-0 w-screen pl-24 md:pl-12 sm:pl-6">
          <Link href='/' className="w-[80px] h-[80px]">
            <Image
              src="/logo.png"
              alt=""
              width={80}
              height={80}
              className="w-[80px] h-[80px]"
            />
          </Link>

          <div className="flex h-full items-center justify-around">
            <ul className="flex w-full justify-center gap-8 sm:hidden">
              {nav.map((list, index) => (
                <li
                  key={index}
                  className="hover:scale-105  text-black font-semibold hover:text-[#800F2F]"
                >
                  <Link href={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
            <div className="hidden sm:block">
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <List size={40} color="#590D22"/>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}><Link href='/home'>Home</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link href='/about'>About</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link href='/services'>Services</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link href='/contact'>Contact</Link></MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
