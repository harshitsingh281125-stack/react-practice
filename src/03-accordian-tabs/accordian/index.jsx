import React from "react";
import { CgChevronDoubleRight } from "react-icons/cg";
import "./styles.css";

const Accordian = ({ items, openedAccordianId, setOpenedAccordianId }) => {
  return (
    <div className="accordian-container">
      {items.map((it, index) => (
        <div className="accordian-item">
          <div
            className="accordian-header"
            onClick={() =>
              setOpenedAccordianId((prev) =>
                prev.includes(it.id)
                  ? prev.filter((item) => item !== it.id)
                  : [...prev,it.id]
              )
            }
          >
            <i>
              <CgChevronDoubleRight />
            </i>
            <span>{it.title}</span>
          </div>
          <div
              className="accordian-content"
              style={{
                maxHeight: openedAccordianId.includes(it.id) ? "200px" : "0px",
              }}
            >
              <div className="accordian-inner">{it.content}</div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
