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
            <NavigationMenuItem>
              <Link href='/'>SuperShare</Link>
            </NavigationMenuItem>
            <div className="gap-10"></div>
            <Link href="/upload" legacyBehavior passHref>
    <NavigationMenuLink >
      Form
    </NavigationMenuLink>
  </Link>

        </NavigationMenuList>
      </NavigationMenu>
    )
  }
  
  export default Navbar