import { useForm } from "react-hook-form";
import { Form, Button } from "../components/";
import { FiUser, FiLock, FiFacebook, Fig } from "react-icons/fi";
import { IoLogoGoogle } from "react-icons/io";

const handleLogin = (data) => {
  console.log(data);
};

export const Login = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  return (
    <Form.Container
      style={{ alignItems: "center", justifyContent: "center" }}
      onSubmit={handleSubmit(handleLogin)}
    >
      <div className="Form_SubContainer">
        <span>
          <FiUser className="Form_Icon" />
          <input
            type="text"
            name="UserName"
            className="Login_Username"
            ref={register({ required: true })}
            style={{ width: "100%" }}
          />
        </span>
        <span>
          <FiLock className="Form_Icon" />
          <input
            type="password"
            name="Password"
            className="Login_Password"
            ref={register({ required: true })}
            style={{ width: "100%" }}
          />
        </span>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button type="Small">Submit</Button>
          <a href="http://localhost:4000/auth/facebook">
            <FiFacebook className="Form_Icon" style={{ marginLeft: "auto" }} />
          </a>
          <IoLogoGoogle className="Form_Icon" />
        </div>
      </div>
    </Form.Container>
  );
};

export const Registration = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  return (
    <Form.Container>
      <div className="Form_SubContainer">
        <div>
          <label htmlFor="firstName">FirstName</label>
          <input name="firstName" />
          <label htmlFor="LastName">LastName</label>
          <input name="lastName" />
        </div>
        <div>
          <label htmlFor="dob">DOB</label>
          <input type="date" name="dob" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
          <label htmlFor="homePhone">Cell Phone</label>
          <input type="text" name="homePhone" />
        </div>

        <div>
          <label htmlFor="address"> Street</label>
          <input type="text" name="address" />
          <label htmlFor="unit"> Unit</label>
          <input className="Input_Short" type="text" name="unit" />
        </div>
        <div>
          <label htmlFor="zip"> Zip</label>
          <input type="text" name="zip" />
          <label htmlFor="state"> State</label>
          <input className="Input_Short" type="text" name="state" />
        </div>
        <Button type="Small">Submit </Button>
      </div>
    </Form.Container>
  );
};
