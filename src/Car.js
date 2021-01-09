import React from "react";
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Car = (props) => {
  return (
    <div className={`car ${props.color}`}>
      <img src={props.image} alt="..." className="image" />
      <p>Color : {props.color}</p>
      <p>Type : {props.type}</p>
      <p>Capacity : {props.capacity}</p>
      <p>
        Registration : On {props.registration.getDay()}{" "}
        {monthNames[props.registration.getMonth()]}{" "}
        {props.registration.getFullYear()}
      </p>
    </div>
  );
};

// const Car = ({ color, image, type, capacity, registration }) => {
//     return (
//       <div>
//         <div className={`car ${color}`}>
//           <img src={image} alt="..." className="image" />
//           <p>Color : {color}</p>
//           <p>Type : {type}</p>
//           <p>Capacity : {capacity}</p>
//           <p>
//             Registration : On {registration.getDay()}{" "}
//             {monthNames[registration.getMonth()]} {registration.getFullYear()}
//           </p>
//         </div>
//       </div>
//     );
//   };

// const Car = (props) => {
//     let { color, image, type, capacity, registration } = props;
//     return (
//       <div>
//         <div className={`car ${color}`}>
//           <img src={image} alt="..." className="image" />
//           <p>Color : {color}</p>
//           <p>Type : {type}</p>
//           <p>Capacity : {capacity}</p>
//           <p>
//             Registration : On {registration.getDay()}{" "}
//             {monthNames[registration.getMonth()]} {registration.getFullYear()}
//           </p>
//         </div>
//       </div>
//     );
//   };

export default Car;
