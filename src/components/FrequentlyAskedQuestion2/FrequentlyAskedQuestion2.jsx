import data from "./data.json";
import React from "react";

export const FrequentlyAskedQuestion2 = () => {
  return (
    <>
      <h1>faq</h1>
      {data.map((item, index) => (
        <Question key={index} item={item} />
      ))}
    </>
  );
};

export const Question = ({ item }) => {
  const [closeState, setCloseState] = React.useState(true);

  const toggle = () => {
    setCloseState((prevState) => {
      return !prevState;
    });
  };

  return (
    <section>
      <div>
        <div>
          <span>{item.question}</span>
          <img
            src="/images/icon-arrow-down.svg"
            alt="Button to toggle the display of the content"
            width="11"
            height="8"
            onClick={toggle}
          />
        </div>
        <p style={{ display: closeState ? "none" : "block" }}>{item.answer}</p>
      </div>
      <hr />
    </section>
  );
};
