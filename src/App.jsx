import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:index",
        element: <Home />,
      },
      {
        path: "/0",
        element: <Home />,
      },
    ],
    { basename: import.meta.env.BASE_URL }
  );

  return (
    <>
      {/* <BrowserRouter basename="/Vani-Vizha">
        <Routes>
          <Route exact path="/1" element={<Home />} />
        </Routes>
      </BrowserRouter> */}

      <RouterProvider router={router} />
    </>
  );
}

export default App;
