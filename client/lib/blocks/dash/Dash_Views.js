import { Heading } from "../../components";
import { Calendar, Day } from "./Calendar";
import { Player_AddButton, Player_Card } from "./Player";
import {
  Dash_View_Players_Styles,
  Dash_View_Schedule_Styles,
  Dash_View_Billing_Styles,
  Dash_Container,
} from "./Dash_Styles";
import { Team_Schedule } from "./Team";
import { User_Registration_Form, User_Billing_Form } from "../../forms/forms";
import { StripeProvider, Elements, injectStripe } from "react-stripe-elements";

const billing = () => {
  const Stripe_User_Billing = injectStripe(User_Billing_Form);
  return (
    <StripeProvider apiKey={process.env.STRIPE_KEY}>
      <Dash_Container>
        <Dash_View_Billing_Styles>
          <div className="Dash_Block">
            <Elements>
              <Stripe_User_Billing />
            </Elements>
          </div>
        </Dash_View_Billing_Styles>
      </Dash_Container>
    </StripeProvider>
  );
};

// const ScheduleDay = React.cloneElement(Day, { record: false }, null);

const schedule = () => {
  return (
    <Dash_Container className="Schedule_View_Entry">
      <Dash_View_Schedule_Styles>
        <Heading
          style={{ textAlign: "right", borderBottom: "1px solid black" }}
        >
          Calendar
        </Heading>
        <Calendar Calendar_Day={(props) => <Day {...porps} />} />
      </Dash_View_Schedule_Styles>
    </Dash_Container>
  );
};

const players = ({ dispatch, store }) => {
  return (
    <Dash_Container>
      <Dash_View_Players_Styles>
        <div className="Dash_Block Player_Card_Button_Group">
          <Player_AddButton
            onClick={() =>
              dispatch({
                type: "SHOW_MODAL",
                input: User_Registration_Form,
              })
            }
          />
          <Player_Card />
          <Player_Card />
        </div>
        <Team_Schedule className="Dash_Block" />
      </Dash_View_Players_Styles>
    </Dash_Container>
  );
};

const contact = () => {
  return <Dash_Container>content</Dash_Container>;
};
const Admin_View = {
  billing,
  schedule,
  contact,
  players,
};

const User_View = {
  billing,
  schedule,
  contact,
  players,
};

const Dash_Views = {
  Admin_View,
  User_View,
};

export default Dash_Views;
