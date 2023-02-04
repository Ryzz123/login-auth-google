import React from "react";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signin = () => {
    const {googleSigin} = useAuth();
    const navigate = useNavigate();

    const handleGoogleSigin = async () => {
        try {
            await googleSigin();
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <GoogleButton onClick={handleGoogleSigin} />
  )
};

export default Signin;
