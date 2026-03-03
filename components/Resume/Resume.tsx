import ResumeCard from "./ResumeCard";
import {
  FaCertificate,
  FaGraduationCap,
  FaHandshake,
  FaTools,
} from "react-icons/fa";

const Resume = () => {
  return (
    <div id="resume" className="pt-40 pb-16 scroll-mt-28">
      <div className="w-[90%] sm:[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Work <span className="text-cyan-200">Experience</span>
          </h1>
          <div className="mt-10" data-aos="zoom-in" data-aos-anchor-placement="top-center">
            <ResumeCard
              Icon={FaTools}
              role="Technical Support Specialist (Freelance)"
              description={
                <>
                  <ul className="list-disc ml-5 mt-2 space-y-1">
                    <li>
                      Provided hardware and software support for small businesses and individual clients
                    </li>
                    <li>Diagnosed and resolved issues on Windows-based systems</li>
                    <li>
                      Assisted with network configuration, OS installations, and basic security setup
                    </li>
                    <li>
                      Recommended upgrades and preventive maintenance to improve reliability
                    </li>
                  </ul>
                </>
              }
            />

            <ResumeCard
              Icon={FaHandshake}
              role="Loan Specialist (Service First - Reprise Financial)"
              description={
                <>
                  <ul className="list-disc ml-5 mt-2 space-y-1">
                    <li>
                      Used CRM plus internal systems to process applications, verifications, and documentation
                    </li>
                    <li>
                      Managed multiple client interactions and validations in a fast-paced workflow
                    </li>
                    <li>
                      Improved English communication quickly through daily work with U.S. clients
                    </li>
                    <li>
                      Promoted loan products and upsold while keeping guidance personalized
                    </li>
                  </ul>
                </>
              }
            />
          </div>
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-200">Education</span>
          </h1>
          <div className="mt-10" data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-delay="300">
            <ResumeCard
              Icon={FaGraduationCap}
              role="Bachelor&apos;s Degree in Software Engineering"
              date="2022- Ongoing"
              description={
                <>
                  <p>Universidad Internacional de las Americas</p>
                </>
              }
            />

            <ResumeCard
              Icon={FaCertificate}
              role="Interaction with JavaScript"
              date="December 2023"
              description={
                <>
                  <p>Instituto Nacional de Aprendizaje</p>
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
