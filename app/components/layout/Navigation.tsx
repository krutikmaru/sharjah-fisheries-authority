"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import Image from "next/image";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Goals",
    "Resources",
    "Services",
    "License and Registration",
    "About",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="dark:bg-neutral-900">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="#">
            <Image
              src="/images/logo.png"
              width={40}
              height={40}
              alt="Sharjah"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" className="dark:text-neutral-400">
            Goals
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            color="foreground"
            aria-current="page"
            className="dark:text-neutral-400"
          >
            Partnerships
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              //   color={
              //     index === 2
              //       ? "primary"
              //       : index === menuItems.length - 1
              //       ? "danger"
              //       : "foreground"
              //   }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
