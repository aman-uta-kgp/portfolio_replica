import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import {BsMedium} from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import React from "react";

const footerConfig = {

    icons: [
        {
            id: "footer-0",
            url: "https://github.com/aman-uta-kgp",
            className: "social-icon",
            target: "_blank",
            icon: <AiFillGithub size={50}/>
        },
        {
            id: "footer-1",
            url: "https://www.linkedin.com/in/sharmaaman5598",
            className: "social-icon",
            target: "_blank",
            icon: <FaLinkedinIn size={50}/>
        },
        
        {
            id: "footer-2",
            url: "mailto:aman.sharma@utexas.edu",
            className: "social-icon",
            target: "_blank",
            icon: <IoMail size={50}/>
        }
        // ,
        
        // {
        //     id: "footer-3",
        //     url: "https://medium.com/@aman.sharma_18745",
        //     className: "social-icon",
        //     target: "_blank",
        //     icon: <BsMedium size={50}/>
        // }
        ,
        {
            id: "footer-2",
            url: "tel:(737)-368-6870",
            className: "social-icon",
            target: "_blank",
            icon: <IoMdCall size={50}/>,
            title : "(737) - 368 - 6870"
        }
    ]
}

export default footerConfig
