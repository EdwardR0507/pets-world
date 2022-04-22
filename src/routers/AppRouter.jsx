import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Spinner from "../ui/Spinner";
import NavBar from "../ui/NavBar";

const Home = lazy(() => import("../pages/Home"));

const AuthRouter = lazy(() => import("./AuthRouter"));
const HomeUser = lazy(() => import("../pages/user/HomeUser"));
const PetRouter = lazy(() => import("./PetRouter"));
const LossRouter = lazy(() => import("./LossRouter"));

const PublicRouter = lazy(() => import("./PublicRouter"));
const PrivateRouter = lazy(() => import("./PrivateRouter"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <NavBar />
        <Routes>
          <Route
            path="/"
            index
            element={
              <PublicRouter>
                <Home />
              </PublicRouter>
            }
          />
          <Route
            path="/auth/*"
            element={
              <PublicRouter>
                <AuthRouter />
              </PublicRouter>
            }
          />

          <Route
            path="/user/home"
            element={
              <PrivateRouter>
                <HomeUser />
              </PrivateRouter>
            }
          />

          <Route
            path="/user/*"
            element={
              <PrivateRouter>
                <PetRouter />
              </PrivateRouter>
            }
          />

          <Route
            path="/loss/*"
            element={
              <PrivateRouter>
                <LossRouter />
              </PrivateRouter>
            }
          />

          <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
