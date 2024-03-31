import { logoHollaPng } from "../../../image";
import BrandLogo from "../../elements/brandLogo";
import Button from "../../elements/button/Button";

const Header = () => {
  const navItem = [
    { label: "Home", href: "hero" },
    { label: "About", href: "about" },
    { label: "Products", href: "product" },
    { label: "Contact", href: "contact" },
  ];
  return (
    <header className="bg-transparent top-0 left-0 w-full absolute">
      <nav className="container mx-auto px-8 md:px-6 max-w-full flex justify-between items-center fixed z-[999] py-2 navbar-fixed">
        <BrandLogo image={logoHollaPng} label={"Holaa.Indonesia"} />

        <div className="">
          <ul className="flex items-center gap-[4vw]">
            {navItem?.map((item, index) => (
              <li key={index}>
                <a
                  className={"text-[16px] hover:text-red-500 "}
                  href={`#${item.href}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <Button
            className={
              "w-[133px] h-10 bg-transparent text-[16px] text-[#1f1235] font-normal"
            }
            label={"Sign in"}
          />
          <Button
            className={
              "w-[133px] h-10 bg-[#ff6e6c] text-[#fff8ea] rounded-md text-[16px] font-bold"
            }
            label={"Sign up"}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
