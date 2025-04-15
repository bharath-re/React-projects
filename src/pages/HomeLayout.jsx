import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function HomeLayout() {
  return (
    <>
      <Header />
      <section className="text-4xl text-green-100">
        <Outlet />
      </section>
    </>
  );
}

export default HomeLayout;
