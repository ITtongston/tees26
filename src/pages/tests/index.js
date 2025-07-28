import Head from "next/head";
import Nav2 from "@/components/Nav/Nav2";
import Foot from "@/components/Nav/Foot";
import TestsHero from "@/components/Tests/TestsHero";
import TestsAbout from "@/components/Tests/TestsAbout";
import TestsKnowledgeSessions from "@/components/Tests/TestsKnowledgeSessions";
// import TestsTWorldSection from "@/components/Tests/TestsTWorldSection"
// import TestsAgenda from "@/components/Tests/TestsAgenda"
// import TestsRegistrationForm from "@/components/Tests/TestsRegistrationForm"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TestsPage() {
  return (
    <>
      <Head>
        <title>
          TESTS 2026 | Tongston Entrepreneurial Student, Teacher & School Summit
        </title>
        <meta
          name="description"
          content="Africa's leading entrepreneurial education competition and showcase for students, teachers, and schools"
        />
      </Head>

      <div className="min-h-screen bg-white">
        <section className="navigation-container p-3  flex w-full h-[95.5px] bg-black ">
          <Nav2 />
        </section>
        <TestsHero />
        <TestsAbout />
        <TestsKnowledgeSessions />
        {/* <TestsTWorldSection /> */}
        {/* <TestsAgenda /> */}
        {/* <TestsRegistrationForm /> */}

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          limit={3}
        />
      </div>
    </>
  );
}
