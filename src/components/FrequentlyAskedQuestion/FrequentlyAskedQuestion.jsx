import data from "./data.json";
import * as FaqStyles from "../../styles/FrequentlyAskedQuestion.style";

export const FrequentlyAskedQuestion = () => {
  const faqList = data.map((item, index) => {
    return (
      <FaqStyles.Section key={index}>
        <FaqStyles.Details>
          <FaqStyles.Summary>
            <span>{item.question}</span>
            <FaqStyles.ArrowImage
              src="/images/icon-arrow-down.svg"
              role="presentation"
              alt=""
              width="11"
              height="8"
            />{" "}
            {/* Accessibility improvement */}
          </FaqStyles.Summary>
          <FaqStyles.Paragraph>{item.answer}</FaqStyles.Paragraph>
        </FaqStyles.Details>
        <FaqStyles.Divider />
      </FaqStyles.Section>
    );
  });
  return (
    <>
      <FaqStyles.MainHeading>faq</FaqStyles.MainHeading>
      {faqList}
    </>
  );
};
