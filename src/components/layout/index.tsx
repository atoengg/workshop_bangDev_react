import { ReactNode } from "react";
import Header from "../fragments/header";
import Footer from "../fragments/footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="">
        <Header />
        <main className="">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
