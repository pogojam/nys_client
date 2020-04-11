import styled from "styled-components";
import Theme from "../theme";
import { withProps } from "../util";
import { Heading } from "../components";
import dumpStyles from "../components/style_templates";

const styles = Theme.cards;

const Card = ({ background, title, caption, img: Img, ...props }) => (
  <Styled_Card background={background} className="Card" {...props}>
    {Img && <Img className="Card_Img" />}
    <div className="Heading_Caption_Container">
      {title && (
        <Heading className="Heading" type="Big">
          {title}
        </Heading>
      )}
      {caption && <p className="Card_Caption">{caption}</p>}
    </div>
  </Styled_Card>
);

const Styled_Card = styled.div`
  align-items: center;
  grid-template-columns: 1fr 2fr;
  background: url(${({ background }) => background});
  .Card {
  }

  svg {
    min-height: 15rem;
    height: 40vh;
    height: 100%;
  }
  .Card_Img {
    height: 100%;
    justify-self: center;
  }
  text-align: center;
  display: grid;

  .Heading_Caption_Container {
  }

  ${dumpStyles(styles.cards)}
`;

export default Card;
