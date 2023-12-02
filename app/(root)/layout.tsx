import { ReactNode } from "react";

// @Dev
// #Dev --> ##Moudle
import { NavbarModule } from "@/lib/modules/navbar";
import { LeftSidebarModule } from "@/lib/modules/left-sidebar";
import { RightSidebarModule } from "@/lib/modules/right-sidebar";

interface PropsInterface {
  children: ReactNode;
}

const Layout = ({ children }: PropsInterface) => {
  return (
    <main className="background-light850_dark100">
      <NavbarModule />
      <div className="flex">
        <LeftSidebarModule />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSidebarModule />
      </div>
      Toaster
    </main>
  );
};

export default Layout;
