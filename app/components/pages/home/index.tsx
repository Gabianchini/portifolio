import Image from "next/image"

export const HeroSection = () => {
    return(
        <section className="w-full h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div>
                    <p>Olá, meu nome é</p>
                    <h2>Gabriela Bianchini</h2>

                    <div>
                        <p>
                            Desenvolvedora Frontend com experiência em empresas do setor de Tecnologia, trago uma formação em Análise e Desenvolvimento de Sistemas e projetos que conduzi de forma independente e autodidata.
                            Minhas principais habilidades incluem: ReactJS, HTML, CSS (incluindo Sass) e JavaScript. Minha experiência prática me permitiu desenvolver um sólido conhecimento em programação e uma compreensão abrangente das ferramentas tecnológicas relevantes.
                            Minha abordagem profissional é marcada por uma mentalidade colaborativa e proativa. Tenho paixão pela aprendizagem contínua e estou sempre em busca de novos desafios para aprimorar minhas habilidades. Acredito que o mundo da tecnologia está em constante evolução, e estou disposta a aprender e adaptar-me a novas tecnologias à medida que elas surgem.
                        </p>
                        <div>
                            techs
                        </div>
                        <div>
                            contato
                        </div>
                    </div>

                </div>
                <Image
                width={420}
                height={404}
                src="/images/Gabriela2.png"
                alt="Foto de perfil da Gabriela"/>
            </div>
        </section>
    )
}