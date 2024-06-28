import {
    SiPython,
    SiPostgresql,
    SiRstudio,
    SiMetabase,
    SiPowerbi
    
} from "react-icons/si";
import {GrMysql} from "react-icons/gr";
import {FaGitAlt, FaAws} from "react-icons/fa";
import { TbCircleLetterC, TbMathFunction } from "react-icons/tb";
import { SiMicrosoftpowerpoint, SiTableau } from "react-icons/si";


import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiRstudio size={50}/>,
            text: "R"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <TbCircleLetterC size={50}/>,
            text: "C / C++"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <TbMathFunction size={50}/>,
            text: "MATLAB"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiPostgresql size={50}/>,
            text: "PostgreSQL"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <GrMysql size={50}/>,
            text: "MySQL"
        }
    ],
    complementarySkills: [
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <FaAws size={50}/>,
            text: "AMS Sagemaker"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiPowerbi size={50}/>,
            text: "Power BI"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiMicrosoftpowerpoint size={50}/>,
            text: "MS Office Suite"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <SiTableau size={50}/>,
            text: "Tableau"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiMetabase size={50}/>,
            text: "Metabase"
        }
        
        
    ]
}

export default skillsConfig
