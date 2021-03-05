import "../../styles/tickets.css";
import React from "react";

export const Segment = ({ segment }) => {
  return (
    <div className="content">
      <div className="route">
        <div className="routeBox">
          <div className="content-title">
            <div>{`${segment.origin} - ${segment.destination}`}</div>
          </div>
          <Info segment={segment} />
        </div>
      </div>
      <div className="time">
        <div className="timeBox">
          <div className="content-title">
            <div>в пути</div>
          </div>
          <div className="info">
            {`${(segment.duration / 60) | 0}ч ${segment.duration % 60}мин`}
          </div>
        </div>
      </div>
      <Stops segment={segment} />
    </div>
  );
};

const Info = ({ segment }) => {
  return (
    <div className="info">
      {new Date(segment.date).getHours() +
        ":" +
        new Date(segment.date).getMinutes() +
        " - " +
        new Date(
          new Date(segment.date).setHours(
            new Date(segment.date).getHours() +
              Math.floor(segment.duration / 60)
          )
        ).getHours() +
        ":" +
        new Date(
          new Date(segment.date).setMinutes(
            new Date(segment.date).getMinutes() + segment.duration
          )
        ).getMinutes()}
    </div>
  );
};

const Stops = ({ segment }) => {
  return (
    <div className="stops">
      <div className="stopsBox">
        {segment.stops.length === 0 ? (
          <div>
            <div className="content-title">
              <div>нет пересадок</div>
            </div>
            <div className="info">-</div>
          </div>
        ) : segment.stops.length === 1 ? (
          <div className="content-title">
            <div>{`${segment.stops.length} пересадка`}</div>
          </div>
        ) : (
          <div className="content-title">
            <div>{`${segment.stops.length} пересадки`}</div>
          </div>
        )}
        <div className="info">{segment.stops.join(", ")}</div>
      </div>
    </div>
  );
};