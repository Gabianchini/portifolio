import { SectionTitle } from "../../section-title";
import { TechBadge } from "../../tech-badge";
import { ExperienceItem } from "./experience-item";

export const WorkExperience = () => {
  return (
    <section className="container py-16 flex gap-10 m6d:gap-4 lg:gap-16 flex-col md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle title="Experiência Profissional" />
        <p>
          Com um histórico de sucesso e paixão pela inovação, estou comprometida
          em encontrar soluções personalizadas para a sua empresa. Pronto para
          novos desafios, estou ansioso para colaborar na criação de soluções
          impactantes!
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <ExperienceItem
          image="/images/valtech_logo.jpeg"
          companyName="Valtech"
          role="Desenvolvedora Frontend"
          date="abril 2022 - maio 2023"
          jobDescription="Desenvolvimento de componentes, replicando layout do figma e criação de suas funcionalidades.Reformulação e refinamento de código visando boas práticas.Atuação como Content Editor para marcas como Sanofi e SC Johnson.Ampla experiência em conduzir reuniões em inglês."
          children= {<><TechBadge name={["React.js"]}/> <TechBadge name={["React.js"]}/></>}/>    
          <ExperienceItem
          image="/images/valtech_logo.jpeg"
          companyName="Valtech"
          role="Desenvolvedora Frontend"
          date="abril 2022 - maio 2023"
          jobDescription="Desenvolvimento de componentes, replicando layout do figma e criação de suas funcionalidades.Reformulação e refinamento de código visando boas práticas.Atuação como Content Editor para marcas como Sanofi e SC Johnson.Ampla experiência em conduzir reuniões em inglês."
          children= {<><TechBadge name={["React.js"]}/> <TechBadge name={["React.js"]}/></>}/> 
      </div>
    </section>
  );
};
