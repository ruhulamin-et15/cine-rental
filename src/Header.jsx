import { useContext, useState } from "react";
import Moon from "./assets/icons/moon.svg";
import Sun from "./assets/icons/sun.svg";
import Logo from "./assets/logo.svg";
import Ring from "./assets/ring.svg";
import Shopping from "./assets/shopping-cart.svg";
import CartDetails from "./cine/CartDetails";
import { MovieContext, ThemeContext } from "./context";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const { state } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleCartShow = () => {
    setShowCart(true);
  };

  return (
    <header>
      {showCart && <CartDetails onCloseCart={() => setShowCart(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width={139} height={26} alt="Logo" />
        </a>
        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width={24} height={24} alt="Ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkMode(!darkMode)}
            >
              <img
                src={darkMode ? Sun : Moon}
                width={24}
                height={24}
                alt="Moon"
              />
            </a>
          </li>
          <li>
            <a
              onClick={handleCartShow}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              {state.cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {state.cartData.length}
                </span>
              )}
              <img src={Shopping} width={24} height={24} alt="Cart" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
