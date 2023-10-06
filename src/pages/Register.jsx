import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/register.css";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "http://localhost:5000/api";

function Register() {
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);
  const [formDetails, setFormDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confpassword: "",
  });
  const navigate = useNavigate();

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const onUpload = async (element) => {
    setLoading(true);
    if (element.type === "image/jpeg" || element.type === "image/png" || element.type === "image/jpg") {
      const data = new FormData();
      data.append("file", element);
      data.append("upload_preset","biu29bd9");
      data.append("cloud_name","dvpqtv62p");
      console.log(process.env.REACT_APP_CLOUDINARY_BASE_URL);
      try {
        const response = await fetch("https://api.cloudinary.com/v1_1/dvpqtv62p/image/upload", {
          method: "POST",
          body: data,
        });
  
        if (!response.ok) {
          throw new Error("Image upload failed");
        }
  
        const responseData = await response.json();
        setFile(responseData.url.toString());
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        toast.error("Image upload failed");
      }
    } else {
      setLoading(false);
      toast.error("Please select an image in jpeg, jpg, or png format");
    }
  };
  

  const formSubmit = async (e) => {
    try {
      e.preventDefault();

      if (loading) return;
      if (file === "") return;

      const { firstname, lastname, email, password, confpassword } =
        formDetails;
      if (!firstname || !lastname || !email || !password || !confpassword) {
        return toast.error("Input field should not be empty");
      } else if (firstname.length < 3) {
        return toast.error("First name must be at least 3 characters long");
      } else if (lastname.length < 3) {
        return toast.error("Last name must be at least 3 characters long");
      } else if (password.length < 5) {
        return toast.error("Password must be at least 5 characters long");
      } else if (password !== confpassword) {
        return toast.error("Passwords do not match");
      }

      await toast.promise(
        axios.post("/user/register", {
          firstname,
          lastname,
          email,
          password,
          pic: file,
        }),
        {
          pending: "Registering user...",
          success: "User registered successfully",
          error: "Unable to register user",
          loading: "Registering user...",
        }
      );
      return navigate("/login");
    } catch (error) {}
  };

  return (
    <section className="register-section flex-center">
      <div className="register-container flex-center">
        <h2 className="form-heading" style={{fontFamily:" 'Teko', sans-serif",color:" #1e375a",fontWeight:"400"}}>Sign Up</h2>
        <form
          onSubmit={formSubmit}
          className="register-form"
        >
          <input
            type="text"
            name="firstname"
            className="form-input"
            placeholder="Enter your first name"
            value={formDetails.firstname}
            onChange={inputChange}
            style={{backgroundColor:"#3f3e3e"}}
          />
          <input
            type="text"
            name="lastname"
            className="form-input"
            placeholder="Enter your last name"
            value={formDetails.lastname}
            onChange={inputChange}
            style={{backgroundColor:"#3f3e3e"}}
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={formDetails.email}
            onChange={inputChange}
            style={{backgroundColor:"#3f3e3e"}}
          />
          <input
            type="file"
            onChange={(e) => onUpload(e.target.files[0])}
            name="profile-pic"
            id="profile-pic"
            className="form-input"
            style={{backgroundColor:"#3f3e3e"}}
          />
          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={formDetails.password}
            onChange={inputChange}
            style={{backgroundColor:"#3f3e3e"}}
          />
          <input
            type="password"
            name="confpassword"
            className="form-input"
            placeholder="Confirm your password"
            value={formDetails.confpassword}
            onChange={inputChange}
            style={{backgroundColor:"#3f3e3e"}}
          />
          <button
            type="submit"
            className="btn form-btn"
            disabled={loading ? true : false}
            style={{ backgroundColor: "#609664", transition: "background-color .2s" }}
            onMouseEnter={(e) => e.target.style.backgroundColor = "#77c97e"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "#609664"}
          >
            sign up
          </button>
        </form>
        <p>
          Already a user?{" "}
          <NavLink
            className="login-link"
            to={"/login"}
          >
            Log in
          </NavLink>
        </p>
      </div>
    </section>
  );
}

export default Register;
