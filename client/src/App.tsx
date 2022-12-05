import { HomePage } from "./components/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import { CharacterInfo } from "./components/CharacterInfo/CharacterInfo";
import { Container } from "./App.styles";
import { Header } from "./components/Header/Header";
import { SignUpPage } from "./components/SignUpPage/SignUpPage";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { useEffect } from "react";
import { initializeFulfilled } from "./store/reducers/appSlice";
import { setAuthData } from "./store/reducers/authSlice";
import { selectIsAppInitialized } from "./store/selectors/appSelectors";
import { Loader } from "./components/Loader/Loader";
import { ProfilePage } from "./components/ProfilePage/ProfilePage";

function App() {
  const dispatch = useAppDispatch();
  const isAppInitialized = useAppSelector(selectIsAppInitialized);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    token
      ? dispatch(setAuthData({ token, isAuth: true }))
      : dispatch(setAuthData({ token: "", isAuth: false }));

    dispatch(initializeFulfilled());
  }, [dispatch]);

  return (
    <>
      {isAppInitialized ? (
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="character/:id" element={<CharacterInfo />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Routes>
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;
