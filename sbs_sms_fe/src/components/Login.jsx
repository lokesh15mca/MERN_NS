import { useState } from "react";
import "../components/style.css";
import { useNavigate, Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [passworad, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const submitHandeler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    navigate("/dashboard");
  };

  return (
    <>
      <div className="signup-wrapper">
        <div className="signup-box">
          <div className="signup-left">
            <img src={require("../components/assets/signin2.png")} />
            <h1 className="signup-left-heading">School Management System</h1>
            <p className="signup-left-para">
              Manage your all data in Easy way...
            </p>
          </div>
          <div className="signup-right">
            <form className="signup-form" onSubmit={submitHandeler}>
              <h1>Login to your account</h1>

              <input
                required
                type="text"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <input
                required
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <button>
                {isLoading && <i class="fa-solid-fa-spinner fa-spin-pluse"></i>}
                Submit
              </button>

              <Link className="link" to="/sign-in">
                Create your account
              </Link>
            </form>
          </div>
        </div>
      </div>
      <h1>Sign up</h1>
    </>
  );
};
