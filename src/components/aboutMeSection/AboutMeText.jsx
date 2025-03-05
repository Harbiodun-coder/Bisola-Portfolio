import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      I am Bisola Oluwanisola Praise a detail-oriented Data Analyst with a passion for transforming raw data into actionable insights. With expertise in data visualization, statistical analysis, and database management, I help businesses make data-driven decisions that drive growth and efficiency.

      Proficient in SQL, Python, Excel, and BI tools like Tableau and Power BI, I specialize in data cleaning, trend analysis, and predictive modeling to uncover meaningful patterns. My ability to translate complex datasets into clear, strategic recommendations allows stakeholders to make informed decisions with confidence.

      I thrive in dynamic environments where data can be leveraged to solve real-world challenges. Whether it's optimizing business processes, improving customer experiences, or forecasting trends, I am committed to delivering impactful data solutions.

Let’s connect and turn data into insights that drive success!
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
