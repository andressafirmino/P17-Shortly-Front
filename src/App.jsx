import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUpPage";
import SignIn from "./pages/SignInPage";
import Ranking from "./pages/Ranking";
import AuthProvider from "./context/auth";
import UserPage from "./pages/UserPage";

export default function App() {

  return (
    <PagesContainer>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users/me" element={< UserPage/>} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/ranking" element={<Ranking />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 25px;
  background-color: #FFFFFF;
`

