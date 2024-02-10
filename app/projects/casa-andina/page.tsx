import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import { author } from "../../constants";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
const projectName = "Casa Andina";
const title = `${projectName} | ${author}`;
const description = `Casa Andina, a Peruvian hotel chain committed to providing exceptional travel experiences, is undertaking a redesign project focused on enhancing user experience, with a particular emphasis on responsive design.`;

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
      images: ["/images/casa_andina.jpg", ...previousImages],
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
              Casa Andina
            </h1>
            <p className="lg:px-32">{description}</p>
            <br />
            <div className="lg:px-32">
              <a href="https://www.casa-andina.com/es/home">
                https://www.casa-andina.com/es/home
              </a>
            </div>
          </div>
          <div className="my-10 lg:w-96 flex justify-center">
            <picture>
              <Image
                priority={true}
                src="/images/projects/casa-andina/casa_andina.png"
                width={500.99}
                height={505.71}
                alt="Casa Andina"
                sizes={"(max-width: 1500px) 80w"}
              />
            </picture>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full">
        <h2 className="text-2xl mb-5 font-bold lg:mt-32 lg:mb-16">Overview</h2>
        <p>
          Creation and design of the revamped website casa-andina.com, aiming to
          enhance the entire hotel search and booking experience, with a special
          focus on mobile usability.
        </p>
        <div className="flex flex-col lg:mt-16 lg:flex-row">
          <div className="md:w-2/4 md:pr-10">
            <h2 className="text-2xl mb-5 font-bold mt-8">Problem</h2>
            <p>
              Upon evaluating the original website, we identified serious
              usability issues and disorganized design that had a negative
              impact on the user experience. The outdated design and lack of a
              clear hierarchical structure made it challenging for users to
              locate information, leading to confusion.
            </p>
          </div>
          <div className="md:pl-10 md:w-2/4">
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
              <div className="font-medium leading-loose">Casa Andina</div>
            </div>
            <div>
              <div className="font-thin my-5">Role</div>
              <div className="font-medium leading-loose">
                UR Designer on a team of 3
              </div>
            </div>
            <div>
              <div className="font-thin my-5">Duration</div>
              <div className="font-medium leading-loose">2 month</div>
            </div>
          </div>
          <div>
            <div>
              <div className="font-thin my-5">Tools</div>
              <div className="font-medium leading-loose">
                Sketch
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
                Interviews with stakeholders
                <br />
                Benchmark
                <br />
                Visual design
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-start md:items-center flex-col w-full my-20 md:my-24">
        <div className="md:flex-row flex-col items-start md:items-start flex">
          <a
            href="#immersion"
            className="flex items-center justify-center md:flex-col md:w-52 text-center"
          >
            <div className="font-medium rounded-full flex justify-center items-center hover:bg-white transition-all border-white hover:text-black text-white border-2 w-12 h-12 mr-5 md:mr-0 md:mb-5">
              1
            </div>
            Immersion
          </a>
          <a
            href="#architecture"
            className="flex items-center justify-center md:flex-col md:w-52 text-center mt-5 md:mt-0"
          >
            <div className="font-medium rounded-full flex justify-center items-center hover:bg-white transition-all border-white hover:text-black text-white border-2 w-12 h-12 mr-5 md:mr-0 md:mb-5">
              2
            </div>
            Information architecture
          </a>
          <a
            href="#reflection"
            className="flex items-center justify-center md:flex-col md:w-52  text-center mt-5 md:mt-0"
          >
            <div className="font-medium rounded-full flex justify-center items-center hover:bg-white transition-all border-white hover:text-black text-white border-2 w-12 h-12 mr-5 md:mr-0 md:mb-5">
              3
            </div>
            Reflection
          </a>
        </div>
      </section>
      <section id="immersion">
        <div className="flex justify-center">
          <h2 className="text-2xl md:text-5xl mb-10 font-bold md:w-2/4 text-center">
            1. Inmersion
          </h2>
        </div>
        <p>
          This analysis focuses on improving the structure, navigation, and
          design of the Casa Andina website. It suggests simplifying the layout,
          using information hierarchies, and optimizing the architecture for
          specific hotel searches. The design should reflect the brand&apos;s
          modernization without creating false expectations, maintaining a
          modern and aspirational style to attract diverse travelers. The
          importance of a seamless mobile experience is emphasized, especially
          for young users, anticipating that mobile bookings will exceed 50%
          according to industry trends.
        </p>
        <div className="md:flex w-full md:justify-between w-full mt-10">
          <div className="md:w-2/4 md:pr-10">
            <h3 className="text-1xl md:text-2xl mb-5 font-bold">
              Strategic recommendations
            </h3>
            <p>
              The strategy focuses on personalization, business intelligence,
              and adaptation to contexts and seasonalities. Emphasis is placed
              on improving soft content, time-limited promotions, and a clear
              customer retention strategy to guide them towards conversions.
              Additionally, clarifying the differentiation between hotel brands
              is suggested to enhance the value proposition.
            </p>
          </div>
          <div className="mt-10 md:mt-0 md:pl-10 md:w-2/4">
            <h3 className="text-1xl md:text-2xl mb-5 font-bold">
              Functional Recommendations
            </h3>
            <p>
              We believe it&apos;s crucial to highlight key components, such as
              the booking engine and search filters, to enhance the user
              experience and encourage conversions. Implementing generic search
              tags will optimize search and indexing in search engines.
              Additionally, we propose making the contact form more visible,
              simplifying access for better lead capture and avoiding user time
              loss in the current site navigation.
            </p>
          </div>
        </div>
        <div className="md:flex w-full md:justify-between mt-14 md:mt-20 w-full">
          <div className="md:w-2/4 md:pr-10">
            <h3 className="text-1xl md:text-2xl mb-5 font-bold">
              Interviews with stakeholders
            </h3>
            <p>
              Casa Andina aims to embody Peruvian hospitality, aspiring to be a
              warm haven with impeccable service for travelers seeking an
              authentic experience in the country. The staff&apos;s dedication,
              reflected in high customer satisfaction KPIs, is a valuable lesson
              to consider in the design of the new site. The challenge lies in
              succinctly conveying the elevator pitch for each category
              (Premium, Select, and Standard) in the interface, aiming for a
              modern and aspirational design that reflects the brand&apos;s
              distinctive values while avoiding an overly luxurious perception.
            </p>
          </div>
          <div className="mt-10 md:mt-0 md:pl-10 md:w-2/4 md:pt-12">
            <p>
              The redesign of Casa Andina&apos;s website aims to enhance the
              brand experience by capturing its essence and creating a
              recognizable identity beyond the logo. The trapezoid shape will be
              creatively used to showcase images, textures, and colors, serving
              as a storytelling element. The focus on customer feedback and the
              incorporation of a dedicated section for positive experiences are
              integral parts of the redesign, contributing to the humanization
              of the brand.
            </p>
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
        <div className="md:flex md:w-[450px] md:justify-center md:items-center">
          <div className="px-10 py-2 rounded-lg  bg-[#1F1E1E] md:py-5">
            7 Stakeholders
          </div>
        </div>
      </section>
      <section className="w-full mt-10 md:mt-20" id="architecture">
        <h2 className="text-2xl md:text-5xl mb-5 font-bold lg:mb-16 text-center">
          2. Information architecture
        </h2>
        <h3 className="text-1xl md:text-2xl my-10 font-bold ">Content tree</h3>
        <div className="w-full">
          <Image
            src={"/images/projects/casa-andina/architecture.jpg"}
            width={300.99}
            height={205.71}
            alt={"Architecture"}
            sizes={"(max-width: 1500px) 100px"}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </section>
      <section className="my-28 w-full " id="reflection">
        <h2 className="text-2xl md:text-5xl mb-5 font-bold lg:mb-16 text-center">
          3. Reflection
        </h2>
        <p>
          We work on the architecture with a detailed approach, ensuring that
          the client fully understands the organization and proposed contents
          for their digital presence. We define the navigation structure to
          guarantee a smooth and interactive experience for users on the web.
        </p>
      </section>
    </main>
  );
}
