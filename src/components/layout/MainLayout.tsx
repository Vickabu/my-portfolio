import { Header } from "./Header";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background">
      <Header />
      <main className="p-6 max-w-4xl mx-auto pt-24">{children}</main>
    </div>
  );
};