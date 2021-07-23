import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1> GE Portal image Example</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://image.shutterstock.com/image-photo/automation-software-technology-process-system-260nw-1133982038.jpg"
              text="Automation Software Technology Process System Business concept."
              label="Automation"
              path="/services"
            />
            <CardItem
              src="https://image.shutterstock.com/image-photo/manager-engineer-check-control-automation-600w-1119927341.jpg"
              text="Manager engineer check and control automation robot arms machine in intelligent factory industrial on real time monitoring system software. Welding robotics and digital manufacturing operation."
              label="Automation"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://image.shutterstock.com/image-vector/iot-automation-software-concept-innovation-600w-1559779550.jpg"
              text="IOT and Automation Software concept as an innovation, improving productivity in technology and business processes. Automation icon in robotic hand. Vector illustration"
              label="Automation"
              path="/services"
            />
            <CardItem
              src="https://image.shutterstock.com/image-photo/welding-arm-on-automobile-production-600w-732811756.jpg"
              text="The welding arm on the automobile production line is being welded"
              label="Automation"
              path="/products"
            />
            <CardItem
              src="https://image.shutterstock.com/image-photo/hand-turning-knob-over-grey-600w-773444554.jpg"
              text="
              Hand turning a knob over grey background and selecting the automatic mode. Manufacturing process automation, automatic testing concept. Composite image between a hand photography and a 3D background"
              label="Automation"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
