import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";


import BSM_model_image from "../images/BSM_model_image.png"
import Binomial from "../images/Binomial_CRR.png"
import loan from "../images/loan_amortization.jpg"

import React from 'react'

const projectConfig = [
        
    
    {
        id: "project-3",
        title: "BSM Options Pricing Model",
        links: [
            {
                name: "repo",
                url: "https://github.com/aman-uta-kgp/BSM_Monte_Carlo_engine",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/aman-uta-kgp/BSM_Monte_Carlo_engine/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/aman-uta-kgp/BSM_Monte_Carlo_engine/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: BSM_model_image,
        description: "Implementation of Black Scholes Merton Option Pricing Model for a non dividend paying European option.",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "Binomial Pricing using CRR Strategy",
        links: [
            {
                name: "repo",
                url: "https://github.com/aman-uta-kgp/binomial_pricing_model",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/aman-uta-kgp/binomial_pricing_model/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/aman-uta-kgp/binomial_pricing_model/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: Binomial,
        description: "Standard tools for workforce management, queuing, scheduling, rostering and optimization problems.",
        target: "_blank"
    },
    {
        id: "project-1",
        title: "Loan Amortization Calculator",
        links: [
            {
                name: "repo",
                url: "https://github.com/aman-uta-kgp/loan_amortization",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/aman-uta-kgp/loan_amortization/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/aman-uta-kgp/loan_amortization/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: loan,
        description: "C++ implementation of a vanilla loan amortization schedule.",
        target: "_blank"
    }
]

export default projectConfig