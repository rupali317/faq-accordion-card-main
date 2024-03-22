import data from "./data.json";
import React from 'react';

export const FrequentlyAskedQuestion2 = () => {
  const [closeState, setCloseState] = React.useState(true);

  const toggle = () => {
    setCloseState(prevState => {
      console.log("curr state"+!prevState);
      return !prevState;
    });
  }

  const faqList = data.map((item, index) => {
    return (
      <section key={index}>
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
          <p style={closeState?{display:'none'}:{display:'block'}}>{item.answer}</p>
        </div>
        <hr />
      </section>
    );
  });

  return (
    <>
      <h1>faq</h1>
      {faqList}
    </>
  );
};
