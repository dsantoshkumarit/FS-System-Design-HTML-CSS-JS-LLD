import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [accordions, setAccordions] = useState([
    {
      id: 1,
      title: "Accordion 1",
      message: "lorem ipsum dolor sit amet, consectetur adip",
      isChecked: false,
    },
    {
      id: 2,
      title: "Accordion 2",
      message: "lorem ipsum dolor sit amet, consectetur adip",
      isChecked: false,
    },
    {
      id: 3,
      title: "Accordion 3",
      message: "lorem ipsum dolor sit amet, consectetur adip",
      isChecked: false,
    },
  ]);

  const [activeAccordionId, setActiveAccordionId] = useState(0);
  const [accordionChecks, setAccordionChecks] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  const Accordion = ({
    activeAccordionId,
    id,
    title,
    message,
    setActiveAccordionId,
    setAccordionChecks,
    accordionChecks,
  }) => {
    return (
      <div>
        <div
          style={{
            width: "100%",
            color: "black",
            border: "2px solid black",
            display: "flex",
            alignItems: "center",
            just: "center",
            borderRadius: "5px",
          }}
          onClick={() =>
            setActiveAccordionId((prevId) => (prevId === id ? 0 : id))
          }
        >
          <input
            type="checkbox"
            name={id}
            defaultChecked={accordionChecks?.[id]}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => {
              setAccordionChecks((prevState) => ({
                ...prevState,
                [id]: e.target.checked,
              }));
              console.log(e.target.checked);
            }}
          />
          <h3
            style={{
              cursor: "pointer",
            }}
          >
            {" "}
            {title}
          </h3>
        </div>
        <div>
          {activeAccordionId === id && (
            <p
              style={{
                padding: "0.5rem",
                border: "1px solid black",
                marginTop: 0,
              }}
            >
              {" "}
              {message}{" "}
            </p>
          )}
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (Object.keys(accordionChecks).length === accordions.length) {
      // let disable = true;
      // for (let value of Object.values(accordionChecks)) {
      //   disable = disable && value;
      // }
      // console.log("disable", disable);
      // setIsDisabled(!disable);
      setIsDisabled(Object.values(accordionChecks).some((obj) => !obj));
    }
  }, [accordionChecks]);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "100%",
      }}
    >
      {accordions.map((elem) => (
        <Accordion
          key={elem.id}
          id={elem.id}
          title={elem.title}
          message={elem.message}
          accordionChecks={accordionChecks}
          activeAccordionId={activeAccordionId}
          setActiveAccordionId={setActiveAccordionId}
          setAccordionChecks={setAccordionChecks}
        />
      ))}
      <button
        style={{
          padding: "1rem",
          width: "100px",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: "700",
          background: "lightgreen",
          borderRadius: "10px",
        }}
        disabled={isDisabled}
      >
        Proceed
      </button>
    </div>
  );
}
