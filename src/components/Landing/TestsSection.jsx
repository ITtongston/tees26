"use client";

import { motion } from "framer-motion";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import Button from "@/shared/Buttons";
import Link from "next/link";

const TestsSection = () => {
  return (
    <section id="tests-section" className="py-24 bg-background-gold  w-full">
      <div className="w-full flex flex-col items-center justify-center px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight font-heading">
            <span className="text-black">
              TESTS
            </span>
          </h2>

          <h3 className="text-xl md:text-2xl font-medium text-black mt-4 font-heading">
            Tongston Entrepreneurial Student, Teacher & School Summit
          </h3>
        </motion.div>

        {/* CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl"
        >
          <h4 className="text-2xl md:text-3xl font-bold mb-4 font-heading">
            Open to K-12 Schools, Students & Educators
          </h4>
          <p className="text-lg md:text-xl mb-8 text-black font-body font-normal">
            Be part of Africa's boldest entrepreneurial education revolution.
          </p>

          <Link href="/tests" className="inline-block">
            <Button
              text="Explore TESTS "
              className="bg-background-danger font-bold text-white hover:bg-red-500"
              icon={faBookOpen}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TestsSection;