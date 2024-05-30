import Image from "next/image";
import Slider from "../../components/slider.component";
import type { Metadata, ResolvingMetadata } from "next";
import { author } from "../../constants";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
const projectName = "Newsletters SIICEX";
const title = `${projectName} | ${author}`;
const description = ` This newsletter website aims to provide crucial information to all
registered users on the export portal, keeping them up-to-date
with relevant data to encourage and support exporters by offering
tips for their success.`;

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
      images: ["/images/siicex.jpg", ...previousImages],
      siteName: title,
      title: title,
      description,
    },
  };
}

export default async function Project() {
  return (
    <main className="flex flex-col items-center justify-center ">
      <section className="flex w-full px-3  md:px-5 flex justify-center">
        <div className="flex flex-col mt-14 items-center">
          <div className="lg:w-3/4 lg:flex lg:flex-col lg:justify-center text-center">
            <h1 className="text-2xl mb-3 font-bold lg:text-4xl">
              {projectName}
            </h1>
            <span className="text-xl font-light">Redesign Newsletters</span>
            <p className=" mt-5 font-light">{description}</p>
          </div>
          <div className="mt-10 flex justify-center">
            <picture>
              <Image
                priority={true}
                src="/images/projects/siicex/project_cover.png"
                width={1504}
                height={505.71}
                alt={projectName}
                sizes={"(max-width: 1500px) 80w"}
              />
            </picture>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full px-3  md:px-5 pt-8 lg:flex-row lg:justify-around container">
        <span className="mb-2">
          <b>Role</b> UX Designer
        </span>
        <span className="mb-2">
          <b>Client</b> PROMPERU
        </span>
        <div className="flex mb-2">
          <span>
            <b>Tools used</b>
          </span>
          <Image
            priority={true}
            className="mx-1"
            src="/images/icons/figma_icon.svg"
            width={25}
            height={26}
            alt="Figma icon"
            sizes={"(max-width: 25px) 80w"}
          />
          <Image
            priority={true}
            className="mx-1"
            src="/images/icons/miro_icon.svg"
            width={25}
            height={26}
            alt="Miro icon"
            sizes={"(max-width: 25px) 80w"}
          />
          <Image
            priority={true}
            className="mx-1"
            src="/images/icons/invision_icon.svg"
            width={25}
            height={26}
            alt="Invision Icon"
            sizes={"(max-width: 25px) 80w"}
          />
        </div>
      </section>
      <section className="flex flex-col w-full px-3  md:px-5 mt-10 lg:mt-20 container">
        <h2 className="text-2xl text-center mb-7 font-bold lg:text-4xl">
          My Role
        </h2>
        <p className="text-center font-light">
          As a UX designer, I worked on the redesign of the SIICEX intelligence
          bulletins. I was involved in all project phases, from the initial
          research to the final presentation. My tasks included conducting
          interviews with stakeholders and users, developing wireframes and
          prototypes, and ensuring our solutions met high user experience
          standards. Additionally, I facilitated workshop sessions to gather
          insights and validate our design approach.
        </p>
        <div className="mt-7 lg:mt-20 flex items-center flex-col lg:flex-row w-full justify-center ">
          <div className="lg:w-[150%] lg:flex-[0_0_150%]">
            <Image
              priority={true}
              className="hidden lg:block"
              src="/images/projects/siicex/my_role_images_desktop.png"
              width={7680}
              height={216}
              alt="screenshot_1"
            />
          </div>
          <Image
            priority={true}
            className="lg:hidden"
            src="/images/projects/siicex/screenshot_1.png"
            width={600}
            height={216}
            alt="screenshot_1"
            sizes={"(max-width: 600px) 80w"}
          />
          <Image
            priority={true}
            className="lg:ml-[-200px] lg:mr-10 mt-2 lg:hidden"
            src="/images/projects/siicex/screenshot_2.png"
            width={600}
            height={216}
            alt="screenshot_2"
            sizes={"(max-width: 600px) 80w"}
          />
          <Image
            priority={true}
            className="mt-2 lg:mr-[-200px] lg:ml-10 lg:hidden"
            src="/images/projects/siicex/screenshot_3.png"
            width={600}
            height={216}
            alt="screenshot_3"
            sizes={"(max-width: 600px) 80w"}
          />
        </div>
      </section>
      <section className="flex flex-col w-full px-3  md:px-5 mt-10 container lg:mt-28">
        <h2 className="text-2xl font-bold text-center lg:text-4xl">
          Design Process
        </h2>
        <b className="mt-5 text-center lg:text-xl">
          Research Desk & User Research
        </b>
        <p className="font-light text-center">
          Kick- off / Benchmark / Stakeholders Interviews / Content Tree /
          Workshop / Goal Statement / Brainstorming
        </p>
        <b className="mt-2 text-center lg:text-xl lg:mt-10">
          UI Design Desk & User Research
        </b>
        <p className="font-light text-center">
          Wireframes / Visual Design / Prototype
        </p>
        <b className="mt-2 text-center lg:text-xl lg:mt-10">Interaction Desk</b>
        <p className="font-light text-center">
          Survey Insight / Product Delivery
        </p>
      </section>
      <section className="flex flex-col w-full px-3 md:px-5 mt-10 lg:items-center container lg:mt-20">
        <h2 className="text-2xl font-bold text-center lg:text-4xl">
          User research
        </h2>
        <p className="mt-5 font-light text-center">
          The importance of including a section reflecting the growth of exports
          in the southwest and central regions is emphasized, along with
          diversifying the distribution channels of the newsletter, including
          WhatsApp and social media. Additionally, there is a need for a
          newsletter that combines informative and educational content, tailored
          to the Peruvian reality, and allows users to select relevant content
          for their businesses.
        </p>
        <div className="flex mt-5 lg:mt-10">
          <div>
            <b>Interviewees:</b>
          </div>
          <div className="flex-1 ml-4 font-light">
            <span> 7 stakeholders</span>
          </div>
        </div>
        <div className="flex mt-2">
          <div>
            <b>Interview Method:</b>
          </div>
          <div className="flex-1 ml-4 font-light">
            <span> Qualitative research; in-depth face-to-face interviews</span>
          </div>
        </div>
        <div className="w-full flex justify-center lg:mt-10 lg:px-16">
          <Image
            priority={true}
            className="mt-10 hidden lg:block"
            src="/images/projects/siicex/reviews_desktop.png"
            width={5780}
            height={1013}
            alt="Reviews"
            sizes={"(max-width: 5780px) 80w"}
          />
          <Image
            priority={true}
            className="mt-10 lg:hidden"
            src="/images/projects/siicex/reviews_mobile.png"
            width={400}
            height={1013}
            alt="Reviews"
            sizes={"(max-width: 400px) 80w"}
          />
        </div>
      </section>

      <section className="flex flex-col w-full px-3  md:px-5 mt-10 lg:mt-40 container lg:items-center">
        <h2 className="text-2xl font-bold text-center lg:text-4xl">Workshop</h2>
        <p className="mt-2 font-light text-center">
          The new portal wants to gather and show information in a clear way,
          especially for experienced exporters. It aims to make PROMPERÚ
          well-known for supporting Peruvian exporters, organize information for
          different users, and be ready for future improvements.
        </p>
        <div className="flex mt-5 lg:mt-10">
          <div>
            <b>Participants :</b>
          </div>
          <div className="flex-1 ml-4 font-light">
            <span> 10 exporters</span>
          </div>
        </div>
        <div className="flex mt-2">
          <div>
            <b>Method:</b>
          </div>
          <div className="flex-1 ml-4 font-light">
            <span>
              {" "}
              Questionnaire / Content assessment / Group discussion / Design of
              the ideal newsletter conducted by users
            </span>
          </div>
        </div>
        <div className="flex mt-2">
          <div>
            <b>Results:</b>
          </div>
          <div className="flex-1 ml-4 font-light">
            <span>
              {" "}
              We obtained the content distribution and the most commonly used
              social networks in order of priority.
            </span>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full px-3  md:px-5 mt-10 lg:mt-40 container lg:items-center">
        <h2 className="text-2xl font-bold text-center lg:text-4xl">Insights</h2>
        <p className="mt-2 font-light text-center">
          Based on the workshop with real users...
        </p>
        <div className="mt-10 lg:mt-20 flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-between lg:w-[1050px] lg:h-[670px] lg:items-start">
          <div className="rounded-2xl border-4 border-white flex flex-col items-center p-8 max-w-[430px] lg:max-w-[500px] lg:flex-[0_0_50%] lg:box-border  bg-gradient-to-b from-[#2B2F53] to-[#1D1C34] from-0% to-20%">
            <Image
              priority={true}
              src="/images/icons/bulb_icon.png"
              width={50}
              height={51}
              alt="Reviews"
              sizes={"(max-width: 72px) 80w"}
            />
            <h3 className="text-lg font-bold text-center mt-3">
              "The information provided to us is very generic; we want something
              with specialized sources."
            </h3>
            <p className=" text-center mt-3 font-light">
              Provide specialized information that is not replicated in other
              media sources and is particularly relevant to our exporters.
            </p>
          </div>
          <div className="rounded-2xl border-4 border-white flex flex-col items-center p-8 max-w-[430px] lg:max-w-[500px] mt-5 lg:mt-0 lg:flex-[0_0_50%] lg:box-border bg-gradient-to-b from-[#2B2F53] to-[#1D1C34] from-0% to-20%">
            <Image
              priority={true}
              src="/images/icons/bulb_icon.png"
              width={50}
              height={51}
              alt="Reviews"
              sizes={"(max-width: 72px) 80w"}
            />
            <h3 className="text-lg font-bold text-center mt-3">
              "PromPerú has a lot of valuable information for exports, but
              despite that, it's difficult to find what I need."
            </h3>
            <p className=" text-center mt-3 font-light">
              Proposing a segmented newsletter to ease access to relevant
              information for readers due to the current lack of segmentation.
            </p>
          </div>
          <div className="rounded-2xl border-4 border-white flex flex-col items-center p-8 max-w-[430px] lg:max-w-[500px] mt-5 lg:mt-0 lg:flex-[0_0_50%] lg:box-border bg-gradient-to-b from-[#2B2F53] to-[#1D1C34] from-0% to-20%">
            <Image
              priority={true}
              src="/images/icons/bulb_icon.png"
              width={50}
              height={51}
              alt="Reviews"
              sizes={"(max-width: 72px) 80w"}
            />
            <h3 className="text-lg font-bold text-center mt-3">
              "We are characterized by being very visual; we don't read much
              anymore."
            </h3>
            <p className=" text-center mt-3 font-light">
              Users prefer visual content such as infographics and dynamic
              visuals over text-heavy information, indicating a need to enhance
              the newsletter with more engaging visual elements like graphics,
              infographics, and videos.
            </p>
          </div>
          <div className="rounded-2xl border-4 border-white flex flex-col items-center p-8 max-w-[430px] lg:max-w-[500px] mt-5 lg:mt-0 lg:flex-[0_0_50%] lg:box-border bg-gradient-to-b from-[#2B2F53] to-[#1D1C34] from-0% to-20%">
            <Image
              priority={true}
              src="/images/icons/bulb_icon.png"
              width={50}
              height={51}
              alt="Reviews"
              sizes={"(max-width: 72px) 80w"}
            />
            <h3 className="text-lg font-bold text-center mt-3">
              "We would like to be notified about fairs and training sessions
              through the newsletter."
            </h3>
            <p className=" text-center mt-3 font-light">
              The newsletter should inform users about upcoming events, fairs,
              training sessions, and more, catering to their interest in
              furthering their knowledge about exportation.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full px-3 md:px-5 mt-10 lg:mt-32 items-center container">
        <h2 className="text-2xl font-bold text-center mb-5 lg:mb-20 lg:text-4xl">
          Information architecture
        </h2>
        <Image
          priority={true}
          src="/images/projects/siicex/information_architecture.png"
          width={3404}
          height={2907}
          alt="Information architecture"
          sizes={"(max-width: 72px) 80w"}
        />
      </section>
      <section className="flex flex-col w-full px-3 md:px-5 mt-10 lg:mt-32 items-center container">
        <h2 className="text-2xl font-bold text-center mb-5 lg:text-4xl">
          Interview Method:
        </h2>
        <p className="text-center font-light">
          Qualitative research; in-depth face-to-face interviews
        </p>
        <Image
          priority={true}
          className="hidden lg:block lg:mt-20"
          src="/images/projects/siicex/the_solution_desktop.png"
          width={6000}
          height={420}
          alt="The solution image"
          sizes={"(max-width: 366px) 80w"}
        />
        <Image
          priority={true}
          className="lg:hidden mt-10"
          src="/images/projects/siicex/the_solution.png"
          width={500}
          height={420}
          alt="he solution image"
          sizes={"(max-width: 366px) 80w"}
        />
      </section>
      <section className="flex flex-col w-full px-3  md:px-5 mt-10 lg:mt-32 items-center container">
        <h2 className="text-2xl font-bold text-center mb-5 lg:text-4xl">
          Personalised Recommendations
        </h2>
        <p className="font-light">
          Based on the in-depth interviews, user wants
        </p>
        <h3 className="text-xl mt-5 mb-2 font-bold lg:text-2xl lg:mt-20">
          Prioritize information
        </h3>
        <p className="font-light lg:w-[630px] lg:mt-5">
          Improved site architecture allows self-service for exporters,
          providing quick answers. It requires intelligent navigation, easy
          search, and tailored support.
        </p>
        <div className="mt-10 lg:mt-20">
          <Image
            priority={true}
            className="hidden lg:block"
            src="/images/projects/siicex/prioritize_information_desktop.png"
            width={6260}
            height={276}
            alt="Prioritize information imagenes"
            sizes={"(max-width: 600px) 80w"}
          />

          <Image
            priority={true}
            className="lg:hidden"
            src="/images/projects/siicex/information_1.png"
            width={600}
            height={276}
            alt="Information 1"
            sizes={"(max-width: 600px) 80w"}
          />
          <Image
            priority={true}
            className="mt-2 lg:hidden"
            src="/images/projects/siicex/information_2.png"
            width={600}
            height={276}
            alt="Information 2"
            sizes={"(max-width: 600px) 80w"}
          />
          <Image
            priority={true}
            className="mt-2 lg:hidden"
            src="/images/projects/siicex/information_3.png"
            width={600}
            height={276}
            alt="Information 3"
            sizes={"(max-width: 600px) 80w"}
          />
          <Image
            priority={true}
            className="mt-2 lg:hidden"
            src="/images/projects/siicex/information_4.png"
            width={600}
            height={276}
            alt="Information 4"
            sizes={"(max-width: 600px) 80w"}
          />
          <Image
            priority={true}
            className="mt-2 lg:hidden"
            src="/images/projects/siicex/information_5.png"
            width={600}
            height={276}
            alt="Information 4"
            sizes={"(max-width: 600px) 80w"}
          />
          <Image
            priority={true}
            className="mt-2 lg:hidden"
            src="/images/projects/siicex/information_6.png"
            width={600}
            height={276}
            alt="Information 4"
            sizes={"(max-width: 600px) 80w"}
          />
          <Image
            priority={true}
            className="mt-2 lg:hidden"
            src="/images/projects/siicex/information_7.png"
            width={600}
            height={276}
            alt="Information 4"
            sizes={"(max-width: 600px) 80w"}
          />
        </div>
        <h3 className="text-xl mt-10 text-center font-semibold lg:text-2xl lg:mt-32">
          Mockups and Prototypes
        </h3>
        <p className="font-light text-center mt-20">Desktop version</p>
        <div className="w-full flex justify-center">
          <div className="lg:w-[150%] lg:flex-[0_0_150%]">
            <Image
              priority={true}
              className="mt-10 hidden lg:block lg:my-20"
              src="/images/projects/siicex/mockups_images_desktop.png"
              width={8000}
              height={694}
              alt="Mockups"
              sizes={"(max-width: 500px) 80w"}
            />
          </div>
        </div>
        <Image
          priority={true}
          className="mt-10 lg:hidden mb-20"
          src="/images/projects/siicex/mockups_images_responsive.png"
          width={500}
          height={694}
          alt="Mockups"
          sizes={"(max-width: 500px) 80w"}
        />
        <p className="font-light text-center">Responsive version</p>
        <div className="w-full flex justify-center">
          <div className="lg:w-[150%] lg:flex-[0_0_150%]">
            <Image
              priority={true}
              className="mt-10 hidden lg:block lg:my-20"
              src="/images/projects/siicex/mockups_responsive_images_desktop.png"
              width={8000}
              height={694}
              alt="Mockups"
              sizes={"(max-width: 500px) 80w"}
            />
          </div>
        </div>
        <Image
          priority={true}
          className="mt-10 lg:hidden mb-20"
          src="/images/projects/siicex/mockups_responsive_images_responsive.png"
          width={500}
          height={694}
          alt="Mockups"
          sizes={"(max-width: 500px) 80w"}
        />
      </section>
    </main>
  );
}
