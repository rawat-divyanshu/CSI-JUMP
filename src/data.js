// People Category Section imports
import One from "./Assets/images/one.png";
import Two from "./Assets/images/two.png";
import Three from "./Assets/images/three.png";

// Program Motto imports
import Aim1 from "./Assets/images/aim-1.svg";
import Aim2 from "./Assets/images/aim-2.svg";
import Aim3 from "./Assets/images/aim-3.svg";
import Aim4 from "./Assets/images/aim-4.svg";

// Learning Stacks Section Imports

import FrontEndStackImg from "./Assets/images/frontendstackimg.jpeg";
import BackEndStackImg from "./Assets/images/backendstackimg.jpg";
import MLStackImg from "./Assets/images/mlstackimg.jpg";
import DSStackImg from "./Assets/images/dsstackimg.jpg";
import CPStackImg from "./Assets/images/cpstackimg.png";
import GameDevStackImg from "./Assets/images/gamedevstackimg.png";
import FlutterStackImg from "./Assets/images/flutterstackimg.jpg";
import OSStackImg from "./Assets/images/osstackimg.png";

export const navItems = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Events", link: "/events" },
  { id: 3, title: "Gallery", link: "/gallery" },
  { id: 4, title: "Our Team", link: "/our-team" },
  { id: 5, title: "Contact Us", link: "/contact-us" },
];

export const selectionCategoryDetails = [
  {
    id: 1,
    title: "L1 Learners",
    description:
      "These will be the students from 1st year, who'll start from basics of everything and will later move to field specific learning.",
    img: One,
  },
  {
    id: 2,
    title: "L2 Learners",
    description:
      "These will be students from 2nd and 3rd year who wish to learn something specific to a field.",
    img: Two,
  },
  {
    id: 3,
    title: "Mentors",
    description:
      "These will be the students from 2nd, 3rd and final year working in some particular field with some good amount of knowledge.",
    img: Three,
  },
];

export const programMottoDetails = [
  {
    id: 1,
    desc:
      "Early start for 1st year students to get familiar with the technologies, giving them enough time to pick their interests.",
    img: Aim1,
  },
  {
    id: 2,
    desc:
      "Working together will give a sense of working as a community. Since, people with similar interests will be working together.",
    img: Aim3,
  },
  {
    id: 3,
    desc:
      "Being continuosuly mentored by Seniors, will create a swift channel of communication and interaction between Seniors and Juniors.",
    img: Aim2,
  },
  {
    id: 4,
    desc:
      "Mentors will get chance to show off their leadership skills. Also if they feel a bit underconfident about it, it'll help to enhance it.",
    img: Aim4,
  },
];

export const learningStackDetails = [
  {
    id: 1,
    title: "Front End Development",
    desc:
      "Front-end web development is the practice of converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.",
    img: FrontEndStackImg,
  },
  {
    id: 2,
    title: "Back End Development",
    desc: `Back-end Development refers to the server-side development. It is the term used for the behind-the-scenes activities that happen when performing any action on a website.`,
    img: BackEndStackImg,
  },
  {
    id: 3,
    title: "Machine Learning",
    desc: `Machine learning is an application of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed.`,
    img: MLStackImg,
  },
  {
    id: 4,
    title: "Data Science",
    desc:
      "Data science is an inter-disciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from many structural and unstructured data.",
    img: DSStackImg,
  },
  {
    id: 5,
    title: "Competitive Programming",
    desc:
      "Competitive programming is a mind sport usually held over the Internet or a local network, involving participants trying to program according to provided specifications. It is referred as Programmers Sport.",
    img: CPStackImg,
  },
  {
    id: 6,
    title: "Mobile App Development using Flutter",
    desc:
      "Flutter is an open-source UI software development kit created by Google. It is used to develop applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase.",
    img: FlutterStackImg,
  },
  {
    id: 7,
    title: "Game Development",
    desc:
      "Game Development is the art of creating games and describes the design, development and release of a game. It may involve concept generation, design, build, test and release.",
    img: GameDevStackImg,
  },
  {
    id: 8,
    title: "Open Source Development",
    desc:
      "Open-source software development is the process by which open-source software, or similar software whose source code is publicly available, is developed by an open-source software project.",
    img: OSStackImg,
  },
];

export const qnaDetails = [
  {
    id: 1,
    que: "Is their any fee or charges for being part of this program ?",
    ans: `Their is no as such charges for being part of the program. The only required condition is you have to avail CSI membership`,
  },
  {
    id: 2,
    que:
      "Is this program a part of curriculum ? Will we get any credits for being part of it ?",
    ans:
      "No this program is not part of college curriculum. This event is solely managed by CSI - BIT Jaipur and aims for better technological understandings of the students.",
  },
  {
    id: 3,
    que: "Will their be any exam for Learning Stack Selection ?",
    ans:
      "Yes, for L1 Learners Phase 1 will have no exam, since they'll be guided regarding basics in that Phase. After the end of Phase 1, L1 Learners will have a exam, and based on results of it, they'll be allotted some stack.\n \nFor L2 Learners they'll have a exam before starting of Phase 1, based on results of it, they'll be allotted particular learning stack.",
  },
  {
    id: 4,
    que: "Can I go for any number of Learning Stacks ?",
    ans:
      "During the program you'll be obviously introduced to what each and every stack significances are, but at last in the learning phase, you'll only be allowed to be part of maximum 2 stacks of your choice.",
  },
  {
    id: 5,
    que: "Will I get any certificate for being part of the program ?",
    ans:
      "This program is purely result oriented, if you haven't tried to perform in the program or you didn't remain active, you'll not be alloted certificate.\n \nYes, the active participants of the programs will be provided certificates from CSI - BIT Jaipur.",
  },
];
