import data from "./data.json";

export const FrequentlyAskedQuestion = () => {
  const faqList = data.map((item, index) => {
    return (
      <section key={index}>
        <details>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
        <hr />
      </section>
    );
  });
  return (
    <>
      <h1>FAQ</h1>
      {faqList}
    </>
  );
};
