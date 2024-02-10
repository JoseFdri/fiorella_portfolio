import Image from "next/image";
import Slider from "../../components/slider.component";
import htmlParser from "html-react-parser";
import type { Metadata, ResolvingMetadata } from "next";
import { author } from "../../constants";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
const projectName = "Exportemos.pe";
const title = `${projectName} | ${author}`;
const description = `This website aims to provide information to exporters, students, and administrators on export-related topics, with the goal of informing and boosting exports in Peru. In the design, we will focus on creating an intuitive experience that addresses the specific needs of each user group, making it easy for users to search for and understand key information related to exports.`;

export async function generateMetadata(
  _: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetaData = await parent;
  const previousImages = parentMetaData.openGraph?.images || [];

  return {
    title: projectName,
    description,
    openGraph: {
      images: ["/images/portal.jpg", ...previousImages],
      siteName: title,
      title: title,
      description,
    },
  };
}

export default async function Project() {
  return (
    <main className="flex lg:w-11/12 max-w-[300px] md:max-w-2xl lg:max-w-screen-xl flex-col lg:px-0 items-center justify-center">
      <section className="flex lg:mt-44 w-full">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-3/4 lg:flex lg:flex-col lg:justify-center">
            <h1 className="text-3xl mb-10 font-bold lg:text-7xl">
              {projectName}
            </h1>
            <p className="lg:px-32">{description}</p>
            <br />
            <div className="lg:px-32">
              <a href="https://exportemos.pe">https://exportemos.pe</a>
            </div>
          </div>
          <div className="my-10 lg:w-96 flex justify-center">
            <picture>
              <Image
                priority={true}
                src="/images/projects/exportemos/project_img.png"
                width={500.99}
                height={505.71}
                alt={projectName}
                sizes={"(max-width: 1500px) 80w"}
              />
            </picture>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full">
        <h2 className="text-2xl mb-5 font-bold lg:mt-32 lg:mb-16">Overview</h2>
        <p>
          Develop a comprehensive UX/UI proposal for PROMPERÚ&apos;s new
          official export portal, with a focus on enhancing communication and
          information delivery. Prioritize the user experience for exporters,
          potential exporters, and academics. The proposal will involve user
          research, navigation architecture, wireframe prototyping, and visual
          interface design.
        </p>
        <div className="flex flex-col lg:mt-16 lg:flex-row">
          <div className="lg:pr-20">
            <h2 className="text-2xl mb-5 font-bold mt-8">Problem</h2>
            <p>
              Upon evaluating the original website, we identified serious
              usability issues and disorganized design that had a negative
              impact on the user experience. The outdated design and lack of a
              clear hierarchical structure made it challenging for users to
              locate information, leading to confusion.
            </p>
          </div>
          <div className="lg:pl-20">
            <h2 className="text-2xl mb-5 font-bold mt-8">Solution</h2>
            <p>
              To tackle these challenges, we propose a comprehensive redesign of
              the website. Through thorough research, we aim to gain a deep
              understanding of user needs and expectations. Additionally, we
              will reorganize the content by establishing clear hierarchies and
              coherent groupings to enhance user comprehension and deliver a
              more intuitive and satisfying experience.
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-center lg:mt-44 bg-[#181818] w-screen py-7 mt-20">
        <div className="w-full lg:w-11/12 max-w-[300px] md:max-w-2xl lg:max-w-screen-xl md:flex md:justify-between">
          <div>
            <div>
              <div className="font-thin my-5">Client</div>
              <div className="font-medium leading-loose">PromPeru</div>
            </div>
            <div>
              <div className="font-thin my-5">Role</div>
              <div className="font-medium leading-loose">UX & UI Designer</div>
            </div>
            <div>
              <div className="font-thin my-5">Duration</div>
              <div className="font-medium leading-loose">2 months</div>
            </div>
          </div>
          <div>
            <div>
              <div className="font-thin my-5">Tools</div>
              <div className="font-medium leading-loose">
                Figma
                <br />
                Miro
                <br />
                Invision
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="font-thin my-5">Process</div>
              <div className="leading-loose font-medium">
                Client Kickoff interview
                <br />
                Interviews with stakeholders and exporters
                <br />
                Ideation
                <br />
                Sketch
                <br />
                UI Design & Prototype
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-start md:items-center flex-col w-full my-20 md:my-24">
        <div className="md:flex-row flex-col items-start md:items-start flex">
          <a
            href="#research"
            className="flex items-center justify-center md:flex-col md:w-52 text-center"
          >
            <div className="font-medium rounded-full flex justify-center items-center hover:bg-white transition-all border-white hover:text-black text-white border-2 w-12 h-12 mr-5 md:mr-0 md:mb-5">
              1
            </div>
            Research
          </a>
          <a
            href="#wireframe"
            className="flex items-center justify-center md:flex-col md:w-52 text-center mt-5 md:mt-0"
          >
            <div className="font-medium rounded-full flex justify-center items-center hover:bg-white transition-all border-white hover:text-black text-white border-2 w-12 h-12 mr-5 md:mr-0 md:mb-5">
              2
            </div>
            Information architecture
          </a>
          <a
            href="#design"
            className="flex items-center justify-center md:flex-col md:w-52  text-center mt-5 md:mt-0"
          >
            <div className="font-medium rounded-full flex justify-center items-center hover:bg-white transition-all border-white hover:text-black text-white border-2 w-12 h-12 mr-5 md:mr-0 md:mb-5">
              3
            </div>
            Design
          </a>
          <a
            href="#reflection"
            className="flex items-center justify-center md:flex-col md:w-52  text-center mt-5 md:mt-0"
          >
            <div className="font-medium rounded-full flex justify-center items-center hover:bg-white transition-all border-white hover:text-black text-white border-2 w-12 h-12 mr-5 md:mr-0 md:mb-5">
              4
            </div>
            Reflection
          </a>
        </div>
      </section>
      <section id="research">
        <div className="flex justify-center">
          <h2 className="text-2xl md:text-5xl mb-5 font-bold lg:mb-16">
            1. Research
          </h2>
        </div>
        <p>
          The design of export portals is standardized in several of the
          consulted references, primarily in the region&apos;s portals.
          We&apos;ve noticed that a significant amount of information is
          scattered throughout the navigation. We recommend that PromPerú&apos;s
          new export portal focuses on efficiently organizing information,
          particularly avoiding tables for better comprehension. We see an
          opportunity in showcasing useful resources, such as converters and
          calculators, in the sidebar for easy access.
        </p>
        <br />
        <p>
          Emphasize improving the distribution of PromPerú&apos;s services and
          segmenting content based on the audience.
        </p>
        <p>
          Simplify visual access to information by avoiding tables and favoring
          interactive graphics. Apply this to the events calendar, incorporating
          filters by type, sector, and country, crucial for exporters.
        </p>
        <div className="md:flex w-full md:justify-between mt-14 md:mt-20 w-full">
          <div className="md:w-2/4 md:pr-10">
            <h3 className="text-1xl md:text-2xl mb-5 font-bold">Exporters</h3>
            <ul className="list-disc pl-5 md:mt-16">
              <li>
                This portal aims to consolidate data, emphasizing common
                benefits for all user segments. Visual presentation, including
                images and graphics, enhances engagement. Language is
                approachable.
              </li>
              <li className="mt-2">
                Users prioritize swift access to events, tariff codes, and
                analytical tools. They seek easy discovery of business meetings,
                financing contests, and certification processes through the
                event calendar.
              </li>
              <li className="mt-2">
                The portal caters to diverse needs, with attention to both
                frequent and occasional exporters, presenting significant
                opportunities for export base expansion.
              </li>
            </ul>
          </div>
          <div className="mt-10 md:mt-0 md:pl-10 md:w-2/4">
            <h3 className="text-1xl mb-5 md:text-2xl font-bold">
              Stakeholders
            </h3>
            <ul className="list-disc pl-5 md:mt-16">
              <li className="mt-2">
                The project objectives must address:
                <ol className="list-decimal pl-5 mt-2">
                  <li>
                    Position PROMPERÚ as the main promoter of Peruvian
                    exporters, fostering their internationalization and entry
                    into new markets.
                  </li>
                  <li>
                    Consolidate all information in a single site in an organized
                    and prioritized manner, facilitating searches for the three
                    user segments outlined.
                  </li>
                </ol>
              </li>
              <li className="mt-2">
                The proposed structure of the portal must be scalable since new
                tools and/or functionalities for exporters currently in the
                development phase will be included later.
              </li>
              <li className="mt-2">
                The interface design should be modern and innovative to
                contribute to PROMPERÚ&apos;s positioning as the number one
                entity specialized in foreign trade in the digital ecosystem.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center flex-col items-center">
        <div className="w-32 my-5">
          <Image
            src={"/images/spacework.png"}
            width={300.99}
            height={205.71}
            alt={"Spacework"}
            sizes={"(max-width: 1500px) 100px"}
          />
        </div>
        <div className="md:flex md:w-[450px] md:justify-between md:items-center">
          <div className="px-10 py-2 rounded-lg  bg-[#1F1E1E] md:py-5">
            12 Exporters
          </div>
          <div className="px-10 py-2 rounded-lg  bg-[#1F1E1E] mt-3 md:mt-0 md:py-5">
            4 Stakeholders
          </div>
        </div>
      </section>
      <section className="w-full mt-10 md:mt-20" id="wireframe">
        <h2 className="text-2xl md:text-5xl mb-5 font-bold lg:mb-16 text-center">
          2. Information architecture
        </h2>
        <h3 className="text-1xl md:text-2xl my-10 font-bold ">Section Map</h3>
        <div className="md:w-full my-5">
          <Image
            src="/images/projects/exportemos/content_flow.png"
            width={1200}
            height={205.71}
            alt={"content-flow"}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <h3 className="text-1xl md:text-2xl my-10 font-bold ">Content tree</h3>
        <div className="md:w-full my-5">
          <Image
            src="/images/projects/exportemos/content_tree_1.png"
            width={1200}
            height={205.71}
            alt={"content-flow"}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="md:w-full my-5">
          <Image
            src="/images/projects/exportemos/content_tree_2.png"
            width={1200}
            height={205.71}
            alt={"content-flow"}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </section>
      <section className="md:mt-32 w-full mt-20" id="design">
        <h2 className="text-2xl md:text-5xl mb-5 font-bold lg:mb-16 text-center">
          3. Design
        </h2>
        <h3 className="text-1xl md:text-2xl font-bold mb-10 mt-10">Mockup</h3>
        <Slider
          imageUrls={[
            "/images/projects/exportemos/mockup_1.png",
            "/images/projects/exportemos/mockup_2.jpeg",
            "/images/projects/exportemos/mockup_3.png",
            "/images/projects/exportemos/mockup_4.png",
            "/images/projects/exportemos/mockup_5.png",
            "/images/projects/exportemos/mockup_6.png",
            "/images/projects/exportemos/mockup_7.png",
            "/images/projects/exportemos/mockup_8.png",
            "/images/projects/exportemos/mockup_9.png",
            "/images/projects/exportemos/mockup_10.png",
          ]}
        />
        <h3 className="text-1xl md:text-2xl font-bold mb-10 mt-10">
          Prototypes
        </h3>
        <Slider
          imageUrls={[
            "/images/projects/exportemos/prototype_1.png",
            "/images/projects/exportemos/prototype_2.png",
            "/images/projects/exportemos/prototype_3.png",
            "/images/projects/exportemos/prototype_4.png",
            "/images/projects/exportemos/prototype_5.png",
            "/images/projects/exportemos/prototype_6.png",
            "/images/projects/exportemos/prototype_7.png",
            "/images/projects/exportemos/prototype_8.png",
            "/images/projects/exportemos/prototype_9.png",
            "/images/projects/exportemos/prototype_10.png",
            "/images/projects/exportemos/prototype_11.png",
          ]}
        />
      </section>
      <section className="my-32" id="reflection">
        <h2 className="text-2xl md:text-5xl mb-5 font-bold lg:mb-16 text-center">
          5. Reflection
        </h2>
        <p>
          The redesign has offered a clearer view of the crucial information
          that the site provides to its users, emphasizing the importance of
          search engines for its vital relevance. The reorganization of
          information and the establishment of hierarchies have contributed to
          effectively delivering web information to users, offering tangible
          benefits.
        </p>
        <br />
        <p>
          With the previous design, visit flows were minimal as the website was
          challenging to understand. However, with the new design, user testing
          results indicated a better understanding of the content, potentially
          leading to an increase in visits in the future.
        </p>
      </section>
    </main>
  );
}
