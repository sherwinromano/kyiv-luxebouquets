import { Link, Outlet } from "react-router-dom";

type NavLink = {
  link: string;
  name: string;
  borderStyle: string;
};

type Links = {
  links: NavLink[];
};

const Layout = () => {
  const navLinks = [
    {
      navLinkOne: [
        {
          link: "/",
          name: "Shop",
          borderStyle: "border-r border-black",
        },
        {
          link: "/",
          name: "Contact",
          borderStyle: "border-r border-black",
        },
      ],
      navLinkTwo: [
        {
          link: "/",
          name: "Sign In",
          borderStyle: "border-l border-black",
        },
        {
          link: "/",
          name: "Cart",
          borderStyle: "border-l border-black",
        },
      ],
    },
  ];

  const [{ navLinkOne, navLinkTwo }] = navLinks;

  return (
    <main className="flex flex-col h-auto border border-black bg-white">
      <header className="sticky top-0 z-50 w-full bg-white border-b border-black h-[4.3rem] flex">
        <nav className="flex justify-between w-full h-full">
          <NavLink links={navLinkOne} />
          <NavLink links={navLinkTwo} />
        </nav>
      </header>
      <Outlet />
    </main>
  );
};

const NavLink = ({ links }: Links) => {
  return (
    <ul className="flex w-[25%]">
      {links.map((link, index) => {
        return (
          <li
            className={`${link.borderStyle} flex justify-center items-center flex-1 text-center`}
            key={index}
          >
            <Link to={link.link} className="font-[medium] text-[1.1rem]">
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Layout;
