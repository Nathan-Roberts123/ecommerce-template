"use client";

import { useState } from "react";
import Drawer from "~/components/mobile/drawer";
import Footer from "~/components/partials/footer";
import Header from "~/components/partials/header";

export default function MainLayout({
  children,
  childrenClasses,
}: {
  children: React.ReactNode;
  childrenClasses?: string;
}) {
  const [drawer, setDrawer] = useState(false);
  return (
    <>
      <Drawer open={drawer} action={() => setDrawer(!drawer)} />
      <div className="w-full overflow-x-hidden">
        <Header drawerAction={() => setDrawer(!drawer)} />
        <div className={`w-full  ${childrenClasses || "pb-[60px] pt-[30px]"}`}>
          {children && children}
        </div>
        <Footer />
      </div>
    </>
  );
}
