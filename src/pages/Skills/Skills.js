import React from 'react'
import {AttentionSeeker} from "react-awesome-reveal";
import SkillsItems from "./SkillsItems";
import skillsConfig from "../../assets/configs/skillsConfig";
import "./Skills.css"


const Skills = () => {
    return (
        <section id="skills">
            <div>
                <div className="skills-div">
                    <h1 className="main-skills-h1">
                        <span className="main-skills"><strong>Languages</strong></span>
                    </h1>
                    <AttentionSeeker effect={"bounce"}>
                        <div className="main-skills">
                            <SkillsItems config={skillsConfig.mainSkills}/>
                        </div>
                    </AttentionSeeker>
                    

                    <h1 className="main-skills-h1">
                        <span className="complementary-skills"><strong>Tools & Platforms</strong></span>
                    </h1>
                    <AttentionSeeker effect={"bounce"}>
                        <div className="complementary-skills">
                            <SkillsItems config={skillsConfig.complementarySkills}/>
                        </div>
                    </AttentionSeeker>
                </div>
            </div>
        </section>
    )

}
export default Skills