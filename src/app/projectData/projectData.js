import giftr from 'assets/images/giftr.png';
import findFace from 'assets/images/facefind.png';
import robofriends from 'assets/images/robofriends.png';
import figma from 'assets/images/figma.png';

const projectData = [
  {
    name: "GIFTr",
    tags: ['React','Redux','Node','Express', 'Knex', 'PostGres', 'HTML5', 'CSS3'],
    image: giftr,
    objective: "I created a web site that can manage users and let them make and share gift lists. This project let me explore database development strategies, designing it from the ground up, and utilising migration and seeding with the Knex library.",
    demo: "https://giftr-client.herokuapp.com/",
    github: "https://github.com/Draxy-au/giftr",
  },
  {
    name: "Face Find",
    tags: ['React','Node','Express', 'HTML5', 'CSS3'],
    image: findFace,
    objective: "I developed a face detection web app with basic user log in, and an API endpoint that detects faces in images. Was a fun project to explore some more fundamentals of working with React. Test account email: tester@gmail.com password: abc123!",
    demo: "https://will-face-find.herokuapp.com/",
    github: "https://github.com/Draxy-au/find-face",
  },
  {
    name: "Robofriends",
    tags: ['React', 'Node', 'Express', 'HTML5', 'CSS3'],
    image: robofriends,
    objective: "I developed a React web app that allow a user to filter data retrieved from an API. Was good practice for state management, working with APIs and layout styling as well.",
    demo: "https://draxy-au.github.io/robofriends/",
    github: "https://github.com/Draxy-au/robofriends",
  },
  {
    name: "Figma Portfolio Design",
    tags: ['Figma', 'Design', 'Layout','Next.js', 'React', 'HTML5', 'CSS3'],
    image: figma,
    objective: "I wanted to take an idea from scratch through wireframe to mockup, and in to production. This turned in to my portfolio design, and helped me better understand more the process and challenges while developing a web site.",
    demo: "https://www.figma.com/file/n5a6meqlBBgSI3gqrnGAyJ/My-Portfolio-Figma-Mockup?node-id=1%3A2",
    github: "http://www.github.com",
  },
];

export default projectData;