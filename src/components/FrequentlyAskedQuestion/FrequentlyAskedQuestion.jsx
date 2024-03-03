import data from "./data.json";
import * as FaqStyles from "../../styles/FrequentlyAskedQuestion.style";

export const FrequentlyAskedQuestion = () => {
  const faqList = data.map((item, index) => {
    return (
      <section key={index}>
        <FaqStyles.Details>
          <FaqStyles.Summary>{item.question}</FaqStyles.Summary>
          <FaqStyles.Paragraph>{item.answer}</FaqStyles.Paragraph>
        </FaqStyles.Details>
        <FaqStyles.Divider />
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
