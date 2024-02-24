import data from "./data.json";

export const FrequentlyAskedQuestion = () => {
  const faqList = data.map((item, index) => {
    return (
      <details key={index}>
        <summary>{item.question}</summary>
        <span>{item.answer}</span>
      </details>
    );
  });
  return <>{faqList}</>;
};
