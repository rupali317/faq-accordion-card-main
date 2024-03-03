import * as FooterStyles from "../../styles/Footer.style";

export const Footer = () => {
  return (
    <FooterStyles.Small>
      Challenge by{" "}
      <FooterStyles.Link
        href="https://www.frontendmentor.io/profile/rupali317"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </FooterStyles.Link>
      . Coded by{" "}
      <FooterStyles.Link
        href="https://www.linkedin.com/in/rupali-rc/"
        target="_blank"
        rel="noreferrer"
      >
        Rupali Roy Choudhury
      </FooterStyles.Link>
      .
    </FooterStyles.Small>
  );
};
