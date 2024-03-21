import { FrequentlyAskedQuestion } from "../FrequentlyAskedQuestion";
import { DesktopWidth } from "../../constants/Breakpoints";
import * as PictureStyles from "../../styles/Card.style";

export const Card = () => {
  return (
    <>
      <picture>
        <source
          srcSet="/images/illustration-box-desktop.svg"
          media={`(min-width:${DesktopWidth})`}
          width="0"
          height="0"
        />
        <PictureStyles.BoxImage
          src=""
          alt=""
          role="presentation"
          width="191"
          height="184"
        />
        {/* So that it does not appear in mobile version */}
      </picture>
      <main>
        <picture>
          <source
            srcSet="/images/bg-pattern-desktop.svg"
            media={`(min-width:${DesktopWidth})`}
            width="240"
            height="104"
          />
          <PictureStyles.BackgroundImage
            src="/images/bg-pattern-mobile.svg"
            alt=""
            role="presentation"
            width="966"
            height="945"
          />
        </picture>
        <picture>
          <source
            srcSet="/images/illustration-woman-online-desktop.svg"
            media={`(min-width:${DesktopWidth})`}
            // fetchpriority="high"
          />
          <PictureStyles.MainImage
            src="/images/illustration-woman-online-mobile.svg"
            alt=""
            role="presentation"
            width="472"
            height="359"
            // fetchpriority="high"
          />
        </picture>
        <FrequentlyAskedQuestion />
      </main>
    </>
  );
};
