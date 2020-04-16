import { Index_Card_Styles } from "./home/Index_Styles";
import { animated } from "react-spring";
import { Heading } from "../components";

const Card = ({ background, button, title, caption, img: Img, ...props }) => (
  <Index_Card_Styles background={background} className="Card" {...props}>
    {Img ? <Img className="Card_Img" /> : <div />}
    <div className="Card_SubContainer">
      {title && (
        <Heading className="Heading" type="Big">
          {title}
        </Heading>
      )}
      {button && button}
      {caption && <p className="Caption">{caption}</p>}
    </div>
  </Index_Card_Styles>
);

export default animated(Card);
