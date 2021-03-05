import "../../styles/tickets.css";
import React, { useState } from "react";
import { NoFilter } from "./NoFilter.js";
import { TicketHeader } from "./TicketHeader.js";
import { Segment } from "./Segment.js";
import { Error } from "../Error.js";

export const Tickets = ({ filtered }) => {
  const [count, setCount] = useState({
    prev: 0,
    next: 5
  });

  return (
    <div>
      {filtered.length !== 0 ? (
        <div>
          {filtered.slice(count.prev, count.next).map((el, index) => {
            return (
              <div className="ticketBox">
                <div className="ticket">
                  <TicketHeader el={el} index={index} />
                  <div className="ticketInfo">
                    {el.segments.map((segment) => {
                      return <Segment segment={segment} />;
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <NoFilter />
      )}
        {error ? <Error /> : null}
    </div>
  );
};
