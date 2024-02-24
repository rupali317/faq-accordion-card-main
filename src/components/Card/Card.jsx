import { FrequentlyAskedQuestion } from "../FrequentlyAskedQuestion";
import { DesktopWidth } from "../../constants/Breakpoints";

export const Card = () => {
  return (
    <>
      <picture>
        <source
          srcset="/images/bg-pattern-desktop.svg"
          media={`(min-width:${DesktopWidth})`}
        />
        <img src="/images/bg-pattern-mobile.svg" alt="" role="presentation" />
      </picture>
      <picture>
        <source
          srcset="/images/illustration-box-desktop.svg"
          media={`(min-width:${DesktopWidth})`}
        />
        <img src="" alt="" />
        {/* So that it does not appear in mobile version */}
      </picture>
      <picture>
        <source
          srcset="/images/illustration-woman-online-desktop.svg"
          media={`(min-width:${DesktopWidth})`}
        />
        <img
          src="/images/illustration-woman-online-mobile.svg"
          alt=""
          role="presentation"
        />
      </picture>
      <FrequentlyAskedQuestion />
    </>
  );
};
