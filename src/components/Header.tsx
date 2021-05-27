import React from "react";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <nav className="nav-wrapper light-blue darken-3">
      <a href="#!" className="brand-logo center">
        {title}
      </a>
    </nav>
  );
};

export default Header;
