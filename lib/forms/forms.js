import { useForm } from "react-hook-form";
import { Button } from "../components";
import {
  User_Registration_Styles,
  User_Billing_Styles,
  Login_Styles,
} from "./Form_Styles";
import { FiUser, FiLock, FiFacebook, Fig } from "react-icons/fi";
import { IoLogoGoogle } from "react-icons/io";
import { CardElement } from "react-stripe-elements";

const handleLogin = (data) => {
  console.log(data);
};

export const Login_Form = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  return (
    <Login_Styles
      style={{ alignItems: "center", justifyContent: "center" }}
      onSubmit={handleSubmit(handleLogin)}
    >
      <div className="Form_SubContainer">
        <div className="Form_Block">
          <FiUser className="Form_Icon" />
          <input
            type="text"
            name="UserName"
            className="Login_Username"
            ref={register({ required: true })}
            style={{ width: "100%" }}
          />
        </div>
        <div className="Form_Block">
          <FiLock className="Form_Icon" />
          <input
            type="password"
            name="Password"
            className="Login_Password"
            ref={register({ required: true })}
            style={{ width: "100%" }}
          />
        </div>
        <div
          className="Form_Block"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Button className="Form_Submit" type="Small">
            Submit
          </Button>
          <a href="http://localhost:4000/auth/facebook">
            <FiFacebook style={{ marginLeft: "auto" }} />
          </a>
          <IoLogoGoogle />
        </div>
      </div>
    </Login_Styles>
  );
};

const FirstLastName = () => (
  <div className="Form_Block">
    <label htmlFor="firstName">FirstName</label>
    <input name="firstName" />
    <label htmlFor="LastName">LastName</label>
    <input name="lastName" />
  </div>
);

const DOB = () => (
  <div className="Form_Block">
    <label htmlFor="dob">DOB</label>
    <input type="date" name="dob" />
  </div>
);

const Contact = () => (
  <div className="Form_Block">
    <label htmlFor="email">Email</label>
    <input type="text" name="email" />
    <label htmlFor="homePhone">Cell Phone</label>
    <input type="text" name="homePhone" />
  </div>
);

const Address = () => (
  <div className="Form_Block">
    <label htmlFor="address"> Street</label>
    <input type="text" name="address" />
    <label htmlFor="unit"> Unit</label>
    <input className="Input_Short" type="text" name="unit" />
  </div>
);

const ZipState = () => (
  <div className="Form_Block">
    <label htmlFor="zip"> Zip</label>
    <input type="text" name="zip" />
    <label htmlFor="state"> State</label>
    <input className="Input_Short" type="text" name="state" />
  </div>
);

export const User_Registration_Form = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  return (
    <User_Registration_Styles>
      <div className="Form_SubContainer">
        <FirstLastName />
        <DOB />
        <Contact />
        <Address />
        <ZipState />
        <Button type="Small">Submit </Button>
      </div>
    </User_Registration_Styles>
  );
};

export const User_Billing_Form = () => {
  const CardElementStyles = {
    base: {
      color: "#00ffff",
      fontSize: "15px",
      padding: "15px",
      background: "#0000007a",
      iconColor: "black",
      empty: {
        color: "#00ffff",
      },
    },
  };

  const { register, handleSubmit, watch, errors } = useForm();
  return (
    <User_Billing_Styles>
      <DOB />
      <Contact />
      <Address />
      <ZipState />
      <div className="Stripe_Card_Container">
        <CardElement color="aqua" style={CardElementStyles} />
      </div>
      <Button type="Small" onClick={handleSubmit}>
        Subscribe
      </Button>
    </User_Billing_Styles>
  );
};
