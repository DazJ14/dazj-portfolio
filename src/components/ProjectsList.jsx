/* eslint-disable react/prop-types */
import ProjectItemTech from "./ProjectItemTech";

const ProjectsList = ({ projects }) => {
  return (
    <div className="flex flex-col items-center lg:flex-row md:justify-between md:flex-wrap gap-y-8">
      {projects.map((project) => (
        <article
          key={project.titulo}
          className="w-full h-[35rem] md:h-[35rem] md:w-4/5 lg:w-[47%] flex flex-col shadow-md hover:shadow-2xl overflow-hidden rounded-lg transition-all duration-200 p-4 bg-white dark:bg-slate-700"
        >
          <img
            src={project.urlImagen}
            alt="todo list app"
            className="w-full md:h-1/2 object-cover rounded-xl drop-shadow-md"
          />
          <aside className="bg-transparent text-center py-4 w-full md:h-1/2 flex flex-col flex-grow justify-between">
            <div className="my-2">
              <h3 className="font-bold text-xl sm:text-2xl uppercase text-sky-500 mb-2">
                {project.titulo}
              </h3>
              <div className="mb-2">
                <ProjectItemTech
                  tech={project.tecnologias}
                  name={project.titulo}
                />
              </div>
            </div>
            <p className="text-sm sm:text-sm pb-4 w-full h-full flex-grow dark:text-slate-400">
              {project.descripcion}
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href={project.repositorio}
                target="_blank"
                rel="noreferrer"
                className="bg-white py-3 px-6 shadow-md hover:rounded-3xl transition-all"
              >
                Github Repo
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-6 shadow-md bg-sky-400 hover:bg-sky-300 transition-all hover:rounded-3xl"
              >
                Live Demo
              </a>
            </div>
          </aside>
        </article>
      ))}
    </div>
  );
};

export default ProjectsList;
