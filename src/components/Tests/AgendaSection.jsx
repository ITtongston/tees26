import { motion } from "framer-motion";

const AgendaSection = () => {
  return (
    <section className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-black mb-6 font-montserrat"
          >
            TES 2026{" "}
            <span className="bg-gradient-to-br from-yellow-500 via-red-500 to-red-600 bg-clip-text text-transparent">
              Agenda / Programme
            </span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-4"
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-700 font-lato">
              <strong>Theme:</strong> Value. Influence. Profitability – Powering People, Institutions & Governments through Entrepreneurial Education, Media, Enterprise & Finance
            </p>
            <p className="text-sm sm:text-base text-gray-600 font-lato">
              <strong>Time:</strong> 9:00am – 6:00pm | <strong>Date:</strong> July 26, 2026
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Morning Session */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-4 sm:p-6 md:p-8 bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 rounded-lg sm:rounded-xl md:rounded-2xl"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-red-600 mb-6 font-montserrat">
              🌅 MORNING SESSION
            </h3>
            <div className="space-y-4 text-sm sm:text-base font-lato">
              {[
                { time: "9:00am - 9:05am", event: "Introduction to TES 2026", highlight: false },
                { time: "9:05am - 9:20am", event: "Welcome Address by the Chairman of the Day, Alh. (Dr.) Umaru Kwairanga", highlight: true },
                { 
                  time: "9:20am - 9:35am", 
                  event: "Keynote Address: Tongston: Delivering Value, Influence & Profitability to People, Institutions & Governments through T-World by Tongston CEO, Engr. Bello M Tongo", 
                  highlight: true 
                },
                { time: "9:35am - 9:40am", event: "Q&A", highlight: false },
                { time: "9:40am - 10:10am", event: "[TOPIC]: Rider [Education]", highlight: true },
                { time: "10:10am - 10:15am", event: "Q&A", highlight: false },
                { time: "10:15am - 11:45am", event: "Senior Secondary Students – TESTS Competition (3 Presenters × 30 mins each)", highlight: true },
                { time: "11:45am - 12:15pm", event: "[TOPIC]: Rider [Enterprise]", highlight: true },
                { time: "12:15pm - 12:20pm", event: "Q&A", highlight: false },
                { time: "12:20pm - 1:05pm", event: "Senior Secondary Teachers – TESTS Competition (3 Presenters × 15 mins each)", highlight: true },
                { time: "1:05pm - 2:00pm", event: "Networking, Exhibitions & Lunch (1 hour)", highlight: false }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 p-2 rounded-lg ${item.highlight ? 'bg-yellow-50' : ''}`}
                >
                  <span className="font-semibold text-yellow-600 min-w-fit">
                    {item.time}
                  </span>
                  <span className="text-gray-700 text-right">{item.event}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Afternoon & Late Session */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-4 sm:p-6 md:p-8 bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 rounded-lg sm:rounded-xl md:rounded-2xl"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-red-600 mb-6 font-montserrat">
              🌇 AFTERNOON & LATE SESSION
            </h3>
            <div className="space-y-4 text-sm sm:text-base font-lato">
              {[
                { time: "2:00pm - 2:30pm", event: "[TOPIC]: Rider [Media]", highlight: true },
                { time: "2:30pm - 2:35pm", event: "Q&A", highlight: false },
                { time: "2:35pm - 4:05pm", event: "Tertiary Students – TESTS Competition (3 Presenters × 30 mins each)", highlight: true },
                { time: "4:05pm - 4:35pm", event: "[TOPIC]: Rider [Finance]", highlight: true },
                { time: "4:35pm - 4:40pm", event: "Q&A", highlight: false },
                { time: "4:40pm - 4:55pm", event: "Top 3 Schools Showcase – TESTS Competition (3 Schools × 5 mins each)", highlight: true },
                { time: "4:55pm - 5:10pm", event: "Intrapreneurial Pitches – TEES Showcase (3 Intrapreneurs × 5 mins each)", highlight: true },
                { time: "5:10pm - 5:25pm", event: "Entrepreneurial Pitches – TEES Showcase (3 Entrepreneurs × 5 mins each)", highlight: true },
                { time: "5:25pm - 5:35pm", event: "☕ Networking Break", highlight: false },
                { time: "5:35pm - 5:55pm", event: "Experts' Panel & Judges' Feedback Session", highlight: true },
                { time: "5:55pm - 6:25pm", event: "Entrepreneurial Thinking Awards Ceremony & Live Testimonials", highlight: true },
                { time: "6:25pm - 6:30pm", event: "Vote of Thanks & Remarks on TES 2027", highlight: false }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 p-2 rounded-lg ${item.highlight ? 'bg-yellow-50' : ''}`}
                >
                  <span className="font-semibold text-yellow-600 min-w-fit">
                    {item.time}
                  </span>
                  <span className="text-gray-700 text-right">{item.event}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-yellow-500 to-red-500 text-white p-4 sm:p-6 md:p-8 shadow-xl max-w-4xl mx-auto rounded-lg sm:rounded-xl md:rounded-2xl">
            <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 font-montserrat">
              Don&apos;t Miss Out!
            </h4>
            <p className="text-base sm:text-lg md:text-xl mb-8 opacity-90 font-lato">
              Join us for a full day of learning, networking, and celebrating entrepreneurial excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                📅 Add to Calendar
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg bg-transparent border-2 border-white hover:bg-white hover:text-red-600 font-bold rounded-lg transition-colors"
              >
                📧 Get Reminders
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgendaSection;