import { BrowserRouter, Routes, Route } from "react-router-dom"

import SignUp from "../pages/SignUp/index"
import SignIn from "../pages/SignIn"

import { AuthProvider } from "../contexts/AuthContext"

export default function Router() {
    return(
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<SignIn />}/>
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
	)
}