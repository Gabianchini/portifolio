import Image from "next/image"
import { TechBadge } from "../../tech-badge"
import { Button } from "../../button"
import {HiArrowNarrowRight} from 'react-icons/hi'
import {TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp} from "react-icons/tb"

const MOCK_CONTACTS = [
    {
        url:'https://github.com/Gabianchini',
        icon: <TbBrandGithub/>
    },
    {
        url:'https://www.linkedin.com/in/gabriela-bianchini-044450187/',
        icon: <TbBrandLinkedin/>
    },
    {
        url:'https://wa.me/5543984132552',
        icon: <TbBrandWhatsapp/>
    },

]

export const HeroSection = () => {
    return(
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[90px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row pt-2">
                <div className="w-full ">
                    <p className="font-mono text-sky-400 mt-3 mx-3">Olá, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-3 mx-2">Gabriela Bianchini</h2>

                    <div>
                        <div className="text-gray-200 my-6 text-sm sm:text-base mx-3">
                            <p>Desenvolvedora Frontend com experiência em empresas do setor de Tecnologia, trago uma formação em Análise e Desenvolvimento de Sistemas e projetos que conduzi de forma independente e autodidata.
                            Minha experiência prática me permitiu desenvolver um sólido conhecimento em programação e uma compreensão abrangente das ferramentas tecnológicas relevantes.</p>
                            <p>Minha abordagem profissional é marcada por uma mentalidade colaborativa e proativa. Tenho paixão pela aprendizagem contínua e estou sempre em busca de novos desafios para aprimorar minhas habilidades. Acredito que o mundo da tecnologia está em constante evolução, e estou disposta a aprender e adaptar-me a novas tecnologias à medida que elas surgem.
                            </p>
                        </div>
                       
                        <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                            {Array.from({ length: 7 }).map((_, index) => (
                                <TechBadge name="Next.js"/>
                            ))}
                        </div>
                        <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
                            <Button className="w-max shadow-button">
                                Entre em Contato
                                <HiArrowNarrowRight size={18}/>
                            </Button>
                            <div className="text-2xl  flex items-center h-20 gap-3"> 
                                {MOCK_CONTACTS.map((contact,index) => (
                                    <a href= {contact.url}
                                        key= {`contact-${index}`}
                                        target="_blank"
                                        className=" hover:scale-125 transition-colors">
                                            {contact.icon}
                                        </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
                <Image
                className="w-[400px] h-[300px] lg:w-[410px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-full object-cover mx-3 grid self-center"
                width={420}
                height={404}
                src="/images/Gabriela2.png"
                alt="Foto de perfil da Gabriela"/>
            </div>
        </section>
    )
}