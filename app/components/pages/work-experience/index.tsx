import { SectionTitle } from "../../section-title";
import { TechBadge } from "../../tech-badge";
import { ExperienceItem } from "./experience-item";
import { HorizontalDivider } from "../../divider/horizontal";


export const WorkExperience = () => {
  return (
    <section className="container py-16 flex gap-10 m6d:gap-4 lg:gap-16 flex-col md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle title="Work Experience" />
        <HorizontalDivider/>
        <p>
        With a track record of success and a passion for innovation, I am committed to finding customized solutions for your company.
       Ready for new challenges, I am eager to collaborate in creating impactful solutions!
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <ExperienceItem
          image="/images/valtech_logo.webp"
          companyName="Valtech"
          role="Frontend Developer"
          date="april 2022 - may 2023"
          jobDescription="Development of components, replicating Figma layouts, and the creation of their functionalities. 
          Code restructuring and refinement focusing on best practices.
           Serving as a Content Editor for brands such as Sanofi and SC Johnson. Extensive experience in conducting meetings in English."
          children= {<><TechBadge name={"React.js"}/> <TechBadge name={"Next.js"}/> <TechBadge name={"Contentful"}/> <TechBadge name={"Adobe AEM"}/> <TechBadge name={"Git"}/> <TechBadge name={"Sitecore"}/> <TechBadge name={"Java Script"}/> <TechBadge name={"Type Script"}/> <TechBadge name={"Sass"}/> <TechBadge name={"CSS"}/> <TechBadge name={"TailwindCss"}/>  <TechBadge name={"Styled Components"}/> <TechBadge name={"Atomic Design"}/> <TechBadge name={"Block Element Modifier"}/> <TechBadge name={"Kanban"}/> <TechBadge name={"Scrum"}/></>}/>    
          <ExperienceItem
          image="/images/tcs-logo.webp"
          companyName="Tata Consultancy Services"
          role="Fullstack Developer"
          date="april 2021 - march 2023"
          jobDescription="Supporting the team in performing various tasks as per demand, ensuring agility and efficiency. Participation in trainings to update knowledge and professional development."
          children= {<><TechBadge name={"Java"}/> <TechBadge name={"SQL"}/> <TechBadge name={"Java Script"}/> <TechBadge name={"Html"}/> <TechBadge name={"Css"}/></>}/> 
      </div>
    </section>
  );
};
