import data from "./data.json";
import * as FaqStyles from "../../styles/FrequentlyAskedQuestion.style";

export const FrequentlyAskedQuestion = () => {
  const faqList = data.map((item, index) => {
    return (
      <section key={index}>
        {" "}
        {/*RRC: Check the tag*/}
        <FaqStyles.Details>
          <FaqStyles.Summary>
            <span>{item.question}</span>
            <FaqStyles.ArrowImage
              src="/images/icon-arrow-down.svg"
              alt="Button to toggle the display of the content"
              role="presentation"
            />{" "}
            {/* Accessibility improvement */}
          </FaqStyles.Summary>
          <FaqStyles.Paragraph>{item.answer}</FaqStyles.Paragraph>
        </FaqStyles.Details>
        <FaqStyles.Divider />
      </section>
    );
  });
  return (
    <>
      <FaqStyles.MainHeading>FAQ</FaqStyles.MainHeading>
      {faqList}
    </>
  );
};
