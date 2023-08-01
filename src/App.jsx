import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUpPage";

export default function App() {

  return (
    <PagesContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/signin" />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/ranking" />
        </Routes>
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

