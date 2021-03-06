import Link from "next/link";
import classes from "./main-header.module.css";

import { useContext } from "react";

import { ShoppingCartIcon } from "@heroicons/react/solid";
import ShoppingCartContext from "../../store/shopping-cart-context";
import { useRouter } from "next/router";
import Menu from "./menu";

export const menuItems = [
  { url: "/", title: "Trang chủ" },
  { url: "/tours", title: "Các Tour" },
  { url: "/destination", title: "Địa điểm giải trí" },
  { url: "/shopping", title: "Cửa hàng" },
  { url: "/contact-us", title: "Liên hệ" },
];

function MainHeader() {
  const ShoppingCartCtx = useContext(ShoppingCartContext);

  const router = useRouter();
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Bunichi</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          {menuItems.map((menu) => (
            <Menu key={menu.url} menu={menu} currentPath={router.pathname} />
          ))}
          <li className={classes["shopping-cart-icon"]}>
            <span>{ShoppingCartCtx.cart.length}</span>
            <Link href="/cart">
              <div>
                <ShoppingCartIcon className="w-6 h-6 inline-block" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
