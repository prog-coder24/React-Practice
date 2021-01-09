import React from "react";

const Header = ({ name }) => {
  return (
    <div>
      <h1>{name} Cars</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        similique earum ipsum, quis libero possimus, porro amet quae soluta eius
        dicta exercitationem aspernatur ipsam, cumque omnis. Repudiandae beatae
        blanditiis quod!
      </p>
      <button type="submit">View cars</button>
    </div>
  );
};

export default Header;
