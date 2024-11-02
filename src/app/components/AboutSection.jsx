"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>NodeJS: ExpressJS</li>
        <li>NextJS: Material UI, Tailwind, SCSS, Redux</li>
        <li>NestJS: MicroService</li>
        <li>ReactJS: Material UI, Redux</li>
        <li>Javascript: JQuery</li>
        <li>Database: PostgreSQL, MongoDB, MySQL server</li>
        <li>Block Chain: Sui, Solidity, Golang, Rust</li>
        <li>.NET: LinQ, Razor </li>
        <li>Some deployment skill like CI/CD, AWS, ...</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Danang University if Science and Technology</li>
      </ul>
    ),
  },
  {
    title: "Awards",
    id: "awards",
    content: (
      <ul className="list-disc pl-2">
        <li>Top 10 SUI hackathon 2023</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          style={{ borderRadius: "8px" }}
          alt="about-image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I have over 4 Year experience work with Javascript, My current
            technical stack in NodeJS, NestJS, ReactJS, NextJS. I can work with
            some different Language such as Golang, C#. I used to work with both
            relationship database ( PostgreSQL, MySQL Server ) and no
            relationship database ( MongoDB, DynamoDB ). Have experience in
            optimize database ( relationship ). I have experience to lead team
            about 3 - 5 members. Have experience build the project structure,
            system.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("awards")}
              active={tab === "awards"}
            >
              Awards
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
