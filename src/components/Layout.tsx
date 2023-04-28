import Header from "./Header";
import Footer from "./Footer";
interface ILayoutProps {
  children: any;
}

export default function Layout({ children }: ILayoutProps): JSX.Element {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

// export default Layout;
