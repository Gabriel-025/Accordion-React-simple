import React, { useState } from "react";
import "../../index.css"
import Closed from "../Icons/cloesed";
import OpenIt from "../Icons/open";

export const Accordion = ({ items }) => {

  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  const renderedItems = items.map((item, index) => {
    const active =
      index === activeIndex
        ? "active"
        : "hide";
        return (
          <React.Fragment key={item.title}>
            <div className="title" onClick={() => onTitleClick(index)}>
              <strong>{item.title}</strong>
              <div className="dropdown">
                {active === "active" ? <Closed size={24} /> : <OpenIt size={24} /> }
              </div>
            </div>
            <div className={`${active}`}>
              <p dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          </React.Fragment>
        );
      });
      return (
        <div className="accordion-style">
          <div>{renderedItems}</div>
        </div>
      );
    };
