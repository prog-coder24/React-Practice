import React, { useState } from "react";
import { FormControl, Button } from "react-bootstrap";

const Header = ({ name }) => {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const op = () => {
    setBrand((preBrand) => (preBrand === "Ford" ? "Tesla" : "Ford"));
  };
  const op1 = () => {
    setModel((preModel) => (preModel === "Mustang" ? "Model8" : "Mustang"));
  };

  return (
    <div>
      {/* <h1>{name} Cars</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        similique earum ipsum, quis libero possimus, porro amet quae soluta eius
        dicta exercitationem aspernatur ipsam, cumque omnis. Repudiandae beatae
        blanditiis quod!
      </p>
      <FormControl placeholder="Enter Name" />
      <Button type="submit">View cars</Button> */}
      <h1>{brand}</h1>
      <h1>{model}</h1>
      <Button onClick={op}>Change brand</Button>
      <Button onClick={op1}>Change model</Button>
    </div>
  );
};

export default Header;
