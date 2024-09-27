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
          image="/images/whitewall_logo.jpg"
          companyName="White Wall"
          role="Fullstack Developer"
          date="July 2024 - Present"
          jobDescription="Development of custom plugins for the Blip chatbot platform and integration of Blip features with third-party applications."
        >
          <TechBadge name={"Svelte"}/> <TechBadge name={"TypeScript"}/> <TechBadge name={"JavaScript"}/> <TechBadge name={"TailwindCSS"}/> <TechBadge name={"Git"}/> <TechBadge name={"REST API"}/> <TechBadge name={"Firebase"}/> <TechBadge name={"TypeScript"}/> <TechBadge name={"Kanbam"}/> 
          </ExperienceItem>

      <ExperienceItem
          image="/images/confidence.png"
          companyName="Confidence Devs"
          role="Freelance developer"
          date="August 2023 - June 2024"
          jobDescription="Components development and features like schedule meeting button and site translation to portuguese."
        >
          <TechBadge name={"React.js"}/> <TechBadge name={"Next.js"}/> <TechBadge name={"Styled components"}/> <TechBadge name={"Gitlab"}/> <TechBadge name={"i18next"}/> <TechBadge name={"Craco"}/> <TechBadge name={"TypeScript"}/> <TechBadge name={"Kanbam"}/> 
          </ExperienceItem>    

        <ExperienceItem
          image="/images/valtech_logo.webp"
          companyName="Valtech"
          role="Frontend Developer"
          date="April 2022 - May 2023"
          jobDescription="Development of components, replicating Figma layouts, and the creation of their functionalities. 
          Code restructuring and refinement focusing on best practices.
           Serving as a Content Editor for brands such as Sanofi and SC Johnson. Extensive experience in conducting meetings in English."
        >
          <TechBadge name={"React.js"}/> <TechBadge name={"Next.js"}/> <TechBadge name={"Contentful"}/> <TechBadge name={"Adobe AEM"}/> <TechBadge name={"Git"}/> <TechBadge name={"Sitecore"}/> <TechBadge name={"JavaScript"}/> <TechBadge name={"TypeScript"}/> <TechBadge name={"Sass"}/> <TechBadge name={"CSS"}/> <TechBadge name={"TailwindCss"}/>  <TechBadge name={"Styled Components"}/> <TechBadge name={"Atomic Design"}/> <TechBadge name={"Block Element Modifier"}/> <TechBadge name={"Kanban"}/> <TechBadge name={"Scrum"}/>
          </ExperienceItem>    
          <ExperienceItem
          image="/images/tcs-logo.webp"
          companyName="Tata Consultancy Services"
          role="Fullstack Developer"
          date="April 2021 - March 2023"
          jobDescription="Supporting the team in performing various tasks as per demand, ensuring agility and efficiency. Participation in trainings to update knowledge and professional development.">
          <TechBadge name={"Java"}/> <TechBadge name={"SQL"}/> <TechBadge name={"JavaScript"}/> <TechBadge name={"Html"}/> <TechBadge name={"Css"}/>
          </ExperienceItem>
      </div>
    </section>
  );
};
