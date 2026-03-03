"use client";
import { ReactNode } from "react";
import { FaDatabase } from "react-icons/fa";
import {
  SiReact,
  SiN8N,
  SiJavascript,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiDotnet,
  SiMysql,
} from "react-icons/si";
import Tilt from "react-parallax-tilt";

type Skill = {
  name: string;
  icon: ReactNode;
};

const skills: Skill[] = [
  {
    name: "React",
    icon: <SiReact />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "HTML5",
    icon: <SiHtml5 />,
  },
  {
    name: "CSS3",
    icon: <SiCss3 />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap />,
  },
  {
    name: "C#",
    icon: "C#",
  },
  {
    name: ".NET",
    icon: <SiDotnet />,
  },
  {
    name: "SQL Server",
    icon: <FaDatabase />,
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
  },
  {
    name: "n8n",
    icon: <SiN8N />,
  },
];

const top = skills.slice(0, 7);
const bottom = skills.slice(7);

const Card = ({ skill, delay }: { skill: Skill; delay: number }) => (
  <Tilt scale={1.5} transitionSpeed={400}>
    <div
      data-aos="flip-right"
      data-aos-anchor-placement="top-center"
      data-aos-delay={delay}
      className="bg-[#14134145] text-center w-40 h-48 rounded-3xl
                    flex flex-col items-center justify-center shadow-lg
                    transition hover:scale-105"
    >
      <div className="text-5xl mb-4 text-gray-300">{skill.icon}</div>
      <p className="text-purple-400 mt-1">{skill.name}</p>
    </div>
  </Tilt>
);

const Skills = () => {
  return (
    <div id="skills" className="text-white pt-6 pb-16 scroll-mt-28">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My <span className="text-cyan-300">Skills</span>
      </h1>

      <div className="mt-8 flex flex-col items-center gap-6">
        <div className="grid gap-6 justify-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {top.map((s,i) => (
            <Card key={s.name} skill={s} delay={i * 100}/>
          ))}
        </div>
        <div className="grid gap-6 justify-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {bottom.map((s,i) => (
            <Card key={s.name} skill={s} delay={i * 100} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
