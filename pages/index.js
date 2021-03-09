import Head from "next/head";
import NavBar from "../comps/NavBar";
import MyForm from "../comps/Form";
import Projects from "../comps/Projects";
import React, { useEffect } from "react";
import FadeInSection from "../comps/FadeIn";

export default function Home() {
  useEffect(() => {
    document.querySelector(".get-in-touch").addEventListener("click", (e) => {
      setTimeout(function () {
        let nextPos = document.querySelector(".contact").offsetTop - 50;
        scroll({
          top: nextPos,
          behavior: "smooth",
        });
      }, 400);
    });
  });

  return (
    <>
      <Head>
        <title>RDM Technology Ltd</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="title" content="RDM Technology Ltd"></meta>
        <meta
          i
          name="description"
          content="RDM Technology research, design and develop electronic and software based products."
        ></meta>
        <link rel="icon" href="rdm-orig.png"></link>
        <meta
          name="keywords"
          content="technology, electronics, it, hardware, software, pbc, low power, microelectronics, engineering"
        ></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
        <meta name="language" content="English"></meta>
      </Head>
      <NavBar />
      <h1 className="hidden">RDM Technology Ltd</h1>
      <section className="home block sm:flex flex-col justify-center w-full lg:h-screen px-2 sm:px-8 md:px-16 lg:px-36 xl:px-48 py-8">
        <div className="block sm:flex items-center justify-center mb-4">
          <div className="sm:w-7/12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl w-full font-bold text-gray-900 mt-4">
              Diverse Electronics
            </h1>
            <h2 className="sm:mt-10 font-bold sm:text-lg text-gray-300 mb-4">
              RDM Technology research, design and develop electronic and software based products. Our electronic
              products range from database applications to tiny electronic devices.
            </h2>
          </div>
          <div className="sm:w-5/12 flex justify-start md:ml-4">
            <img src="/electronics.jpg" width="500" alt="" className="rounded-xl shadow-2xl border border-white" />
          </div>
        </div>
        <div className="flex flex-col flex-col-reverse sm:flex-row items-center justify-center">
          <div className="sm:w-5/12 flex justify-start">
            <img src="/code.jpg" width="500" alt="" className="rounded-xl shadow-2xl border border-white" />
          </div>
          <div className="sm:w-7/12 sm:ml-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl w-full font-bold text-gray-900">
              Rapid Solutions
            </h1>
            <h2 className="sm:mt-10 font-bold sm:text-lg text-gray-300 mb-4">
              Our staff have solved many problems using electronic devices and software since 1980, and have often been
              at the forefront of technology. With our experience we aim to reach reliable solutions very quickly.
            </h2>
          </div>
        </div>
      </section>

      <section className="services bg-gray-800 py-8 px-2 sm:px-8 md:px-16 lg:px-36 xl:px-48">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl w-full font-bold text-gray-500">Services</h1>
            <h2 className="sm:mt-10 sm:mr-8 lg:mr-4 font-bold sm:text-lg text-gray-300">
              Electronic solutions benefit from a good understanding of Software, Firmware and Hardware. Many companies
              offer only part of the solution because they only specialise in one these fields. If two or more fields
              are involved the project can quickly become over complicated due to the interfacing and specifications
              required. We understand all these fields and the tight relationship between them so offer a much simpler,
              cheaper and reliable solution.
            </h2>
            <button className="get-in-touch bg-red-300 border-2 border-red-400 text-red-600 font-bold p-4 rounded mt-2 mb-4 hover:text-red-700 hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent">
              <a>Get in touch today</a>
            </button>
          </div>
          <div className="md:w-2/3 flex flex-row justify-center">
            <img src="/services.jpg" alt="" width="600" className="rounded-xl shadow-2xl" />
          </div>
        </div>

        <div className="flex flex-col justify-between mt-16">
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-3">
            <FadeInSection>
              <div className="flex flex-col justify-between items-center h-full">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-500">Hardware Design</h2>
                <h3 className="font-bold text-sm sm:text-lg text-gray-300">
                  Microcontroller, Digital, Power and Analogue, specialising in ultra low power.
                </h3>
                <img src="/electronics2.jpg" alt="" className="rounded-xl shadow-2xl border border-white" width="450" />
              </div>
            </FadeInSection>
            <FadeInSection delay={0.8} up={true}>
              <div className="flex flex-col justify-between items-center h-full">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-500">R&D</h2>
                <h3 className="font-bold text-sm sm:text-lg text-gray-300">
                  Proof of concept software and/or hardware, Prototype electronic devices or systems.
                </h3>
                <img src="/randd-xx.jpg" alt="" className="rounded-xl shadow-2xl border border-white" width="450" />
              </div>
            </FadeInSection>
            <FadeInSection col="col-span-2 md:col-span-1">
              <div className="flex flex-col justify-between items-center col-span-2 md:col-span-1 h-full">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-500">Software Design</h2>
                <h3 className="font-bold text-sm sm:text-lg text-gray-300">
                  PC based bespoke software and database applications, Embedded Software and Firmware
                </h3>
                <img src="code2-xx.jpg" alt="" className="rounded-xl shadow-2xl border border-white" width="450" />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <Projects />

      <section className="about w-full flex-col justify-center text-center bg-gray-800 py-8 px-2 sm:px-8 md:px-16 lg:px-36 xl:px-48">
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-500 text-center">About Us</h1>
        <h2 className="mt-10 font-bold sm:text-lg text-gray-300">
          RDM Technology Ltd was founded by Rob Martin. Spun from Polarsoft limited originally founded in 1991.
        </h2>
        <h2 className="mt-10 font-bold sm:text-lg text-gray-300">
          Over the years we have developed many products used by millions of people around the world. Electronic
          products are often very complex to design so we strive to develop using the simplest processes and techniques
          so as not to make the job even more complex.
        </h2>
        <h2 className="mt-10 font-bold sm:text-lg text-gray-300">
          We have worked with very small and some of the worlds largest companies including the following
        </h2>

        <div className="hidden md:grid gap-8 grid-cols md:grid-cols-2 lg:grid-cols-3 p-4 mx-auto w-full md:w-4/5 ld:3/5">
          <div className="w-full flex justify-center items-center">
            <FadeInSection>
              <img src="/ge-lighting.png" alt="" />
            </FadeInSection>
          </div>
          <div className="w-full flex justify-center items-center">
            <FadeInSection delay={0.8}>
              <img src="/INRIX_logo.png" alt="" />
            </FadeInSection>
          </div>
          <div className="w-full flex justify-center items-center">
            <FadeInSection delay={0.6}>
              <img src="/landis.png" alt="" />
            </FadeInSection>
          </div>
          <div className="w-full flex justify-center items-center">
            <FadeInSection>
              <img src="/neopost.png" alt="" />
            </FadeInSection>
          </div>
          <div className="w-full flex justify-center items-center">
            <FadeInSection delay={0.8}>
              <img src="/pts-logo.png" alt="" />
            </FadeInSection>
          </div>
          <div className="w-full flex justify-center items-center">
            <FadeInSection delay={0.6}>
              <img src="/Schlumberger-Logo.png" alt="" />
            </FadeInSection>
          </div>
          <div className="w-full flex justify-center items-center">
            <FadeInSection>
              <img src="/siemens-logo.svg" alt="" />
            </FadeInSection>
          </div>
          <div className="w-full flex justify-center items-center">
            <FadeInSection delay={0.8}>
              <img src="/Alstom.svg.png" alt="" />
            </FadeInSection>
          </div>
          <div className="w-full flex justify-center items-center md:col-span-2 lg:col-span-1">
            <FadeInSection delay={0.6}>
              <img src="/thorn.png" alt="" />
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="parallax w-full flex items-center justify-center">
          <FadeInSection up={false}>
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 text-center">Contact Us</h1>
          </FadeInSection>
        </div>
        <div className="px-2 sm:px-8 md:px-16 lg:px-36 xl:px-48 py-8">
          <FadeInSection>
            <div className="flex flex-col flex-col-reverse md:flex-row justify-center mb-8">
              <div className="md:w-1/2">
                <MyForm />
              </div>

              <div className="contact-info p-4 bg-gray-700 rounded-t-xl flex flex-col justify-between border-t-2 border-b-2 border-l-2 border-r-2 md:border-t-2 border-gray-400 md:rounded-r-2xl md:rounded-l-none md:shadow-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Get in touch</h2>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Email</h3>
                  <h4 className="font-bold text-gray-300">enquires@rdmtechnology.com</h4>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Write to us</h3>
                  <h4 className="font-bold text-gray-300">
                    RDM Technology Ltd <br /> 32 Haugh Lane <br /> Sheffield <br />
                    S11 9SA.
                  </h4>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Phone</h3>
                  <h4 className="font-bold text-gray-300">
                    UK: 0114 235 2626 <br /> International: +44 114 2352626
                  </h4>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
