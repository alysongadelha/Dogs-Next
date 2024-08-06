"use client";

import React from "react";
import styles from "./account-header.module.css";
import { usePathname } from "next/navigation";
import useMedia from "@/hooks/useMedia";
import { StatisticsIcon } from "@/icons/statistics-icon";
import { ToAddIcon } from "@/icons/to-add-icon";
import { LeaveIcon } from "@/icons/leave-icon";
import { FeedIcon } from "@/icons/feed-icon";
import Link from "next/link";
import logout from "@/actions/logout";
import { useUser } from "@/context/user-context";

const getTitle = (pathname: string) => {
  switch (pathname) {
    case "/account/post":
      return "Post your Photo";
    case "/account/statistic":
      return "Statistics";
    default:
      return "My Account";
  }
};
export const AccountHeader = () => {
  const mobile = useMedia("(max-width: 40rem)");
  const { setUserState } = useUser();
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const pathname = usePathname();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  const handleLogout = async () => {
    await logout();
    setUserState(null);
  };

  return (
    <header className={styles.header}>
      <h1 className="title">{getTitle(pathname)}</h1>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <Link
          href="/account"
          className={pathname === "/account" ? "active" : ""}
        >
          <FeedIcon />
          {mobile && "My Photos"}
        </Link>
        <Link
          href="/account/statistic"
          className={pathname === "/account/statistic" ? "active" : ""}
        >
          <StatisticsIcon />
          {mobile && "Statistics"}
        </Link>
        <Link
          href="/account/post"
          className={pathname === "/account/post" ? "active" : ""}
        >
          <ToAddIcon />
          {mobile && "To add photos"}
        </Link>
        <button onClick={handleLogout}>
          <LeaveIcon />
          {mobile && "Leave"}
        </button>
      </nav>
    </header>
  );
};
