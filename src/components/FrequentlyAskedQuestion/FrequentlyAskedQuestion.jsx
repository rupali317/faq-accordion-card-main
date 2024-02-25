import data from "./data.json";

export const FrequentlyAskedQuestion = () => {
  const faqList = data.map((item, index) => {
    return (
      <details key={index}>
        <summary>{item.question}</summary>
        <p>{item.answer}</p>
      </details>
    );
  });
  return (
    <>
      <h1>FAQ</h1>
      {faqList}
    </>
  );
};
