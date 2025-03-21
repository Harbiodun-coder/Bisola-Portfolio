import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Power Consumption Analysis",
    align: "right",
    image: "/images/power.jpg",
    link: "https://github.com/Bisolaoluwanisola/Train-rides-analysis",
  },
  {
    name: "Bank Churn",
    align: "left",
    image: "/images/bankchurn.jpg",
    link: "https://github.com/Bisolaoluwanisola/Bank-churn",
  },
  {
    name: "Train Rides Analysis",
    align: "right",
    image: "/images/train.jpg",
    link: "https://github.com/Bisolaoluwanisola/Train-rides-analysis",
  },
 
 
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
