import {
  SkillsCard,
  AboutCard,
  ExperienceCard,
} from "../../components/mainSkillsCards";
import {
  MainprojectCard,
  IlustrationAbout,
} from "../../components/projectCard";

function About() {
  return (
    <>
      {" "}
      <div className="">
        <div className="sm:grid sm:grid-cols-2 gap-4 sm:px-6 px-2 mt-8 mb-6">
          <AboutCard />
          <SkillsCard />
        </div>

        <ExperienceCard />
        <IlustrationAbout />
        <MainprojectCard />
      </div>
    </>
  );
}

export default About;
