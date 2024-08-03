import React from "react";
import Card from "./Card.js";
import "./Team.css";
import img00 from "../Images/DisplayPics/00.jpg";
import img50 from '../Images/DisplayPics/50.jpg';
import img65 from "../Images/DisplayPics/65.jpg";
import img66 from "../Images/DisplayPics/66.jpg";
import img67 from "../Images/DisplayPics/67.jpg";
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
      mail:'therohitprasanna@gmail.com',
      gitHub:'https://github.com/Rohit-Prasanna',
      linkIn:'https://www.linkedin.com/in/rohit-prasanna-aka-rp/',
      insta:'https://www.instagram.com/r.p_0102?igsh=MTBwbWRlMXlneWU0dA==',
          
    },
    {
      id:99,
      src:img00,
      name:'Meesala Jahnavi',
      post:'Mentor',
      dom:'Open Source domain',
      desc:'',
      mail:'',
      gitHub:'',
      linkIn:'',
      insta:''
    },
    {
      id:121,
      src:img00,
      name:"Neelraj Reddy",
      post:"Mentor",
      dom:"Open Source Domain",
      desc:"",
      mail:"",
      gitHub:"",
      linkIn:"",
      insta:""
    },
    {
      id:121,
      src:img00,
      name:'Manasa',
      post:'Mentor',
      dom:'AI domain',
      desc:'',
      mail:'',
      gitHub:'',
      linkIn:'',
      insta:''
    },
    {
      id: 90,
      src:img59,
      name:"Shalini Dheenadhayalan",
      post:"Mentor",
      dom:"AI Domain",
      desc:"Hi , I'm Shalini of the AIE department. I enjoy being the mentor of AI cognizance and have a keen interest in AI and machine learning. Sharing knowledge with others is something I truly appreciate.",
      mail:"mailto:ch.en.u4aie22056@ch.students.amrita.edu",
      gitHub:"https://github.com/ShaluDeen",
      linkIn:"https://www.linkedin.com/in/shalini-dheena-dhayalan-54b040267/",
      insta:"https://instagram.com/shalu_deen_?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D",
    },
    {
      id:109,
      src:img00,
      name:'Jeba',
      post:'Mentor ',
      dom:'AI domain',
      desc:'',
      mail:'',
      gitHub:'',
      linkIn:'',
      insta:''
    },
    {
      id:109,
      src:img00,
      name:'Ragi Pranav',
      post:'Mentor',
      dom:'AI domain',
      desc:'',
      mail:'',
      gitHub:'',
      linkIn:'',
      insta:''
    },
    {
      id:109,
      src:img00,
      name:'Jagadeep',
      post:'Mentor',
      dom:'AI domain',
      desc:'',
      mail:'',
      gitHub:'',
      linkIn:'',
      insta:''
    },
    {
      id:109,
      src:img00,
      name:'Sreenija',
      post:'Mentor ',
      dom:'AI domain',
      desc:'',
      mail:'',
      gitHub:'',
      linkIn:'',
      insta:''
    },
    {
      id:109,
      src:img00,
      name:'Subramanian',
      post:'Mentor ',
      dom:'CYS domain',
      desc:'',
      mail:'',
      gitHub:'',
      linkIn:'',
      insta:''
    },
    {
      id:109,
      src:img00,
      name:'Keerthi Rohan',
      post:'Mentor ',
      dom:'CYS domain',
      desc:'',
      mail:'',
      gitHub:'',
      linkIn:'',
      insta:''
    },
    {
      id:109,
      src:img67,
      name:'Sreeram Rohith',
      post:'Mentor',
      dom:'CYS domain',
      desc:'',
      mail:'',
      gitHub:'',
      linkIn:'',
      insta:''
    },

    
    {
      id:109,
      src:img00,
      name:"Kaushik Kumbhat",
      post:"Mentor",
      dom:"CP Domain",
      desc:"",
      mail:"",
      gitHub:"",
      linkIn:"",
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
      mail:"",
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
