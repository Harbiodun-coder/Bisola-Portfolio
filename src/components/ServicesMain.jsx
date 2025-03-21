import React from "react";
import {  FaChartBar, FaDatabase } from "react-icons/fa";
import { MdWorkspacesOutline } from "react-icons/md";

const services = [
  {
    title: "Data Analysis & Insights",
    description:
      "I analyze raw data to uncover trends, patterns, and correlations that help businesses make data-driven decisions. Using statistical techniques and analytical tools, I provide actionable insights for growth and efficiency.",
    icon: <FaChartBar className="text-orange text-5xl" />,
  },
  {
    title: "Data Visualization & Reporting",
    description:
      "I create interactive dashboards and reports using Tableau, Power BI, and Matplotlib/Seaborn to present complex data in a clear, visual format. My reports help businesses quickly interpret data and track key performance metrics.",
    icon: <FaChartBar className="text-orange text-5xl" />,
  },
  {
    title: "Business & Market Analysis",
    description:
      "I help businesses understand their market, customers, and competition by analyzing sales, customer behavior, and financial trends. My insights support strategic decision-making and performance optimization.",
    icon: <MdWorkspacesOutline className="text-orange text-5xl" />,
  },
  {
    title: "SQL & Database Management",
    description:
      "I write efficient SQL queries to extract, manipulate, and manage structured data from databases. I also optimize database performance to ensure smooth data retrieval for analysis and reporting.",
    icon: <FaDatabase className="text-orange text-5xl" />,
  },
  {
    title: "Data Wrangling & Transformation",
    description:
      "I clean, preprocess, and transform messy data into a structured format suitable for analysis. Using Python (Pandas, NumPy) and SQL, I handle missing values, standardize data, and prepare it for machine learning or reporting.",
    icon: <FaDatabase className="text-orange text-5xl" />,
  },
  {
    title: "Consulting & Training",
    description:
      "I offer data analytics consulting for businesses looking to leverage data for growth. Additionally, I provide training sessions on Excel, SQL, Python, Power BI, and Tableau, helping teams enhance their data skills.",
    icon: <MdWorkspacesOutline className="text-orange text-5xl" />,
  },
];


const ServicesMain = () => {
  return (
    <section id="services" className="max-w-[1200px] mx-auto px-4 py-16">
      <h2 className="text-6xl font-bold text-center text-cyan mb-12">Services I Offer</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6  rounded-xl shadow-lg text-center flex flex-col items-center 
            hover:scale-105 transition-all duration-500"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-orange">{service.title}</h3>
            <p className="text-gray-300 mt-2 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesMain;
