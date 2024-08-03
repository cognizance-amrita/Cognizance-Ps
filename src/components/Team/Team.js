import React from "react";
import Card from "./Card.js";
import "./Team.css";
import img00 from "../Images/DisplayPics/00.jpg";
import img50 from '../Images/DisplayPics/50.jpg';
import img65 from "../Images/DisplayPics/65.jpg";
import img66 from "../Images/DisplayPics/66.jpg";
import img67 from "../Images/DisplayPics/67.jpg";
import img68 from "../Images/DisplayPics/68.jpg";
import img69 from "../Images/DisplayPics/69.jpg";
import img70 from "../Images/DisplayPics/70.jpg";
import img71 from "../Images/DisplayPics/71.jpg";
import img72 from "../Images/DisplayPics/72.jpg";
import img73 from "../Images/DisplayPics/73.jpg";
import img74 from "../Images/DisplayPics/74.jpg";
import img75 from "../Images/DisplayPics/75.jpg";
import Navbar from './../navbar/Navbar';
import Footer from "../Footer/Footer";
const Team = () => {

  // Team Members Data list

  let content = [
    {
      id: 1,
      src: img00,
      name: "Dr. Deepak K",
      post: " Club Advisor ",
      // dom: "",
      desc:"",
      mail:"",
      gitHub:"",
      linkIn:"",
      insta:"",
    },
    {
      id:110,
      src:img50,
      name:'Tarun R.G',
      post:'Club Lead',
      dom:'',
      desc:'Hey y\'all I\'m Tarun from CSE department. Im was jr mentor for competitive programming. I\'m a Devops and AI enthusiast. I love to learn new things and to read.',
      mail:'mailto:tarungovindharaj2003@gmail.com',
      gitHub:'https://github.com/Tr1ck-5t3r',
      linkIn:'https://www.linkedin.com/in/tarun-r-g-02224a256/',
      insta:'https://www.instagram.com/tr1ck_5t3r/'
    },
    {
      id:100,
      src:img65,
      name:'Nehal Khan',
      post:'Mentor',
      dom:'Open Source Domain',
      desc:'Hi! Im Nehal Khan, student in CSE department, Im a passionate coder with a keen interest in Operating Systems, AI, and UI/UX. I thrive on the thrill of open-source projects, turning lines of code into innovative realities.',
      mail:"mailto:nehalmicro29@gmail.com",
      gitHub:"https://github.com/Nehal-Khan-29",
      linkIn:"https://www.linkedin.com/in/nehal-khan-29--",
      insta:"https://www.instagram.com/nk29_nehal/?igshid=ODhmNDk1YzU=",  
    },
    
    {
      id:122,
      src:img00,
      name:"Rohith Prasanna",
      post:"Mentor",
      dom:"Open Source Domain",
      desc:"Hi, I'm Rohitprasanna, a CSE student driven by a passion for coding. I'm eager to contribute to open source projects and leverage my strong foundation in backend and app development to create innovative solutions.",
      mail:'mailto:therohitprasanna@gmail.com',
      gitHub:'https://github.com/Rohit-Prasanna',
      linkIn:'https://www.linkedin.com/in/rohit-prasanna-aka-rp/',
      insta:'https://www.instagram.com/r.p_0102?igsh=MTBwbWRlMXlneWU0dA==',
          
    },
    {
      id:99,
      src:img75,
      name:'M. Jahnavi',
      post:'Mentor',
      dom:'Open Source domain',
      desc:"Hi, I'm Jahnavi from CSE department. I’m an open source mentor with a keen interest in full stack development and a passion for coding. I love learning about new technologies and exploring innovative solutions.",
      mail:'mailto:oranjecloud@gmail.com',
      gitHub:'https://github.com/Jahnavi-57',
      linkIn:'https://www.linkedin.com/in/m-jahanave',
      insta:''
    },
    {
      id:121,
      src:img00,
      name:"Neelraj Reddy",
      post:"Mentor",
      dom:"Open Source Domain",
      desc:"",
      mail:"mailto:",
      gitHub:"",
      linkIn:"",
      insta:""
    },
    {
      id:121,
      src:img74,
      name:'Manasa',
      post:'Mentor',
      dom:'AI domain',
      desc:'Hello, this is Manasa from the CSE Department. An AI enthusiast with a strong background in developing AI driven solutions and always excited to learn and experiment',
      mail:'mailto:nehanmm18@gmail.com',
      gitHub:'https://github.com/MadhuManasa18',
      linkIn:'https://www.linkedin.com/in/palavajjhala-neha-madhu-manasa-4a9794254',
      insta:'https://www.instagram.com/madhumanasa_99?igsh=MTljMmphbjU1MDJiZw=='
    },
    {
      id: 90,
      src:img70,
      name:"Shalini Dheenadhayalan",
      post:"Mentor",
      dom:"AI Domain",
      desc:"Hi , I'm Shalini of the AIE department. I enjoy being the mentor of AI cognizance and have a keen interest in AI and machine learning. Sharing knowledge with others is something I truly appreciate.",
      mail:"mailto:ch.en.u4aie22056@ch.students.amrita.edu",
      gitHub:"https://github.com/ShaluDeen",
      linkIn:"https://www.linkedin.com/in/shalini-deena-dhayalan",
      insta:"https://instagram.com/shalu_deen_?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D",
    },
    {
      id:109,
      src:img71,
      name:'Jeba Rachel Nesica',
      post:'Mentor ',
      dom:'AI domain',
      desc:"Hello, I'm Jeba Rachel Nesica from the CSE department. As an AI enthusiast, I truly value sharing knowledge and fostering understanding in this field.",
      mail:'mailto:jebarachelnesica@gmail.com',
      gitHub:'https://github.com/Jeba-Rachel-Nesica',
      linkIn:'https://www.linkedin.com/in/jeba-rachel-nesica-830202252',
      insta:'https://www.instagram.com/jeba__j4?igsh=MW9mempod3dtdWh5Zg=='
    },
    {
      id:109,
      src:img69,
      name:'R Pranav',
      post:'Mentor',
      dom:'AI domain',
      desc:'Hi!, I am Ragi Pranav, student CSE Department. I am passionate on Ai domain and I been working on a project on Credit Scoring using ML and AL. I have been assign in  Ai domain mentor and being assist with you',
      mail:'mailto:ragipranav24@gmail.com',
      gitHub:'https://github.com/PranavRagi',
      linkIn:'https://www.linkedin.com/in/pranav-ragi-799157260/',
      insta:''
    },
    {
      id:109,
      src:img73,
      name:'Jagaadhep U K',
      post:'Mentor',
      dom:'AI domain',
      desc:'Hi everyone! I’m Jagaadhep, a passionate coder and problem solver with a deep interest in Artificial Intelligence and Cloud Computing. I thrive on working with data and creating impactful applications. I am highly excited to collaborate, innovate, and learn together with all of you!',
      mail:'mailto:ukjag2000@gmail.com',
      gitHub:'https://github.com/UKJaagadhep',
      linkIn:'https://www.linkedin.com/in/jagaadhep-u-k-64487728a/',
      insta:''
    },
    {
      id:109,
      src:img00,
      name:'Doddi Sreenija Reddy',
      post:'Mentor ',
      dom:'AI domain',
      desc:'Doddi Sreenija Reddy is an undergraduate researcher and coder from the department of computer science and engineering primarily working on Machine learning, cloud computing and its applications.',
      mail:'mailto:sreenijadreddy@gmail.com',
      gitHub:'https://github.com/Doddi-Sreenija-Reddy',
      linkIn:'https://www.linkedin.com/in/doddi-sreenija-reddy-49575b258',
      insta:'https://www.instagram.com/sreenija_reddy/'
    },
    {
      id:109,
      src:img72,
      name:'Subramanian',
      post:'Mentor ',
      dom:'CYS domain',
      desc:"Hi there! I'm Subramanian, a competitive programmer and cybersecurity enthusiast. I'm here to help you elevate your understanding of technology and computing. I'll guide you in optimizing your algorithms from O(N^2) to O(N) and teach you how to apply 'Mr. Robot' style techniques in real life. I will help you add your skills, commit to learning, and push your progress with me!",
      mail:'mailto:vishnusubramani8@gmail.com',
      gitHub:'http://github.com/subra123',
      linkIn:'https://www.linkedin.com/in/subramanian-r-5b86bb215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      insta:'https://www.instagram.com/subramanian.r/'
    },
    {
      id:109,
      src:img00,
      name:'Keerthi Rohan',
      post:'Mentor ',
      dom:'CYS domain',
      desc:'Hello! I am Keerthi Rohan, a passionate and dedicated professional with machine learning, Python, and cybersecurity expertise. I have completed a project in image generation and segmentation and have undertaken several cybersecurity courses. I am always eager to learn new things and expand my knowledge in various fields.',
      mail:'mailto:rohan1234.keerthi@gmail.com',
      gitHub:'https://github.com/rancidghoul',
      linkIn:'https://www.linkedin.com/in/rohan-keerthi-31451625b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      insta:'https://www.instagram.com/w3.rohan/'
    },
    {
      id:109,
      src:img67,
      name:'Sreeram Rohith',
      post:'Mentor',
      dom:'CYS domain',
      desc:'I am Sreeram Rohith. Student from CSE. I have completed projects on the self-identity of mental health using AI and machine learning, as well as on image steganography. Additionally, I have a strong interest in the cybersecurity domain. As a mentor in the Cognizance Club at Amrita University Chennai.',
      mail:'mailto:sreeramrohithamrita@gmail.com',
      gitHub:'https://github.com/Sreeramrohith2005',
      linkIn:'https://www.linkedin.com/in/sreeram-rohith-449416262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      insta:'https://www.instagram.com/sreeramrohith5?igsh=bGloN3MzNG0wNW8w'
    },

    
    {
      id:109,
      src:img68,
      name:"Kaushik Kumbhat",
      post:"Mentor",
      dom:"CP Domain",
      desc:"As an enthusiastic Computer Science Engineering student at Amrita University, I have cultivated a passion for developing innovative software solutions that address real-world problems.",
      mail:"mailto:kaushikkumbhat54@gmail.com",
      gitHub:"https://github.com/kaushik54git",
      linkIn:"https://www.linkedin.com/in/kaushik-kumbhat-747a08292/",
      insta:""
    },
    {
      id:109,
      src:img66,
      name:"Adithiyan",
      post:"Mentor",
      dom:"CP Domain",
      desc:"Hi, I'm Adithiyan from the Artificial Intelligence and Engineering (AIE) department. I'm a dedicated self-taught programmer and a machine learning enthusiast. In my free time, I sharpen my problem-solving skills on LeetCode. My domains of interest lies in Full Stack development, Cloud services, and Computer vision.I am always eager to expand my knowledge and expertise in the widest domain of computer science.",
      mail:"mailto:adithiyan999@gmail.com",
      gitHub:"https://github.com/Adithiyanpv",
      linkIn:"https://www.linkedin.com/in/adithiyan-pv-68639b258/",
      insta:"https://www.instagram.com/adithiyan_pv/",
    },
    {
      id:109,
      src:img00,
      name:"Shyam",
      post:"Mentor",
      dom:"CP Domain",
      desc:"",
      mail:"mailto:",
      gitHub:"",
      linkIn:"",
      insta:""
    },

  ];


  // Teams Members Component

  return (
    <>
      <div className="contbg">
        <Navbar />

        <div className="team">
          {content.map((con) => (
            <Card
              key={con.id}
              src={con.src}
              name={con.name}
              post={con.post}
              dom={con.dom}
              desc={con.desc}
              mail={con.mail}
              gitHub={con.gitHub}
              linkedIn={con.linkIn}
              instagram={con.insta}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Team;
