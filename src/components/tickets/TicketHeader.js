import "../../styles/ticketHeader.css";
import React from "react";

export const TicketHeader = ({ el, index }) => {
  return (
    <div className="ticketHeader">
      <div className="price" key={index}>
        {`${el.price.toLocaleString()} P`}
      </div>
      <div className="companyLogoBox">
        <img
          src={`https://pics.avs.io/99/36/${el.carrier}.png`}
          alt="companyLogo"
          className="companyLogo"
        />
      </div>
    </div>
  );
};