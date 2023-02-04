import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import AuthProvider from "./context/AuthContext";
import PrivateUser from "./routes/PrivateUser";
import PublicUser from "./routes/PublicUser";

const App = () => {
    return (
        <ChakraProvider>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<PrivateUser />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                    <Route path="/" element={<PublicUser />} >
                        <Route path="/sign" element={<Signin />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </ChakraProvider>
    )
};

export default App;
