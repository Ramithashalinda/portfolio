import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { education } from "../constants";
import { interest } from "../constants";
import { workExperience } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const WorkExperienceCard = ({ workExperience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={workExperience.date}
      iconStyle={{
        background: workExperience.iconBg,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      icon={
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <img
            src={workExperience.icon}
            alt={workExperience.designation}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      }
    >
      <div className="flex justify-center items-center w-full h-full">
        <h3 className="text-white text-[24px] font-bold">
          {workExperience.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0, marginLeft: 10 }}
        >
          {workExperience.designation}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {workExperience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px]
           pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={education.date}
      iconStyle={{
        background: education.iconBg,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      icon={
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <img
            src={education.icon}
            alt={education.college_name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      }
    >
      <div className=" flex justify-center items-center w-full h-full">
        <h3 className="text-white text-[24px] font-bold">{education.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {education.college_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {education.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px]
           pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const InterestCard = ({ interest }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={interest.date}
      iconStyle={{
        background: interest.iconBg,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      icon={
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <img
            src={interest.icon}
            alt={interest.college_name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      }
    >
      <div className="flex justify-center items-center w-full h-full">
        <h3 className="text-white text-[24px] font-bold">{interest.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {interest.college_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {interest.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point.link ? (
              <a
                href={point.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-300"
              >
                {point.text}
              </a>
            ) : (
              point.text
            )}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <div className="mt-20 flex flex-col ">
        <motion.dev variant={textVariant()}>
          <p className={styles.sectionSubText}>Gained Experience At...</p>
          <h2 className={styles.sectionHeadText}>Professional Experience</h2>
        </motion.dev>
        <VerticalTimeline>
          {workExperience.map((workExperience, index) => (
            <WorkExperienceCard key={index} workExperience={workExperience} />
          ))}
        </VerticalTimeline>
        <div style={{ marginTop: "100px" }}>
          <motion.dev variant={textVariant()}>
            <p className={styles.sectionSubText}>Gained Knowledge At...</p>
            <h2 className={styles.sectionHeadText}>Education.</h2>
          </motion.dev>
          <VerticalTimeline>
            {education.map((education, index) => (
              <EducationCard key={index} education={education} />
            ))}
          </VerticalTimeline>
        </div>
        <div style={{ marginTop: "100px" }}>
          <motion.dev variant={textVariant()}>
            <p className={styles.sectionSubText}>Favourite...</p>
            <h2 className={styles.sectionHeadText}>Interests and Hobbies.</h2>
          </motion.dev>
          <VerticalTimeline>
            {interest.map((interest, index) => (
              <InterestCard key={index} interest={interest} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "work");
