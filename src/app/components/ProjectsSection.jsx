"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Modern Recruiting Product",
    description:
      "A platform for manage, interview and memory candidate, job ( for a company ) support with AI.",
    image: "/images/projects/mr-0.png",
    tag: ["Modern Recruiting", "All"],
    previewUrl: "https://www.modernrecruiting.ai/",
  },
  {
    id: 2,
    title: "Aura AI Product",
    description:
      "A platform support candidate get new job automation support with AI.",
    image: "/images/projects/mr-1.png",
    tag: ["Modern Recruiting", "All"],
    previewUrl: "https://myauraai.com/",
  },
  {
    id: 3,
    title: "NFT Marketplace on SUI blockchain",
    description:
      "A platform run on SUI blockchain help user buy, sell their NFT and corporation lunch new NFT projects. (I do many projects with the same technical like: BEQNFT - luxury NFT, ... )",
    image: "/images/projects/pharmatech-0.png",
    tag: ["Pharmatech", "All"],
    gitUrl: "https://github.com/quatium-com",
    previewUrl: "https://shoshinsquare.com/",
  },
  {
    id: 4,
    title: "PMT Token",
    description:
      "A platform for sale, stacking, and trade the PMT token on ethereum blockchain",
    image: "/images/projects/pharmatech-1.png",
    tag: ["Pharmatech", "All"],
  },
  {
    id: 5,
    title: "Pharmatechnor",
    description:
      "A company website for sale all company products like medical, health food, ...",
    image: "/images/projects/pharmatech-3.png",
    tag: ["Pharmatech", "All"],
    previewUrl: "https://pharmatechnor.com/",
  },
  {
    id: 6,
    title: "Capsure.co",
    description:
      "A website to sale canvas, allow user get the best canvas, custom the canvas, preview they canvas before buy.",
    image: "/images/projects/ncc-1.png",
    tag: ["NCC Da Nang", "All"],
    previewUrl: "https://capsure.co/",
  },
  {
    id: 6,
    title: "Watigareserve",
    description:
      "This is a private project used to manage individuals and corporate, manage the transaction and dependence between individuals and corporate. ( Create individual and  corporate, manage, verify individuals and corporate, verify transaction between individuals and corporate)",
    image: "/images/projects/ncc-2.png",
    tag: ["NCC Da Nang", "All"],
    previewUrl: "https://watigareserve.com/",
  },
  {
    id: 6,
    title: "Spatialest",
    description:
      "A platform for corporate and individual manage the assets like the personal estate, personal assets, ..., user for manage the survey data.",
    image: "/images/projects/ncc-3.png",
    tag: ["NCC Da Nang", "All"],
    previewUrl: "https://rig.spatialest.com/main",
  },
  {
    id: 7,
    title: "Real new energy (R.E.A.L energy company project groups)",
    description:
      "A platform for the japanese who use the the energy from R.E.A.L company get the energy used, analyze the number of energy used pay the energy bill and join the company event.",
    image: "/images/projects/ncc-4.png",
    tag: ["NCC Da Nang", "All"],
    previewUrl: "https://auth.real-newenergy.com/login",
  },
  {
    id: 8,
    title: "DR Real new energy (R.E.A.L energy company project groups)",
    description:
      "A platform for manage the energy produce and used energy connect multiple company to provide exact energy to exact area",
    image: "/images/projects/ncc-4.png",
    tag: ["NCC Da Nang", "All"],
    previewUrl: "https://auth.real-newenergy.com/login",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Career
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Modern Recruiting"
          isSelected={tag === "Modern Recruiting"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Pharmatech"
          isSelected={tag === "Pharmatech"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="NCC Da Nang"
          isSelected={tag === "NCC Da Nang"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
