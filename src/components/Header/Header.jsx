import React from "react";
import hc from "./Header.module.css";

const Header = () => {
  return (
    <header className={hc.header}>
      <div className={hc.logo}>
        <img src="https://x-lines.ru/letters/i/cyrillicfancy/0063/ffffff/40/0/4nu7brgo1zej9wra4ntpbggo1w.png" />
        <img src="https://x-lines.ru/letters/i/cyrillicfancy/0588/fafafa/20/0/4gy7bcgoz8earegosuemzwcxrdem9wcy4nhpdd6tomem5wf64n37bxty4n9pbcqtt8emmwf74nhpdda.png" />
      </div>
    </header>
  );
};

export default Header;
