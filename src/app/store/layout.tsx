import "~/styles/globals.css";

import MainLayout from "~/components/main-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
