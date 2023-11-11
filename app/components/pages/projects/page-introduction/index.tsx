import { SectionTitle } from "@/app/components/section-title"
import { LinkComp } from "@/app/components/link"
import { HiArrowNarrowLeft } from "react-icons/hi"


export const PageIntroduction = () => {
    return(
        <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">
            <SectionTitle title="Projects" className="text-center items-center [&>h3]:text-4xl"/>
            <div className="flex flex-col items-center">
                <p className="text-gray-400 text-center max-w-[640px] my-6 text-md sm:text-base">
                Here, you'll find a selection of the projects I've worked on. Feel free to browse and delve into the projects to discover how they were created, the technologies employed, and the features implemented.
                </p>
                <LinkComp href="/">
                    <HiArrowNarrowLeft size={20}/>
                     Home Page
                </LinkComp>
            </div>
        </section>
    )
}