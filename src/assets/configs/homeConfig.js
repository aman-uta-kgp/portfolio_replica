import React from 'react'
import { BiRocket } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa6";
import { BsBank2 } from "react-icons/bs";
import { IoSchoolSharp } from "react-icons/io5";

// Import your image
import profileImage from '../../assets/images/image_cropped.png'; // Adjust the path as necessary


const homeConfig = {

    greeting:
        <div className="greeting-container">
        <img src={profileImage} alt="Aman Sharma" className="profile-image" />
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Aman Sharma</strong>
        </h1>
</div>,
    titles: [
        "A Risk Professional",
        "A Data Scientist",
        "A Longhorn",
        "An IITian"
    ],
    about: {
        start: ["With ~3 years of experience in risk analytics coupled with an FRM certification,",
        " I bring to the table expertise in the financial services industry and data science applications"

    ],
            
        exit: "I am currently a grad student UT Austin's MS program in Business Analytics - Financial Analytics concentration."
    },
    workTimeline: [
        {
            id: "work-3",
            title: ["Graduate Student : MS Business Analytics"],
            company: (  
                <div>
                <p style={{ fontSize: "larger", display: "block", marginTop: "0" }}>UT Austin</p>
                <div style={{ fontSize: "smaller", display: "block", marginTop: "0" }}> McCombs School of Business</div>
            </div>
        ),
            description : "Coursework : Advaned Machine Learning, Financial Modeling, Fixed Income Analysis",
            date: "June' 24 - May' 25",
            icon: <FaUserGraduate/>,
            tags: ["python", "llm", "R", "SQL"]
        },
        
        {
            id: "work-2",
            title: "Manager - Risk Analytics",
            company: (  
                <div>
                <p style={{ fontSize: "larger", display: "block", marginTop: "0" }}>Drip Capital</p>
                <div style={{ fontSize: "smaller", display: "block", marginTop: "0" }}> YC & Sequoia backed Series C startup</div>
            </div>
        ),
            description: (<ul>
            <li>Managed risk of loan book sized 50 Mn+ loanbook, 150+ US SMEs </li>
            <li>Developed ML based probabilistic credit and fraud risk controls</li>
            <li>Onboarded new data vendors - credit bureaus, alternate data providers etc</li>
        </ul>),
            date: "Sep' 22 - May' 24",
            icon: <BiRocket/>,
            tags: ["ml", "AWS", "financial statement analysis", "credit risk modelling", "risk management", "PostgreSQL"]
        },
        {
            id: "work-3",
            title: "Risk Analyst II",
            company: (  
                <div>
                <p style={{ fontSize: "larger", display: "block", marginTop: "0" }}>American Express</p>
                <div style={{ fontSize: "smaller", display: "block", marginTop: "0" }}> US Consumer Cards Business</div>
            </div>),
            description: (<ul>
                <li>Managed Sentinel, pre - underwriting risk control, baking in company's macro economic outlook into model threholds</li>
                <li>Nominated for Howard's Advisory Board as B30 & 35 representative </li>
            </ul>),
            date: "Aug' 21 - Sep' 22",
            icon: <BsBank2/>,
            tags: ["boosting", "HiveQL", "python", "SAS", "leadership"]
        },
        {
            id: "work-2",
            title: "Undergraduate & Graduate Student",
            company: (  
                <div>
                <p style={{ fontSize: "larger", display: "block", marginTop: "0" }}>IIT Kharagpur</p>
                <div style={{ fontSize: "smaller", display: "block", marginTop: "0" }}> Bachelors & Masters in Chemical Engineering</div>
            </div>),
            description: (<ul>
                <li>Awared Honorable Mention at graduation</li>
                <li>International Internship - ML Research Intern, NTHU Taiwan </li>
                <li>Student Activities - Governor, Business Club; Captain, Inter IIT Case Study Team, NSS Volunteer </li>
            </ul>),
            date: "Jul' 16 - Jul' 21",
            icon: <IoSchoolSharp/>,
            tags: ["C", "C++", "MATLAB", "neural networks","bayesian optimization", "volunteering"]
        }
    ]
}


export default homeConfig