import React from "react";
import Card from "./Card.js";
import "./Team.css";
import img00 from "../Images/DisplayPics/00.jpg";
import img1 from "../Images/DisplayPics/1.jpg";
import img34 from "../Images/DisplayPics/34.jpeg";
// import img35 from "../Images/DisplayPics/35.jpg";
import img36 from "../Images/DisplayPics/36.jpg";
import img37 from "../Images/DisplayPics/37.jpg";
import img38 from "../Images/DisplayPics/38.jpg";
import img40 from "../Images/DisplayPics/40.jpg";
import img41 from "../Images/DisplayPics/41.jpg";
import img44 from "../Images/DisplayPics/44.jpg";
import img49 from '../Images/DisplayPics/49.jpg';
import img50 from '../Images/DisplayPics/50.jpg';
import img51 from '../Images/DisplayPics/51.jpg';
import img53 from "../Images/DisplayPics/53.jpeg";
import img54 from "../Images/DisplayPics/54.jpg";
import img55 from "../Images/DisplayPics/55.jpg";
import img56 from "../Images/DisplayPics/56.jpg";
import img57 from "../Images/DisplayPics/57.jpg";
import img58 from "../Images/DisplayPics/58.jpg";
import img59 from "../Images/DisplayPics/59.jpg";
import img60 from "../Images/DisplayPics/60.jpg";
import img61 from "../Images/DisplayPics/61.jpg";
import img62 from "../Images/DisplayPics/62.jpg";
import img63 from "../Images/DisplayPics/63.jpg";
import img64 from "../Images/DisplayPics/64.jpg";
import img65 from "../Images/DisplayPics/65.jpg";
import Navbar from './../navbar/Navbar';
import Footer from "../Footer/Footer";
const Team = () => {

  // Team Members Data list

  let content = [
    {
      id: 1,
      src: img1,
      name: "Dr. A G Sreedevi",
      post: " Club Advisor ",
      // dom: "",
      desc: "Dr. Sreedevi A. G. currently serves as Program Head of Cyber Security in the Department of Computer Science and Engineering, Amrita School of Computing, Amrita Vishwa Vidyapeetham, Chennai Campus.",
      mail: "",
      gitHub: "",
      linkIn: "",
      insta: "",
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
      id: 100,
      src: img37,
      name:" Skandha VS",
      post: 'Club Lead',
      dom: '',
      desc : 'Hi. I was one of the coordinators of the Open Source Domain. I have been a member of Cognizance in both the AI and OS domains before becoming a coordiantor. My interests include Web Development and Machine Learning.',
      mail: " ",
      gitHub: '',
      linkIn: '',
      insta: '',
    },{
      id:122,
      src:img53,
      name:'Amirthavarshini V',
      post:'Club Lead',
      dom:'',
      desc:"Hello, I am Amirthavarshini V from 2nd year AIE. I've been a member of the AI and OS domain of cognizance for over a year now. My interests lie in Machine learning, NLP and web development.",
      mail:'mailto:amirtha.venkadesh@gmail.com',
      gitHub:'https://github.com/Amirtha2503',
      linkIn:'https://www.linkedin.com/in/amirthavarshini-v-a89520223/',
      insta:'https://www.instagram.com/_amirtha_v',

    },    
    {
      id:99,
      src:img38,
      name:"Umme Rooman",
      post:"Co-ordinator",
      dom:"Open Source Domain",
      desc: "Hi! I am Umme. I have been a part of the cyber security domain for a year and the open source domain for more than 3 months. My experience as a mentor in the open source domain has developed my organisational skills and has increased my curiousity in the evergrowing field of web development. My other domains of interest include web security and data analysis.",
      mail:"mailto:ummeroomanwahab@gmail.com",
      gitHub:"https://github.com/ummerooman",
      linkIn:"https://www.linkedin.com/in/umme-rooman-wahab",
      insta:"",
    },
    

     {
      id:121,
      src:img51,
      name:'Moulika Sai',
      post:'Mentor',
      dom:'Open Source Domain',
      desc:'I am Moulika, a second-year Btech Computer Science student. I am one of the OS domain\'s mentors. My areas of interest include front-end development and machine learning. I would really like to work in this field, learn more about it, and enhance my understanding of it.',
      mail:"mailto:moulikasai183@gmail.com",
      gitHub:"https://github.com/moulika183",
      linkIn:"https://www.linkedin.com/in/moulika-sai-b472ab257",
      insta:"https://instagram.com/moulika_sai_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",  
      

    },
    {
      id:121,
      src:img65,
      name:'Nehal Khan',
      post:'Mentor',
      dom:'Open Source Domain',
      desc:'Hi! Im Nehal Khan, student in CSE department, Im a passionate coder with a keen interest in Operating Systems and Artificial Intelligence. I thrive on the thrill of open-source projects, turning lines of code into innovative realities.',
      mail:"",
      gitHub:"https://github.com/Nehal-Khan-29",
      linkIn:"https://www.linkedin.com/in/nehal-khan-29--",
      insta:"https://www.instagram.com/nk29_nehal/?igshid=ODhmNDk1YzU=",  
      

    },
    
    {
      id: 90,
      src: img40,
      name: "Manasa",
      post: "Mentor",
      dom: "Open Source Domain",
      desc: "I have been a member of the cognizance club for about a year now. I am a curious person and I like experimenting with stuff apart from the curriculum. I have a little exposure to libraries and frameworks. This club has kindled my interest in various areas in my domain and being a mentor impels me to learn more.",
      
      mail:'',
      gitHub:'',
      linkIn:'',
      insta:'',
          
    },
    {
      id:109,
      src:img63,
      name:'Jahnavi',
      post:'Mentor  ',
      dom:'OS domain',
      desc:'Im Jahnavi, a third-year CSE student. I serve as an open-source mentor, my areas of interest include Web development, Machine learning and UI/UX designing. Being a mentor helps me grow with my fellow members, help them and improve myself at the same time.',
      mail:'mailto:ch.en.u4cse21146@ch.students.amrita.edu',
      gitHub:'https://github.com/Jahnavii25',
      linkIn:'https://www.linkedin.com/in/p-jahnavi-681964288',
      insta:''
    },
    {
      id:109,
      src:img54,
      name:'Jai Chiranjeeva Dadi',
      post:'Coordinator ',
      dom:'CP domain',
      desc:'',
      mail:'mailto:ch.en.u4cse21122@ch.students.amrita.edu',
      gitHub:'https://www.github.com/jaichiranjeeva',
      linkIn:'https://www.linkedin.com/in/jaichiranjeeva91',
      insta:'https://www.instagram.com/_jai91/'
    },
    {
      id:109,
      src:img55,
      name:'Shaik Nazeer ',
      post:'Coordinator ',
      dom:'CP domain',
      desc:'I am shaik nazeer, a 3 rd year undergrad pursuing computer science engineering  from Amrita Vishwa vidyapeetham Chennai ,As a coordinator at Cognizance Amrita, I support and guide students who want to enhance their coding and problem-solving skills, using platforms such as Code Chef and Hacker Rank. I have achieved a 3-star rating on Code Chef and a 5-star rating on Hacker Rank, demonstrating my proficiency and passion for competitive coding. ',
      mail:'mailto:ch.en.u4cse21161@ch.students.amrita.edu',
      gitHub:'https://github.com/nazeer-18',
      linkIn:'https://www.linkedin.com/in/shaik-nazeer-798243216/',
      insta:'https://www.instagram.com/nazeer._.14/'
    },
    {
      id:109,
      src:img58,
      name:'Abhijith Prakash ',
      post:'Mentor ',
      dom:'CP domain',
      desc:'',
      mail:'mailto:prakash.abhijith23@gmail.com',
      gitHub:'http://GitHub.com/IndexPosition',
      linkIn:'http://linkedin.com/in/abhijithprakash2003',
      insta:'http://instagram.com/bluehostile/'
    },
    {
      id:109,
      src:img57,
      name:'Harine Vidyasekaran ',
      post:'Mentor ',
      dom:'CP domain',
      desc:'Hey, Im Harine- from CSE 3rd year. I am a mentor in the Competitive programming domain. I am passionate about Entrepreneurship and my dream is to launch a successful startup. Im also enthusiastic about coding and- just life in general.',
      mail:'mailto:ch.en.u4cse21121@ch.students.amrita.edu',
      gitHub:'https://github.com/Harine19',
      linkIn:'https://www.linkedin.com/in/harine-vidyasekaran/',
      insta:''
    },
    {
      id:109,
      src:img49,
      name:'Priyanshu Aggarwal',
      post:'Coordinator ',
      dom:'CYS domain',
      desc:'I am a Coordinator in the CYS domain in Cognizance. I am interested in Competitions of all kinds and have participated in many of them in my time here. I am a keen learner and explorer, very interested to get to know about new things. As a mentor, I would love to help you to my best of capabilities regarding any problems you approach me with, while any friendly conversations are also welcome.',
      mail:'',
      gitHub:'',
      linkIn:'',
      insta:''
    },
    {
      id:109,
      src:img62,
      name:'Raj Shah Rauniyar',
      post:'Mentor ',
      dom:'CYS domain',
      desc:'Hello there, Im Raj from the CSE department, currently in my 3rd year. Im a mentor for the CYS domain. My areas of interest include web development, competitive programming, AI, and ML.',
      mail:'mailto:artrauniyar1@gmail.com',
      gitHub:'https://github.com/art-rauniyar',
      linkIn:'https://www.linkedin.com/in/raj-sah-rauniyar',
      insta:'https://instagram.com/art.rauniyar'
    },
    {
      id:109,
      src:img60,
      name:'Aman Kshetri',
      post:'Mentor ',
      dom:'CYS domain',
      desc:'Hey there, I am Aman Kshetri from 3rd year CSE Department. I am one of the mentors for the Cyber Security Domain in Cognizance Amrita. My areas of interest include: Web Development, AI, Machine Learning and DSA. Being a mentor includes giving tasks to members in the domain, maintaining a good relation with the members and to help them clear the doubts. Always feel free to ping me if you want to connect.',
      mail:'mailto:chhetryaman3@gmail.com',
      gitHub:'github.com/aman-chhetri',
      linkIn:'https://www.linkedin.com/in/amankshetri',
      insta:'instagram.com/aman_chhetry'
    },
    {
      id:109,
      src:img64,
      name:'Sanjay K',
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
      name:'Prithi G',
      post:'Mentor ',
      dom:'CYS domain',
      desc:'I am a Mentor in the Competitive Programming domain in Cognizance. I am interested in Competitions of all kinds and have participated in many of them in my time here. I am a keen learner and explorer, very interested to get to know about new things. As a mentor, I would love to help you to my best of capabilities regarding any problems you approach me with, while any friendly conversations are also welcome.',
      mail:'',
      gitHub:'',
      linkIn:'',
      insta:''
    },

    
    {
      id:85,
      src:img41,
      name:"Sahana",
      post:"Co-ordinator",
      dom:"Artificial Intelligence Domain",
      desc:"I am one of the coordinators of AI domain. My areas of interest include blockchain, quantum computing and AI.I am also working on solidity and smart contracts.I have recently worked on a project with quantum noise models using qiskit which is about finding the best test accuracy using one or more QML algorithms under the effect of noise.",
      mail:"",
      gitHub:"",
      linkIn:"",
      insta:""
    },
    {
      id: 32,
      src: img34,
      name: "Priyanka Saraf",
      post: "Coordinator",
      dom: "Artificial Intelligence Domain",
      desc: "I am Priyanka Saraf from CSE, who is always excited to work and learn new things. I am into AI Domain. This domain match my interest and helps me to explore new things and learn exciting things. I enjoy the participation into open mic session which is organized in cognizance  as it helps me to grab technical and non technical aspects of world. Before joining to the club, I was knowing not much about technology and programming but this club provided me the platform to learn and explore so many things in tech.a",
      mail: "mailto:sarafpriyanka73737@gmail.com",
      gitHub: "https://github.com/Priyanka7777777",
      linkIn: "http://www.linkedin.com/in/priyanka-saraf-10116a235",
      insta: "https://www.instragram.com/priyanka.saraf.7583",
    },
    {
      id: 32,
      src: img36,
      name: "Viswanathan V",
      post: "Mentor",
      dom: "Artificial Intelligence Domain",
      desc: "Hi, I'm Viswanathan, Coordinator and mentor of the Artificial Intelligence domain in Cognizance. I'm studying Btech Computer Science (Artificial Intelligence specialization). I'm a very fun and curious person and I like to explore the field of computer science far and wide ! I'm passionate about ML, automations, NLP and game development.",
      mail: "mailto:strawberryshakelite@gmail.com",
      gitHub: "https://github.com/LiteShake",
      linkIn: "https://www.linkedin.com/in/viswanathan-v-880427222/",
      insta: "https://www.instagram.com/liteshake",
    },
    {
      id: 88,
      src:img44,
      name:"Geethika",
      post:"Mentor",
      dom:"Artificial Intelligence Domain",
      desc:"I am Geethika of AIE 2nd year .I am interested in projects related to ML and deep learning, web development etc. My technical skills include C, JAVA, PYTHON and front end development. I have recently participated in some of the hackathons like smart digital hackathon",
      mail:"",
      gitHub:"",
      linkIn:"",
      insta:"",
    },
    {
      id: 88,
      src:img61,
      name:"Abhay Nanduri",
      post:"Mentor",
      dom:"Artificial Intelligence Domain",
      desc:"Hello Abhay! It's fantastic to connect with an AI and ML enthusiast like you. The world of artificial intelligence and machine learning is incredibly dynamic and holds the potential to reshape industries, solve complex problems, and unlock new frontiers of technology. Stay curious and keep exploring the exciting possibilities that AI and ML offer!",
      mail:"mailto:ap279146@gmail.com",
      gitHub:"",
      linkIn:"https://www.linkedin.com/in/abhay-nanduri-b866b423a/",
      insta:"",
    },
    {
      id: 88,
      src:img56,
      name:"Pranshul Atri",
      post:"Mentor",
      dom:"Artificial Intelligence Domain",
      desc:"",
      mail:"",
      gitHub:"",
      linkIn:"",
      insta:"",
    },
    {
      id: 88,
      src:img59,
      name:"Shalini Dheenadhayalan",
      post:"Mentor",
      dom:"Artificial Intelligence Domain",
      desc:"Hi , I'm Shalini of the AIE department. I enjoy being the mentor of AI cognizance and have a keen interest in AI and machine learning. Sharing knowledge with others is something I truly appreciate.",
      mail:"mailto:ch.en.u4aie22056@ch.students.amrita.edu",
      gitHub:"https://github.com/ShaluDeen",
      linkIn:"https://www.linkedin.com/in/shalini-dheena-dhayalan-54b040267/",
      insta:"https://instagram.com/shalu_deen_?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D",
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
