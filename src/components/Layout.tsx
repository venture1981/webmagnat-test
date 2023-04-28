import Header from "./Header";
import Footer from "./Footer";
interface ILayoutProps {
  children: any;
}

export default function Layout({ children }: ILayoutProps): JSX.Element {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 md:px-10 w-full min-h-100vh flex flex-col mt-[120px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}

// export default Layout;
