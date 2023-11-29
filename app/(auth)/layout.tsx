import { ReactNode } from "react";

interface PropsInterface {
  children: ReactNode;
}

const Layout = ({ children }: PropsInterface) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      {children}
    </main>
  );
};

export default Layout;
