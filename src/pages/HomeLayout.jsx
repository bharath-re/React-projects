import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { NavBar } from "../components";

function HomeLayout() {
  return (
    <>
      <Header />
      <NavBar />
      <section className="text-4xl text-green-100">
        <Outlet />
      </section>
    </>
  );
}

export default HomeLayout;
