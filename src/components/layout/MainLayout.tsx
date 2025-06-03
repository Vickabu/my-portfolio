import { Header } from "./Header";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body className="bg-background">
      <Header />
      <main>{children}</main>
    </body>
  );
};