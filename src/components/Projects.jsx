const projects = [
  {
    title: "Personal Portofolio",
    description: "Website portofolio pribadi menggunakan React dan TailwindCSS.",
    link: "https://github.com/rizaldi290403/portofolio",
  },
  {
    title: "Galeri Porselain",
    description: "Aplikasi galeri sederhana dengan fitur CRUD menggunakan Nextjs Typescript",
    link: "https://github.com/rizaldi290403/insiagallery",
  },
  {
    title: "Mail API",
    description: "Mini API untuk sebuah website dapat menerima pesan.",
    link: "https://github.com/rizaldi290403/mailapi",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 text-center px-6">
      <h2 className="text-3xl font-bold mb-10 text-blue-700">My Projects</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
	    key={index}
	    className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 text-left">
	    <h3 className="text-xl font-semibold mb-2 text-gray-800">
	      {project.title}
	    </h3>
	    <p className="text-gray-600 mb-4">{project.description}</p>
	    <a
	      href={project.link}
	      target="_blank"
	      className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition" rel="noreferrer">
	        View Project
	    </a>
	  </div>
	))}
      </div>
    </section>
  );
}
