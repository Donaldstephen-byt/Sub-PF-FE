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
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-5 lg:grid-rows-5">
        <AboutCard />
        <ExperienceCard />
        <SkillsCard />
        <IlustrationAbout />
        <MainprojectCard />
      </div>
    </>
  );
}

export default About;
