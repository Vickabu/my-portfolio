import { Header } from "./Header";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background">
      <Header />
      <main>{children}</main>
    </div>
  );
};