import meet from './img/meet.jpg'
import shubh from './img/shubh.jpg'
import akshat from './img/akshat.jpg'
import rupal from './img/rupal.jpg'
import sandeep from './img/sandeep.jpg'
import rishita from './img/rishita.jpg'
import harshita from './img/harshita.jpg'
import prachi from './img/prachi.jpg'
import sehej from './img/sehej.jpg'

import first from './img/1.png'
import second from './img/2.png'
import third from './img/3.png'
import fourth from './img/4.png'
import fifth from './img/5.png'
import sixth from './img/6.png'

const studentData = [
  { 
    name: 'Meet Bikhani', 
    designation: 'President',
    image: meet ,
    link:'http://www.linkedin.com/in/meetbikhani' ,
    discription: `Hi everyone! I'm Meet Bikhani, President of the Software Development Club. Committed to lifelong learning, I lead with a focus on teamwork and effective event planning. My expertise spans Machine Learning and Frontend Programming, dedicated to ensuring our club's success through impactful projects.` ,
  },
  { 
    name: 'Shubh Gupta', 
    designation: 'Vice-President',
    image: shubh ,
    link:'http://linkedin.com/in/ishubhgupta' ,
    discription: `Hey, I'm dedicated machine learning enthusiast and student at VIT Bhopal University. With a passion for contributing to the advancements in artificial intelligence, I aspires to make a meaningful impact in the rapidly evolving field of AI.` ,
  },
  { 
    name: 'Akshat Rastogi', 
    designation: 'Treasurer',
    image: akshat ,
    link:'https://www.linkedin.com/in/akshat-rastogi-000000660000000006/' ,
    discription: `Hello all! I'm Akshat Rastogi, a second-year college student deeply engrossed in AIML web development and research, fluent in coding with CPP, Java, and Python. As the Treasurer of the SDC club, I merge my tech-savvy skills with a passion for innovative solutions. Let's delve into the world of tech together!
    ` ,
  },
  { 
    name: 'Rupal Mishra', 
    designation: 'Secretary',
    image: rupal ,
    link:'https://www.linkedin.com/in/rupal-m-1478461b1/' ,
    discription: `Hi, I'm Rupal Mishra, a second-year college student into UI/UX design and AIML research. As SDC club Secretary, I merge creativity with tech for innovative solutions. Eager to connect and explore new frontiers with you!` ,
  },
  { 
    name: 'Sandeep Balabantaray', 
    designation: 'Joint Secretary',
    image: sandeep ,
    link:'https://www.linkedin.com/in/sandeep-balabantaray-69b60221b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' ,
    discription: `Hello! I'm Sandeep Balabantaray, joint secretary of Software Development Club. I'm passionate about AIML and App development, blending data science with mobile applications. My journey revolves around innovative solutions, showcasing my dedication to technology.` ,
  },
  { 
    name: 'Rishita Arora', 
    designation: 'Coordinator',
    image: rishita ,
    link:'https://www.linkedin.com/in/rishita-arora-282882250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' ,
    discription: `I'm Rishita Arora, SDC club Coordinator. Passionate about learning, I'm devoted to enhancing our software development club. Aspiring for managerial excellence, I'm dedicated to optimizing performance through collaborative efforts and efficient event coordination.` ,
  },
  { 
    name: 'Harshita Jangde', 
    designation: 'Sub-Coordinator',
    image: harshita ,
    link:'https://www.linkedin.com/in/harshita-jangde-b57520260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' ,
    discription: `Hello everyone, I'm Harshita Jangde, a diligent individual passionate about software development and Machine Learning. Eager to contribute as a sub-coordinator, I'm dedicated to working tirelessly to support our club's initiatives, striving to ensure seamless events and fostering a collaborative environment.` ,
  },
  { 
    name: 'Prachi Tavse', 
    designation: 'Manager',
    image: prachi ,
    link:'https://www.linkedin.com/in/prachi-tavse-32072a250/' ,
    discription: `Hello everyone, I am Prachi Tavse, SDC club's Manager, someone who's always eager to learn and dedicated to supporting our software development club. I'm committed to giving my best to help drive our club's success through teamwork and effective event management. 
    ` ,
  },
  { 
    name: 'Sahejpreet Kaur', 
    designation: 'Sub-Manager',
    image: sehej ,
    link:'https://www.linkedin.com/in/sahejpreet-kaur-214b35251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' ,
    discription: `Hello, I'm Sahejpreet Kaur, an enthusiastic individual with a strong work ethic, eager to contribute as a sub-manager in our software development club. I'm dedicated to working diligently for the club's success, assisting in organizing events and fostering a collaborative environment for our members.` ,
  },
  
];

const facultyData = [
  { 
    name: 'Dr. PRAVEEN LALWANI', 
    image: 'https://vitbhopal.ac.in/file/2021/06/Dr.-Praveen-Lalwani_C.jpg' ,
    discription: 'Dr. Praveen Lalwani is an Assistant Professor in School of Computing Science & Engineering, VIT Bhopal University, India. He completed his PhD from the Department of Computer Science & Engineering, IIT (ISM) Dhanbad in 2018. His research interests include Cyber Security and Digital Forensics.' ,
  },
  { 
    name: 'Dr. Shweta Saxena', 
    image: 'https://vitbhopal.ac.in/file/2021/07/Shweta-Saxena__C.jpg' ,
    discription: 'Dr. Shweta Saxena is a Doctorate from Maulana Azad National Institute of Technology (MANIT) and M.Tech in Computer Science & Engineering from Rajiv Gandhi Proudyougiki Vishwavidhyalaya Bhopal. She has worked as Assistant Professor in top engineering colleges including MANIT, Bhopal. Her areas of interest are machine learning, image processing, and health informatics.' ,
  }
];

const whysdc = [
  { 
    heading: 'Career Building', 
    image: first ,
    discription: `Dedicated to enhancing student's career development, we prioritize skill-building to elevate their professional growth` ,
  },
  { 
    heading: 'Collaborative Learning', 
    image: second ,
    discription: 'Students collaborate, exchange insights, and engage in a variety of software projects, instigate a learning environment.' ,
  },
  { 
    heading: 'Networking Opportunities', 
    image: third ,
    discription: 'Opens doors to networking with like-minded peers, industry professionals, and mentors, aiding future career prospects' ,
  },
  { 
    heading: 'Creativity', 
    image: fourth ,
    discription: 'Helps think creatively, develop solutions to real-world problems, fostering a crucial mindset in software development' ,
  },
  { 
    heading: 'Industry Exposure', 
    image: fifth ,
    discription: 'Through workshops, seminars, and guest lectures, the club provides insights into the latest industry trends' ,
  },
  { 
    heading: 'Boost Knowledge', 
    image: sixth ,
    discription: 'Empowering students by providing accessible resources to excel in their field and enhance their knowledge base' ,
  },
];

export { studentData, facultyData, whysdc };
