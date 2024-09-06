import { Link, Outlet } from "react-router-dom";
import ContactForm from "./components/Home/ContactForm";
import SocialLinks from "./components/SocialLinks";

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
          link: "/category",
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
      <footer className="border-t border-black h-[auto] flex">
        <div className="flex flex-col gap-8 border-r border-black p-[2rem] w-1/4">
          <p className="text-base font-[regular]">
            Remember to offer beautiful flowers from Kyiv LuxeBouquets
            Valentines Day, Mothers Day, Christmas... Reminds you 7 days before.
            No spam or sharing your address
          </p>
          <ContactForm
            formStyle={"flex flex-col gap-4"}
            inputStyle={
              "p-4 outline-none border border-[#d2d2d7] font-[medium] w-full"
            }
            buttonStyle={
              "bg-black uppercase text-white text-base font-[medium] p-4 w-full cursor-pointer"
            }
            inputPlaceholder={"Your email"}
            buttonValue={"Remind"}
          />
        </div>
        <div className="w-1/4 border-r border-black p-[2rem] flex flex-col gap-4">
          <h5 className="font-[medium] text-[gray] text-[1.3rem]">
            Contact Us
          </h5>
          <div>
            <h6 className="font-[regular] text-base text-[gray]">Address</h6>
            <p className="font-[medium] text-[1.1rem]">
              15/4 Khreshchatyk Street, Kyiv{" "}
            </p>
          </div>
          <div>
            <h6 className="font-[regular] text-base text-[gray]">Phone</h6>
            <p className="font-[medium] text-[1.1rem]">+380980099777</p>
          </div>
          <div>
            <h6 className="font-[regular] text-base text-[gray]">
              General Enquiry:
            </h6>
            <p className="font-[medium] text-[1.1rem]">
              Kiev.Florist.Studio@gmail.com
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-[medium] text-[gray] text-[1.3rem]">
              Follow Us
            </h5>
            <SocialLinks
              wrapperStyle={"flex justify-between items-center w-[80%]"}
            />
          </div>
        </div>
        <div className="w-1/4 border-r border-black p-[2rem] flex flex-col gap-4">
          <h5 className="font-[medium] text-[gray] text-[1.3rem]">Shop</h5>
          <ul>
            <li className="font-[medium] text-[1.1rem]">All Products</li>
            <li className="font-[medium] text-[1.1rem]">Fresh Flowers</li>
            <li className="font-[medium] text-[1.1rem]">Dried Flowers</li>
            <li className="font-[medium] text-[1.1rem]">Live Plants</li>
            <li className="font-[medium] text-[1.1rem]">Designer Vases</li>
            <li className="font-[medium] text-[1.1rem]">Aroma Candles</li>
            <li className="font-[medium] text-[1.1rem]">Freshener Diffuser</li>
          </ul>
          <h5 className="font-[medium] text-[gray] text-[1.3rem]">Service</h5>
          <ul>
            <li className="font-[medium] text-[1.1rem]">Flower Subscription</li>
            <li className="font-[medium] text-[1.1rem]">
              Wedding & Event Decor
            </li>
          </ul>
        </div>
        <div className="w-1/4 p-[2rem] flex flex-col gap-4">
          <h5 className="font-[medium] text-[gray] text-[1.3rem]">About Us</h5>
          <ul>
            <li className="font-[medium] text-[1.1rem]">Our Story</li>
            <li className="font-[medium] text-[1.1rem]">Blog</li>
          </ul>
          <ul>
            <li className="font-[medium] text-[1.1rem]">Shipping & returns</li>
            <li className="font-[medium] text-[1.1rem]">Terms & conditions</li>
            <li className="font-[medium] text-[1.1rem]">Privacy policy</li>
          </ul>
        </div>
      </footer>
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
            <Link
              to={link.link}
              className="font-[medium] text-[1.1rem]"
              preventScrollReset={true}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Layout;
