// "use client";
// import React from "react";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   NavbarMenuToggle,
//   NavbarMenu,
//   NavbarMenuItem,
//   Link,
// } from "@nextui-org/react";
// import Image from "next/image";

// export default function Navigation() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const menuItems = [
//     { title: "Goals", href: "/goals" },
//     { title: "Partnerships", href: "/partnerships" },
//     { title: "About", href: "/about" },
//   ];

//   return (
//     <div className="sticky top-0 z-50">
//       <Navbar
//         position="sticky"
//         onMenuOpenChange={setIsMenuOpen}
//         className="dark:bg-AEBlack-950 top-0"
//       >
//         <NavbarContent>
//           <NavbarMenuToggle
//             aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//             className="sm:hidden"
//           />
//           <NavbarBrand>
// <Link href="/">
//   <Image
//     src="/images/logo.png"
//     width={40}
//     height={40}
//     alt="Sharjah"
//   />
// </Link>
//           </NavbarBrand>
//         </NavbarContent>

//         <NavbarContent className="hidden sm:flex gap-4" justify="center">
//           {menuItems.map((item, index) => (
//             <NavbarItem key={`${item}-${index}`}>
//               <Link
//                 color="foreground"
//                 href={item.href}
//                 className="dark:text-neutral-400"
//               >
//                 {item.title}
//               </Link>
//             </NavbarItem>
//           ))}
//         </NavbarContent>

//         <NavbarMenu className="dark:bg-black">
//           {menuItems.map((item, index) => (
//             <NavbarMenuItem
//               key={`${item}-${index}`}
//               onClick={() => setIsMenuOpen(false)}
//             >
//               <Link
//                 className="w-full text-AEBlack-950 dark:text-AEBlack-50"
//                 href={item.href}
//                 size="lg"
//               >
//                 {item.title}
//               </Link>
//             </NavbarMenuItem>
//           ))}
//         </NavbarMenu>
//       </Navbar>
//     </div>
//   );
// }

"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "About",
      link: "/about",
      // icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Goals",
      link: "/goals",
      // icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Partnerships",
      link: "/partnerships",
      // icon: (
      //   <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      // ),
    },
  ];
  return <FloatingNav navItems={navItems} />;
}
