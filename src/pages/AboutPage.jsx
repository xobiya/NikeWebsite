import React from "react";
import { Nav } from "../components";
import SuperQuality from "../Sections/SuperQuality";

const AboutPage = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <SuperQuality />
      </section>
    </main>
  );
};

export default AboutPage;
