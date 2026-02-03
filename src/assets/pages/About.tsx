import {
  SkillsCard,
  AboutCard,
  ExperienceCard,
} from "../../components/SkillsGrid";
import {
  MainprojectCard,
  IlustrationAbout,
} from "../../components/ProjectCard.tsx";

// import Dividers from "../../components/dividers";

function About() {
  return (
    <>
      {" "}
      <div className="">
        <div className="sm:grid sm:grid-cols-2 gap-4 sm:px-6  md:mt-4  mb-6">
          <AboutCard />
          <SkillsCard />
        </div>

        <div className="sm:mx-6 mb-6">
          <ExperienceCard />
        </div>
        <div className="sm:col-span-2 lg:col-span-3 w-full my-6">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"></div>
          <div className="mt-1 flex justify-center gap-1">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="h-1 w-1 rounded-full bg-indigo-500/40"
              ></div>
            ))}
          </div>
        </div>
        <div className="sm:mx-6 mb-10">
          <IlustrationAbout />
          <MainprojectCard />
        </div>

        {/* <Dividers />{" "} */}
      </div>
    </>
  );
}

export default About;
