import { useState } from "react";
import "../components/style.css";
import { useNavigate, Link } from "react-router-dom";

export const Signup1 = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [img, setImg] = useState("");
  const [imgUrl, setImgUrl] = useState();
  const [isLoading, setIsLoading] = useState(false);

  //   const neviage = useNavigate();
  const navigate = useNavigate();

  const submitHandeler = (e) => {
    e.preventDefault();
    navigate("/dashboard");
    setIsLoading(true);
  };
  const fileHandler = (e) => {
    setImg(e.target.files[0]);
    setImgUrl(URL.createObjectURL(e.target.files[0]));
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
              <h1>Create your accoutn</h1>
              <input
                required
                type="text"
                placeholder="Institute Name"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
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
                type="text"
                placeholder="Phone"
                onChange={(e) => {
                  setPhone(e.target.value);
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

              <input type="file" onChange={fileHandler} required />
              {imgUrl && <img className="your-logo" src={imgUrl} />}
              <button>
                {isLoading && <i class="fa-solid-fa-spinner fa-spin-pluse"></i>}
                Submit
              </button>
              <Link className="link" to="/login">
                Login your account
              </Link>
            </form>
          </div>
        </div>
      </div>
      <h1>Sign up</h1>
    </>
  );
};
