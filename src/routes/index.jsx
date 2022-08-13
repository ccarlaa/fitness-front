import { BrowserRouter, Routes, Route } from "react-router-dom"

import SignUp from "../pages/SignUp/index"
import SignIn from "../pages/SignIn"
import CreateStudent from "../pages/CreateStudent"

import { AuthProvider } from "../contexts/AuthContext"
import { StudentsProvider } from "../contexts/StudentsContext"
import StudentsPage from "../pages/StudentsPage"

export default function Router() {
    return(
        <BrowserRouter>
            <AuthProvider>
            <StudentsProvider>
                <Routes>
                    <Route path="/" element={<SignIn />}/>
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/new-student" element={<CreateStudent />} />
                    <Route path="/students" element={<StudentsPage />} />
                </Routes>
            </StudentsProvider>
            </AuthProvider>
        </BrowserRouter>
	)
}