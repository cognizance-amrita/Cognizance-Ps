import React from "react";
import Card from "./Card.js";
import "./Team.css";
import img1 from "../Images/DisplayPics/sreedevi.jpg";
import img2 from "../Images/DisplayPics/sanjay t.jpg";
// import img3 from "../Images/pranav.jpg";
import img4 from "../Images/DisplayPics/naresh.jpg";
import img5 from "../Images/DisplayPics/Siddharthan.jpg";
import img6 from "../Images/DisplayPics/Xavier.jpg";
import img7 from "../Images/DisplayPics/jayanth.jpg";
import img8 from "../Images/DisplayPics/Vishal.jpg";
import img9 from "../Images/DisplayPics/Aravind.jpg";
import img10 from "../Images/DisplayPics/Abishek.jpg";
import img11 from "../Images/DisplayPics/Manasa.jpg";
import img12 from "../Images/DisplayPics/Rohit Sah.jpg";
import img13 from "../Images/DisplayPics/Tejendra.jpg";
import img14 from "../Images/DisplayPics/Mukesh.jpg";
import img15 from "../Images/DisplayPics/Rohith ND.jpg";
import img16 from "../Images/DisplayPics/abhinandhan.jpg";
import img17 from "../Images/DisplayPics/Dhanvinesh.jpg";
import img18 from "../Images/DisplayPics/Aghilan.jpg";
import img19 from "../Images/DisplayPics/aparna.jpg";
import img20 from "../Images/DisplayPics/Rakshana.jpg";
import img21 from "../Images/DisplayPics/Shraddha.jpg";
import img22 from "../Images/DisplayPics/Shandila.jpg";
import img23 from "../Images/DisplayPics/yurekan.jpg";
import img24 from "../Images/DisplayPics/Rahul.jpg";
import img25 from "../Images/DisplayPics/Rishabh.jpg";
import img27 from "../Images/DisplayPics/Yogiraj.jpg";
import img28 from "../Images/DisplayPics/Charan Krishna.jpg";
import img29 from "../Images/DisplayPics/Vignesh.jpg";
import img30 from "../Images/DisplayPics/sudiptha.jpg";
import img31 from "../Images/DisplayPics/Aniket Mishra.jpg";
import img32 from "../Images/DisplayPics/Paritosh.jpg";
import Navbar from './../navbar/Navbar';
import Footer from "../Footer/Footer";
const Team = () => {

  // Team Members Data list

  let content = [
    {
      id: 1,
      src: img1,
      name: "Dr. A G Sreedevi",
      post: "Advisor",
      desc: "",
      mail: "",
      gitHub: "",
      linkIn: "",
      insta: "",
    },
    {
      id: 2,
      src: img2,
      name: "Sanjay T",
      post: "President",
      desc: "",
      mail: "",
      gitHub: "",
      linkIn: "",
      insta: "",
    },
    {
      id: 3,
      // src: img3,
      name: "V M Pranav",
      post: "Co-ordinator",
      dom: "Open Source",
      desc: "One of the co-ordinators of Open Source domain. Organizing and coordinating guest lectures, workshops, and hands-on sessions on cutting-edge Open Source technologies. Freshmen are given training in various competitions such as Hackathons and other Open Source competitions. Cross-platform development is something that has attracted me to Open Source.",
      mail: "pranavanmuraligai@gmail.com",
      gitHub: "https://github.com/Techipeeyon",
      linkIn: "https://www.linkedin.com/in/vadivelu-murali-pranavan-1b82551b3/",
      insta: "",
    },
    {
      id: 4,
      src: img4,
      name: "Naresh Kumar B",
      post: "Co-ordinator",
      dom: "Artificial Intelligence",
      desc: "I am Naresh Kumar, Co-ordinator of Artificial Domain in Cognizance. With the help of my mentors and coordinators, we were able to organize ML challenges, domain specific tasks, open-mic sessions. ",
      mail: "nk2indian@gmail.com",
      gitHub: "https://github.com/TechieNK",
      linkIn: "https://www.linkedin.com/in/naresh-kumar-1082b31ba/",
      insta: "",
    },
    {
      id: 5,
      src: img5,
      name: "Sidharth",
      post: "",
      dom: "",
      desc: "",
      mail: "",
      gitHub: "",
      linkIn: "",
      insta: "",
    },
    {
      id: 6,
      src: img6,
      name: "Xavier Emmanuel E",
      post: "Co-ordinator",
      dom: "Artificial Intelligence",
      desc: "I am the CO-ORDINATOR of AI Domain. I have been part of this club since 2020. I had mentored many students regarding this domain and created tasks which helps students to outshine in the field. Conducted ML challenges in various club activities. Gave an Open Mic Session on the topic 'What it takes to become Data Scientists'.",
      mail: "xavier12emmanuel@gmail.com",
      gitHub: "https://github.com/Xavier-Alfred",
      linkIn: "https://www.linkedin.com/in/xavier-emmanuel-287280201/",
      insta: "",
    },
    {
      id: 7,
      src: img7,
      name: "Jayanth Vikash S",
      post: "Mentor",
      dom: "Artificial Intelligence",
      desc: "I am one of the mentors of the AI Domain, and I'm interested in Computer Vision, Pattern Recognition.",
      mail: "jayanth082001@gmail.com",
      gitHub: "https://github.com/JayanthVikashS",
      linkIn: "https://www.linkedin.com/in/jayanth-vikash-s-2363221a8/",
      insta: "",
    },
    {
      id: 8,
      src: img8,
      name: "Vishal Perumal",
      post: "Mentor",
      dom: "Artificial Intelligence",
      desc: "I am one of the mentors of the AI Domain, and I'm interested in Machine Learning",
      mail: "vishal.pv22112@gmail.com",
      gitHub: "https://github.com/VishalPeruma1",
      linkIn: "https://www.linkedin.com/in/vishal-perumal/",
      insta: "https://www.instagram.com/vishal_22112/",
    },
    {
      id: 9,
      src: img9,
      name: "Aravind S",
      post: "Mentor",
      dom: "Open Source",
      desc: "A lively person with interest in web development and Data Science. Have worked in many front end web developments and some back end works too. Learning more about data science and have done some projects in Machine Learning to broaden the horizons.",
      mail: "sivasubramanianaravin@gmail.com",
      gitHub: "https://github.com/Aarvi001",
      linkIn: "https://www.linkedin.com/in/aravind-s-648ab0222/",
      insta: "https://www.instagram.com/aravind_the_kind/",
    },
    {
      id: 10,
      src: img10,
      name: "Abhishek",
      post: "Mentor",
      dom: "",
      desc: "",
      mail: "",
      gitHub: "",
      linkIn: "",
      insta: "",
    },
    {
      id: 11,
      src: img11,
      name: "A.S.L Manasa",
      post: "Mentor",
      dom: "Artificial Intelligence",
      desc: "My area of interest is front-end Development and Machine Learning. I like to explore things. I am passionate about designing, developing, and implementing software programs for organizational effectiveness. I seek challenging opportunities to enhance my programming and coding skills in emerging technologies.  I am someone with patience and superior communication skills.",
      mail: "aslmanasa3@gmail.com",
      gitHub: "https://github.com/ASLManasa",
      linkIn: "https://www.linkedin.com/in/a-s-l-manasa-ba8b371bb/",
      insta: "",
    },
    {
      id: 12,
      src: img12,
      name: "Rohith Kumar",
      post: "Mentor",
      dom: "",
      desc: "I am a computer enthusiast that focuses on front end design , UI/UX design , and data science, but I have been expanding my knowledge to include backend architecture.",
      mail: "sahrohit9586@gmail.com",
      gitHub: "https://github.com/sahrohit",
      linkIn: "https://www.linkedin.com/in/sahrohit/",
      insta: "https://www.instagram.com/sah_rohite/",
    },
    {
      id: 13,
      src: img13,
      name: "Tejendra Saradhi",
      post: "Co-ordinator",
      dom: "Cybersecurity",
      desc: "Cybersecurity Coordinator. I have been actively helping my peers to gain knowledge in various domains in Cybersecurity. ",
      mail: "",
      gitHub: "https://github.com/tejas15802",
      linkIn: "https://www.linkedin.com/in/tejendra-saradhi/",
      insta: "https://www.instagram.com/y_tejas_y/",
    },
    {
      id: 14,
      src: img14,
      name: "Mukesh K",
      post: "Co-ordinator",
      dom: "Open Source",
      desc: "One of the coordinators in Open-Source domain. My area of expertise includes machine learning and back-end development. I have worked with libraries and frameworks like TensorFlow, PyTorch, Flask, and Django. Currently working on computer vison and NLP based projects.",
      mail: "mukeshkvmj@gmail.com",
      gitHub: "https://github.com/mukesh663",
      linkIn: "https://www.linkedin.com/in/mukesh-k-4a4a0b1ba/",
      insta: "https://www.instagram.com/mukesh_k.13/",
    },
    {
      id: 15,
      src: img15,
      name: "Rohith ND",
      post: "Co-ordinator",
      dom: "Artificial Intelligence",
      desc: "I'm the AI domain coordinator, and I'm passionate about deep learning, Devops, and full stack development. I quite often write blogs on Hashnode.Having a vision of changing the future motivates and inspires me to do more in the coming days.",
      mail: "ndrohith09@gmail.com",
      gitHub: "https://github.com/ndrohith09",
      linkIn: "https://www.linkedin.com/in/rohith-nd/",
      insta: "https://www.instagram.com/rohithnd_09_09/",
    },
    {
      id: 16,
      src: img16,
      name: "Abhinandhan S",
      post: "Mentor",
      dom: "Open Source",
      desc: "",
      mail: "",
      gitHub: "https://github.com/STRIZERORTIX",
      linkIn: "",
      insta: "",
    },
    {
      id: 17,
      src: img17,
      name: "Dhanvinesh K",
      post: "Mentor",
      dom: "Open Source",
      desc: "I am Dhanvinesh pursuing BTech Computer Science with Cybersecurity specialization (3rd year). I am one of the mentors of Cybersecurity domain and also a member of Opensource. I have experience in UI design and I am a Full-stack developer. I've experience in working with frameworks like Django, Vue, Flask, Firebase and some more frameworks. I've experience in Web exploitation, Forensics, Networking, OSINT and some Cryptography and Penetration testing.",
      mail: "dhanvineshk2003@gmail.com",
      gitHub: "https://github.com/Reaper-Dhan",
      linkIn: "https://www.linkedin.com/in/reaperdhan",
      insta: "https://www.instagram.com/_.r34p3r_dhan._/",
    },
    {
      id: 18,
      src: img18,
      name: "Aghilan A",
      post: "Mentor",
      dom: "Cybersecurity",
      desc: "I joined the club when I was in first year and has been actively participating in the tasks and competitions related to Cybersecurity. Was given the mentor role and to my best knowledge provide support to the coordinators and the club.",
      mail: "aghilan.cuber@gmail.com",
      gitHub: "https://github.com/Aghilan-A",
      linkIn: "https://www.linkedin.com/in/aghilan-a-716521230/",
      insta: "",
    },
    {
      id: 19,
      src: img19,
      name: "Aparna Jayathirth",
      post: "Mentor",
      dom: "Artificial Intelligence",
      desc: "I have been a member of Cognizance since 2020. I am currently a mentor in the AI domain of the club. My area of interests includes Data Science and Machine Learning. I've published tasks in ML for the members to understand and learn the basics. I have also had the privilege to give an open mic session on 'Robotic Process Automation'. The club has played a predominant role in inculcating peer learning and leadership skills.",
      mail: "aparnajay02@gmail.com ",
      gitHub: "https://github.com/aparna8902",
      linkIn: "https://www.linkedin.com/in/aparna-jayathirth-4b45261b4/",
      insta: "https://www.instagram.com/aparna_jayathirth/",
    },
    {
      id: 20,
      src: img20,
      name: "Rakshana C",
      post: "Mentor",
      dom: "Artificial Intelligence",
      desc: "Myself Rakshana and am a member and mentor under the AI domain our AI domain provide many informative resources , Technical hackathons which will help you to gain some experience and knowledge in technical side. ",
      mail: "rakshanagiri@gmail.com",
      gitHub: "https://github.com/Rakshana2002",
      linkIn: "",
      insta: "https://www.instagram.com/rakshana_giri",
    },
    {
      id: 21,
      src: img21,
      name: "Shraddha Chopra",
      post: "Mentor",
      dom: "Cybersecurity",
      desc: "Image Forensics intrigued me in CTFs. Henceforth, started contributing to the cybersecurity domain. Gradually stepping into the world of Reverse Engineering.",
      mail: "shraddha5chopra@gmail.com",
      gitHub: "https://github.com/shraddha5chopra",
      linkIn: "https://www.linkedin.com/in/shraddha-chopra-57978b1b0/",
      insta: "https://www.instagram.com/_.__shraddha/",
    },
    {
      id: 22,
      src: img22,
      name: "Shandiladitya",
      post: "Mentor",
      dom: "",
      desc: "",
      mail: "",
      gitHub: "",
      linkIn: "",
      insta: "",
    },
    {
      id: 23,
      src: img23,
      name: "Yurekan R V",
      post: "Mentor",
      dom: "Artificial Intelligence",
      desc: "I'm member of cognizance club since 2020 and mentor of AI domain. My area of interests are Data Science, Deep Learning and Cloud Computing. I have created tasks based on ML, which helps students to have a basic understanding of ML. I've also given open mic session on topic 'Robotic Process Automation'.",
      mail: "yurekanramasamy@gmail.com",
      gitHub: "https://github.com/yurekan",
      linkIn: "https://www.linkedin.com/in/yurekan-ramasamy-b30397220/",
      insta: "https://www.instagram.com/yukes_21/",
    },
    {
      id: 24,
      src: img24,
      name: "Rahul Sreenivasan",
      post: "Mentor",
      dom: "Cybersecurity",
      desc: "I'm Rahul Sreenivasan from Cybersecurity - Batch 2020. I'm a mentor of Cognizance (Cybersecurity domain). I've experience in Reverse Engineering, Web Exploitations, Forensics and Cryptography. I've been participating in lots of CTFs and conferences for past 4-5.",
      mail: "rahulnov26@gmail.com",
      gitHub: "https://github.com/Tr0j4n1",
      linkIn: "https://www.linkedin.com/in/rahul-sreenivasan-aa9293215",
      insta: "https://instagram.com/__.r4hul___",
    },
    {
      id: 25,
      src: img25,
      name: "Rishabh Rajput",
      post: "Mentor",
      dom: "Open Source",
      desc: "I am a mentor for the Open Source Domain. My areas of expertise include Machine Learning and Backend Development (Python). Our goal at Open Source Domain is to improve our Web and App Development skills. Please contact me if you require any assistance with this.",
      mail: "rajputrishabh608@gmail.com",
      gitHub: "https://github.com/rishabh1402",
      linkIn: "https://www.linkedin.com/in/rishabh-rajput-714a31208/",
      insta: "https://www.instagram.com/rishabh_rajput_02",
    },
    {
      id: 27,
      src: img27,
      name: "Bhagavatula Yogiraj",
      post: "Mentor",
      dom: "Artificial Intelligence",
      desc: "This is Bhagavatula Yogiraj. I am currently working as a mentor in AI domain in Cognizance club. ",
      mail: "yogi28bhagavatula@gmail.com",
      gitHub: "https://github.com/Yogiraj587",
      linkIn: "https://www.linkedin.com/in/yogiraj-bhagavatula-741159213/",
      insta: "https://www.instagram.com/yogirajbhagavatula/",
    },
    {
      id: 28,
      src: img28,
      name: "Yellapragada Charan Krish",
      post: "Mentor",
      dom: "",
      desc: "",
      mail: "",
      gitHub: "https://github.com/ycharankrishna",
      linkIn: "www.linkedin.com/in/yellapragada-charan-krishna",
      insta: "",
    },
    {
      id: 29,
      src: img29,
      name: "Vignesh Kumar",
      post: "Mentor",
      dom: "Open Source",
      desc: "I am Vignesh kumar from Cseb 2nd year(completed) and I am in the open source domain ,since April 2021 . It's been a wonderful journey in this club . Now I am the mentor of Opensource club from the May month . The domains I work into are Opensource, and also currently exploring blockchain technologies.",
      mail: "rrvigneshkumar2002@gmail.com",
      gitHub: "https://github.com/cool-man-vk",
      linkIn: "https://www.linkedin.com/in/vignesh-kumar-8101581b0/",
      insta: "https://www.instagram.com/cool_man_vk/",
    },
    {
      id: 30,
      src: img30,
      name: "Sudiptha",
      post: "Mentor",
      dom: "Open Source",
      desc: "Hello!  I have been part of the Open Source domain of Cognizance for more than a year now.  Completing the tasks on various topics outside of the curriculum helps me upskill myself. Being a mentor gives me the pleasure of guiding my fellow club members. ",
      mail: "sudipthawilma@gmail.com",
      gitHub: "https://github.com/sudipthaa",
      linkIn: "https://www.linkedin.com/in/sudiptha-athmaraman-060135202",
      insta: "https://www.instagram.com/sudiptha_reddy",
    },
    {
      id: 31,
      src: img31,
      name: "Aniket Mishra",
      post: "Mentor",
      dom: "Open Source",
      desc: "I belong to CSE -Cyber Security department and I am a member and mentor of Open Source Domain in the Club, and I work in the domains of Web Dev, CP and ML.",
      mail: "mishraaniket522@gmail.com",
      gitHub: "https://github.com/AnIkeT126",
      linkIn: "https://www.linkedin.com/in/aniket-mishra-125ab421b",
      insta: "https://www.instagram.com/_mishra_aniket/",
    },
    {
      id: 32,
      src: img32,
      name: "Paritosh Joshi",
      post: "Mentor",
      dom: "Open Source",
      desc: "I'm a constant-fast-paced learner who believes in teamwork and keen to work in team. My current domain of work is Open Source.",
      mail: "paritoshj2001@gmail.com",
      gitHub: "https://github.com/Paritosh-J",
      linkIn: "https://www.linkedin.com/in/paritosh-j",
      insta: "https://www.instagram.com/paritoshj_/",
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
