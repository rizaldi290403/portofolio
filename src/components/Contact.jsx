import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SendHorizonal } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [planeFly, setPlaneFly] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setPlaneFly(false);

    try {
      const res = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setPlaneFly(true);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setPlaneFly(false), 2500);
    }
  };

  return (
    <motion.section
      className="p-8 max-w-lg mx-auto relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }} // hanya muncul sekali
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold text-center mb-6"
      >
        Contact Me
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white shadow-lg p-6 rounded-2xl relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
          required
        ></textarea>

        <motion.button
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:bg-blue-300"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
          {!loading && <SendHorizonal className="w-5 h-5" />}
        </motion.button>
      </motion.form>

      {/* Status Message */}
      <div className="mt-4 text-center">
        <AnimatePresence>
          {loading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-gray-500 mt-4"
            >
              ⏳ Sending your message...
            </motion.div>
          )}

          {status === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-green-600 mt-4 font-semibold"
            >
              ✅ Message sent successfully!
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-red-600 mt-4 font-semibold"
            >
              ❌ Failed to send message. Try again later.
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ✈️ Flying Paper Plane Animation */}
      <AnimatePresence>
        {planeFly && (
          <motion.div
            key="plane"
            initial={{ x: -100, y: 100, opacity: 0, rotate: -45 }}
            animate={{ x: 400, y: -300, opacity: 1, rotate: 15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 text-blue-500 z-0"
          >
            <SendHorizonal size={48} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
