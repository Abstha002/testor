'use client';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import { SunIcon } from "@radix-ui/react-icons";
import Link from "next/link";
  const Navbar = () => {
    return (
        <NavigationMenu>
        <NavigationMenuList>

          <NavigationMenuItem>
            <SunIcon/>
            </NavigationMenuItem>
            <NavigationMenuItem>SuperShare</NavigationMenuItem>
            <div className="gap-10"></div>
            <Link href="/docs" legacyBehavior passHref>
    <NavigationMenuLink >
      Documentation
    </NavigationMenuLink>
  </Link>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )
  }
  
  export default Navbar