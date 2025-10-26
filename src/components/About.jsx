export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white text-gray-800 text-center px-6"
    >
      <h2 className="text-3xl font-bold mb-6 text-blue-700">About Me</h2>
      <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
        Saya seorang IT Support Officer yang memiliki ketertarikan besar dalam bidang pemrograman. {" "}
        <span className="text-blue-600 font-semibold">React</span>,{" "}
        <span className="text-blue-600 font-semibold">Node.js</span>, dan{" "}
        <span className="text-blue-600 font-semibold">Laravel</span>.
        <br /><br />
	Di luar coding, saya juga gemar mempelajari DevOps, bereksperimen dengan teknologi cloud, serta mengembangkan arsitektur microservice.
      </p>
    </section>
  );
}
