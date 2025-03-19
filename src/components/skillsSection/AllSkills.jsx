import SingleSkill from "./SingleSkill";
import { FaPython } from "react-icons/fa";
import { RiFileExcel2Line } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { FaChartBar } from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "PYTHON",
    icon: FaPython,
  },
  {
    skill: "EXCEL",
    icon: RiFileExcel2Line,
  },
  {
    skill: "SQL",
    icon: DiMysql,
  },
  {
    skill: "POWER BI",
    icon: FaChartBar,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
