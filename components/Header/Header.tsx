import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src="/logo-white.png" alt="Logo" className="header__logo" />
      </div>
      <div className="header__text-box">
        {/* h1 is the most important element for SEO on a given page, thus we dont want to have only the "outdoors" text in it and so we can use span */}
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>
        <a href="#section-tours" className="btn btn--white btn--animated">
          Discover our tours
        </a>
      </div>
    </header>
  );
}

export default Header;
