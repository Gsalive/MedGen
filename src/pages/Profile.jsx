import React, { useEffect, useState } from "react";
import "../styles/profile.css";
import axios from "axios";
import toast from "react-hot-toast";
import { setLoading } from "../redux/reducers/rootSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import fetchData from "../helper/apiCall";
import jwt_decode from "jwt-decode";
import { right } from "@cloudinary/url-gen/qualifiers/textAlignment";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

function Profile() {
  const { userId } = jwt_decode(localStorage.getItem("token"));
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.root);
  const [file, setFile] = useState("");
  const [formDetails, setFormDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    mobile: "",
    gender: "neither",
    address: "",
    password: "",
    confpassword: "",
  });

  const getUser = async () => {
    try {
      dispatch(setLoading(true));
      const temp = await fetchData(`/user/getuser/${userId}`);
      setFormDetails({
        ...temp,
        password: "",
        confpassword: "",
        mobile: temp.mobile === null ? "" : temp.mobile,
        age: temp.age === null ? "" : temp.age,
      });
      setFile(temp.pic);
      dispatch(setLoading(false));
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, [dispatch]);

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const formSubmit = async (e) => {
    try {
      e.preventDefault();
      const {
        firstname,
        lastname,
        email,
        age,
        mobile,
        address,
        gender,
        password,
        confpassword,
      } = formDetails;

      if (!email) {
        return toast.error("Email should not be empty");
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
        axios.put(
          "/user/updateprofile",
          {
            firstname,
            lastname,
            age,
            mobile,
            address,
            gender,
            email,
            password,
          },
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ),
        {
          pending: "Updating profile...",
          success: "Profile updated successfully",
          error: "Unable to update profile",
          loading: "Updating profile...",
        }
      );

      setFormDetails({ ...formDetails, password: "", confpassword: "" });
    } catch (error) {
      return toast.error("Unable to update profile");
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="register-section flex-center">
          <div className="profile-container flex-center">
            <h2 className="form-heading" style={{fontFamily:" 'Teko', sans-serif",color:" #1e375a",fontSize:"3rem"}}>Profile</h2>
            <img
              src={file}
              alt="profile"
              className="profile-pic"
              style={{width:"8rem",height:"8rem"}}
            />
            <form
              onSubmit={formSubmit}
              className="register-form"
            >
              <div className="form-same-row">
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
              </div>
              <div className="form-same-row">
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Enter your email"
                  value={formDetails.email}
                  onChange={inputChange}
                  style={{backgroundColor:"#3f3e3e"}}
                />
                <select
                  name="gender"
                  value={formDetails.gender}
                  className="form-input"
                  id="gender"
                  onChange={inputChange}
                  style={{backgroundColor:"#3f3e3e"}}
                >
                  <option value="neither">Prefer not to say</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="form-same-row">
                <input
                  type="text"
                  name="age"
                  className="form-input"
                  placeholder="Enter your age"
                  value={"Age : "+formDetails.age}
                  onChange={inputChange}
                  style={{backgroundColor:"#3f3e3e"}}
                />
                <input
                  type="text"
                  name="mobile"
                  className="form-input"
                  placeholder="Enter your mobile number"
                  value={formDetails?.mobile}
                  onChange={inputChange}
                  style={{backgroundColor:"#3f3e3e"}} 
                />
              </div>
              <textarea
                type="text"
                name="address"
                className="form-input"
                placeholder="Enter your address"
                value={formDetails.address}
                onChange={inputChange}
                rows="2"
                style={{backgroundColor:"#3f3e3e"}}

              ></textarea>
              <div className="form-same-row">
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
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
  <button
    type="submit"
    className="btn form-btn"
    style={{
      backgroundColor: "#609664",
      transition: "background-color .2s",
      width: "48%", // Adjust the width as needed
      marginRight: "2%", // Add margin for spacing
    }}
    onMouseEnter={(e) => (e.target.style.backgroundColor = "#77c97e")}
    onMouseLeave={(e) => (e.target.style.backgroundColor = "#609664")}
  >
    Update
  </button>
  <button
  onClick={() => (window.location.href = "http://localhost:3001/")}
  className="btn form-btn"
  style={{
    backgroundColor: "#609664",
    transition: "background-color .2s",
    width: "48%", // Adjust the width as needed
    marginLeft: "2%", // Add margin for spacing
  }}
  onMouseEnter={(e) => (e.target.style.backgroundColor = "#77c97e")}
  onMouseLeave={(e) => (e.target.style.backgroundColor = "#609664")}
>
  Upload Files
</button>

</div>

            </form>
          </div>
        </section>
      )}
    </>
  );
}

export default Profile;
