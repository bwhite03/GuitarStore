import React from "react";
import "./repairs.styles.scss";

const Repairs = () => {
  return (
    <div className="repairs">
      <h1>Repair Services We Provide</h1>
      <p>
        Contact your local Guitar World store for pricing and more information
        about these repair and maintenance services.
      </p>
      <div className="repair-types">
        <div className="maintenance">
          <img
            src="https://i.ibb.co/r4ydMqr/stringed.png"
            alt="guitar repair"
          />
          <h2>Stringed Instrument Maintenance</h2>
          <ul>
            <li>Restrings</li>
            <li>Full 22-point setups</li>
            <li>Intonation</li>
            <li>Action and truss rod adjustment</li>
          </ul>
        </div>
        <div className="fret-repair">
          <img src="https://i.ibb.co/mN3966T/fret.png" alt="guitar repair" />
          <h2>Fret Repair</h2>
          <ul>
            <li>Refret</li>
            <li>Fret level</li>
            <li>Crown</li>
            <li>Polish</li>
          </ul>
        </div>
        <div className="upgrades">
          <img
            src="https://i.ibb.co/ZYdVF23/upgrades.png"
            alt="guitar repair"
          />
          <h2>Electronic Upgrades And Customizations</h2>
          <ul>
            <li>Electronic modifications on all stringed instruments</li>
            <li>Pickup installation</li>
            <li>Wiring customization</li>
            <li>Personalized upgrades and modifications</li>
          </ul>
        </div>
        <div className="hardware">
          <img
            src="https://i.ibb.co/ZGXbx2R/hardware.png"
            alt="guitar repair"
          />
          <h2>Hardware</h2>
          <ul>
            <li>Hardware customization</li>
            <li>Cosmetic enhancements</li>
          </ul>
        </div>
        <div className="graphite">
          <img
            src="https://i.ibb.co/3vKWjFt/graphite.png"
            alt="guitar repair"
          />
          <h2>Bone And Graphite</h2>
          <ul>
            <li>Nut replacement</li>
            <li>Saddle replacement</li>
            <li>Fabrication from blank materials</li>
          </ul>
        </div>
        <div className="structural">
          <img
            src="https://i.ibb.co/YbMkTjC/structural.png"
            alt="guitar repair"
          />
          <h2>Structural Repair</h2>
          <ul>
            <li>Headstocks</li>
            <li>Crack repair</li>
            <li>Brace repair</li>
            <li>Bridge pull and bridge replacements</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Repairs;
