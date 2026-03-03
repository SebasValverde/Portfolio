import ProjectRow from "./ProjectRow";
import { projects } from "./ProjectsData";

export default function Projects() {
  return (
    <section id="works" className="w-[90%] sm:w-[70%] mx-auto py-20 scroll-mt-28">
      <h2 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My <span className="text-cyan-300">Projects</span>
      </h2>

      <div className="mt-12">
        {projects.map((p, idx) => (
          <ProjectRow key={p.title} {...p} reverse={idx % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
