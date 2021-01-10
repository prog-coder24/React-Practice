import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Car from "./Car";

let carsArray = [
  {
    id: 1,
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
    image:
      "https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg",
  },
  {
    id: 2,
    color: "red",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 5,
    image:
      "https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg",
  },
  {
    id: 3,
    color: "red",
    type: "cabrio",
    registration: new Date("2017-01-03"),
    capacity: 7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnROJE33jsDvhK5Y1kIthn7v-Y4CHeaDVVQ&usqp=CAU",
  },
  {
    id: 4,
    color: "blue",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 5,
    image:
      "https://cars.usnews.com/pics/size/640x420/static/images/article/202006/128503/216702_New_Volvo_XC40_-_exterior_640x420.jpg",
  },
];

const Home = () => {
  const [cars, setCars] = useState(carsArray);

  const mapper = cars.map((c) => {
    return (
      <Car
        key={c.id}
        color={c.color}
        image={c.image}
        type={c.type}
        capacity={c.capacity}
        registration={c.registration}
      />
    );
  });
  console.log(cars.length);
  return (
    <div className="App">
      <Header name="John" />
      <a href="/about">View About Page</a>
      <div className="wrapper">
        {cars.length > 0 ? mapper : <p>No Cars Found</p>}
      </div>
      <Footer name="John's" color="Red" />
    </div>
  );
};

export default Home;
