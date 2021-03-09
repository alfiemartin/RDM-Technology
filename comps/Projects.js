import React from "react";
import FadeInSection from "./FadeIn";

const Projects = () => {
  return (
    <section className="products py-8 px-2 sm:px-8 md:px-16 lg:px-36 xl:px-48">
      <h1 className="text-4xl sm:text-7xl font-bold text-gray-900 text-center mb-2">Product development history</h1>
      <h2 className="text-center font-bold sm:text-lg text-gray-300 mb-4">
        Over the years our staff have worked on a broad range of products
      </h2>
      <div className="grid gap-4 grid-cols md:grid-cols-2 lg:grid-cols-3">
        <FadeInSection>
          <div className="card bg-red-400 rounded-xl shadow-2xl m-auto w-full h-full flex-col flex">
            <h1 className="text-center font-bold text-red-100 bg-red-500 rounded-t-xl text-2xl">1980 - 1985</h1>
            <ul className="text-center text-red-100 text-md font-bold p-2 flex-grow flex flex-col justify-between">
              <li className="mb-2">Opto-electronic based module for Electro-Mechanical relay replacement.</li>
              <li className="mb-2">Production line arc welding current computer interface.</li>
              <li className="mb-2">Soft-start 3 phase motor controller modules.</li>
              <li className="mb-2">Production line digital logic based machine synchronising units.</li>
              <li className="mb-2">Microprocessor based Co2 laser glass etching controller.</li>
              <li className="mb-2">
                Infra-red temperature measuring device for computerised production line monitoring.
              </li>
              <li className="mb-2">
                Computer automated gonio and mirror photometers for luminaire distribution measurement.
              </li>
              <li className="mb-2">Vehicle digital electronic ignition advance and retard circuit.</li>
              <li>PC based 6Mhz digital oscilloscope ISA card.</li>
            </ul>
          </div>
        </FadeInSection>
        <FadeInSection delay={0.8}>
          <div className="card bg-red-400 rounded-xl shadow-2xl m-auto w-full h-full flex-col flex">
            <h1 className="text-center font-bold text-red-100 bg-red-500 rounded-t-xl text-2xl">1986 - 1990</h1>
            <ul className="text-center text-red-100 text-md font-bold p-2 flex-grow flex flex-col justify-between">
              <li className="mb-2">Ultrasonic vehicle audible parking warning device.</li>
              <li className="mb-2">Vehicle rear window LED Dot Matrix display unit.</li>
              <li className="mb-2">
                Low cost 8 bit single chip microcomputer development kit with assembler and debugger.
              </li>
              <li className="mb-2">Pocket calorie counting device with database and alphanumeric display.</li>
              <li className="mb-2">Closed loop vehicle electronic ignition circuit.</li>
              <li className="mb-2">Japanese factory stock control database software.</li>
              <li className="mb-2">Digital based copy milling tracer head with VME interface board.</li>
              <li className="mb-2">Fast computer controlled parallel measurement lighting photometer.</li>
              <li>Graphical computer-aided-design interior lighting software.</li>
              <li>Bicycle rear flashing LED unit.</li>
            </ul>
          </div>
        </FadeInSection>
        <FadeInSection delay={0.6}>
          <div className="card bg-red-400 rounded-xl shadow-2xl m-auto w-full h-full flex-col flex">
            <h1 className="text-center font-bold text-red-100 bg-red-500 rounded-t-xl text-2xl">1991-1995</h1>
            <ul className="text-center text-red-100 text-md font-bold p-2 flex-grow flex flex-col justify-between">
              <li>Processor based high power stepping motor FIFO pulse controller.</li>
              <li>Microcontroller based DC H-Bridge motor controller.</li>
              <li>Luminarie fitting optical 2-D scanner.</li>
              <li>AutoCAD lighting design calculation interface.</li>
              <li>Flood lighting scheme design CAD application.</li>
              <li>3D Street lighting scheme design application.</li>
              <li>Intelligent and fully automatic staff scheduler, staff roster and off duty software.</li>
              <li>Automatic coating thickness measurement equipment.</li>
            </ul>
          </div>
        </FadeInSection>
        <FadeInSection delay={0.6}>
          <div className="card bg-red-400 rounded-xl shadow-2xl m-auto w-full h-full flex-col flex">
            <h1 className="text-center font-bold text-red-100 bg-red-500 rounded-t-xl text-2xl">1996-2000</h1>
            <ul className="text-center text-red-100 text-md font-bold p-2 flex-grow flex flex-col justify-between">
              <li className="mb-2">
                High speed final test fluorescent tube testing and rejection system with electrical, temperature and
                colour measurements.
              </li>
              <li className="mb-2">
                Object orientated VCL mapping components for vehicle tracking, location and routing applications.
              </li>
              <li className="mb-2">U.K Traffic jam mapping, logging and call centre database system.</li>
              <li className="mb-2">GSM vehicle security tracking and monitoring call centre database software.</li>
              <li className="mb-2">Individual room radiator temperature control system.</li>
            </ul>
          </div>
        </FadeInSection>
        <FadeInSection delay={0.8}>
          <div className="card bg-red-400 rounded-xl shadow-2xl m-auto w-full h-full flex-col flex">
            <h1 className="text-center font-bold text-red-100 bg-red-500 rounded-t-xl text-2xl">2001 - 2005</h1>
            <ul className="text-center text-red-100 text-md font-bold p-2 flex-grow flex flex-col justify-between">
              <li className="mb-2">Low power domestic electronic gas meter.</li>
              <li className="mb-2">GPS disciplined Rubidium 10Mhz atomic clock unit.</li>
              <li className="mb-2">DAB processor to PCMCIA and IDE interface designs.</li>
              <li className="mb-2">80Mhz Frequency generator interface with 1 micro Hertz resolution.</li>
              <li className="mb-2">BCD high resolution time interface with 100ns resolution.</li>
              <li className="mb-2">IRIG-B time interface.</li>
              <li className="mb-2">Electronic domestic prepayment electricity meter.</li>
            </ul>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="card bg-red-400 rounded-xl shadow-2xl m-auto w-full h-full flex-col flex">
            <h1 className="text-center font-bold text-red-100 bg-red-500 rounded-t-xl text-2xl">2006 - Today</h1>
            <ul className="text-center text-red-100 text-md font-bold p-2 flex-grow flex flex-col justify-between">
              <li className="mb-2">Ultra Low power wireless microwave intruder detector module.</li>
              <li className="mb-2">Very low cost single phase electricity meters.</li>
              <li className="mb-2">GSM gas meter module.</li>
              <li className="mb-2">Prepayment gas meter module.</li>
              <li className="mb-2">Graphical smart energy U.K home display unit.</li>
              <li className="mb-2">Atomic clock remote web application.</li>
              <li className="mb-2">European graphical smart energy home display unit.</li>
              <li className="mb-2">48 bit Direct Digital Synthesizer unit (DDS).</li>
              <li className="mb-2">Ultra low power gas smart meter.</li>
            </ul>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Projects;
