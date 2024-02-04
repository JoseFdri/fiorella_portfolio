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

export async function generateMetadata(
  _: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetaData = await parent;
  const description = ` This newsletter website aims to provide crucial information to all
  registered users on the export portal, keeping them up-to-date
  with relevant data to encourage and support exporters by offering
  tips for their success.`;
  const previousImages = parentMetaData.openGraph?.images || [];

  return {
    title: projectName,
    description,
    openGraph: {
      images: ["/images/projects/siicex/siicex.png", ...previousImages],
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
              Newsletters SIICEX
            </h1>
            <p className="lg:px-32">
              This newsletter website aims to provide crucial information to all
              registered users on the export portal, keeping them up-to-date
              with relevant data to encourage and support exporters by offering
              tips for their success.
            </p>
            <br />
          </div>
          <div className="my-10 lg:w-96 flex justify-center">
            <picture>
              <Image
                priority={true}
                src="/images/projects/siicex/siicex.png"
                width={500.99}
                height={505.71}
                alt="Siicex"
                sizes={"(max-width: 1500px) 80w"}
              />
            </picture>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full">
        <h2 className="text-2xl mb-5 font-bold lg:mt-32 lg:mb-16">Overview</h2>
        <p>
          The proposal involves redesigning the newsletters, focusing on
          presenting information in a clear and organized manner. The goal is to
          attract more users to register and consume the content, thereby
          enhancing their experience and understanding of the provided
          information.
        </p>
        <div className="flex flex-col lg:mt-16 lg:flex-row">
          <div className="lg:pr-20">
            <h2 className="text-2xl mb-5 font-bold mt-8">Problem</h2>
            <p>
              SIICEX newsletters have a significant audience of registered
              users, but they face the challenge that the content is not being
              read due to its complexity and an outdated, unappealing design.
              The main goal is to attract new registered users and encourage
              existing ones to consume the content. A redesign of the
              newsletter&apos;s design and presentation is proposed to make the
              information more accessible, engaging, and understandable, thus
              improving the user experience.
            </p>
          </div>
          <div className="lg:pl-20">
            <h2 className="text-2xl mb-5 font-bold mt-8">Solution</h2>
            <p>
              A review of the design and presentation of the newsletter is
              proposed to make the information more accessible, appealing, and
              understandable, aiming to enhance the user experience.
              Additionally, the goal is to allow user interaction, encouraging
              the contribution of relevant and helpful information.
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
              <div className="font-medium leading-loose">
                UX & UI Designer on a team of 2
              </div>
            </div>
            <div>
              <div className="font-thin my-5">Duration</div>
              <div className="font-medium leading-loose">1 month</div>
            </div>
          </div>
          <div>
            <div>
              <div className="font-thin my-5">Tools</div>
              <div className="font-medium leading-loose">
                Figma
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
                Benchmark and good practices
                <br />
                Interviews with stakeholders
                <br />
                Workshop
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
            href="#workshop"
            className="flex items-center justify-center md:flex-col md:w-52 text-center mt-5 md:mt-0"
          >
            <div className="font-medium rounded-full flex justify-center items-center hover:bg-white transition-all border-white hover:text-black text-white border-2 w-12 h-12 mr-5 md:mr-0 md:mb-5">
              2
            </div>
            Workshop
          </a>
          <a
            href="#conclusions"
            className="flex items-center justify-center md:flex-col md:w-52  text-center mt-5 md:mt-0"
          >
            <div className="font-medium rounded-full flex justify-center items-center hover:bg-white transition-all border-white hover:text-black text-white border-2 w-12 h-12 mr-5 md:mr-0 md:mb-5">
              3
            </div>
            Conclusions
          </a>
          <a
            href="#design"
            className="flex items-center justify-center md:flex-col md:w-52  text-center mt-5 md:mt-0"
          >
            <div className="font-medium rounded-full flex justify-center items-center hover:bg-white transition-all border-white hover:text-black text-white border-2 w-12 h-12 mr-5 md:mr-0 md:mb-5">
              4
            </div>
            Design
          </a>
        </div>
      </section>
      <section id="research">
        <div className="flex justify-center">
          <h2 className="text-2xl md:text-5xl mb-5 font-bold lg:mb-16">
            1. Research
          </h2>
        </div>
        <h2 className="text-1xl md:text-2xl mb-10 font-bold">
          What have they asked of us?
        </h2>
        <h3 className="text-1xl md:text-2xl mb-5 font-bold">Stakeholders</h3>
        <p>
          Stakeholders have expressed the need to share relevant events and
          fairs for exporters, as well as greater segmentation in terms of
          sectors, subsectors, regions, and export volume. There is also a
          desire to promote the successes of regional exporters and address the
          lack of information about past events.
        </p>
        <br />
        <p>
          They aim to provide relevant information, address daily queries,
          advise exporters, and share details about agreements, regulations, and
          requirements. Additionally, the focus is on informing about payments,
          including negotiations, payment methods, and strategies to prevent
          fraud. This comprehensive approach aims to enhance the experience and
          satisfaction of both users and stakeholders on the export portal.
        </p>
        <h3 className="text-1xl md:text-2xl my-5 font-bold">Users</h3>
        <p>
          Users want a more visual and quickly readable format with segmented
          content that aligns with their real needs. They seek the ability to
          actively participate and have a voice on the platform, along with a
          high level of customization allowing them to receive alerts, save
          content, and choose what they want to see. Additionally, they
          emphasize the importance of focusing on showcasing fairs and events,
          as well as displaying advisory and training content.
        </p>
        <p>
          Among their expectations, users request to see business opportunities
          at the right moment, an interface adaptable to all devices, a preview
          of content without having to open it, and more enticing titles. They
          also express an interest in using different formats, such as images,
          audio, and video. This comprehensive approach aims to enhance the user
          experience on the export platform.
        </p>
        <div className="md:flex w-full md:justify-between mt-14 md:mt-20 w-full">
          <div className="md:w-1/3">
            <h3 className="text-1xl md:text-2xl mb-5 font-bold">
              Interviews with stakeholders
            </h3>
            <ul className="list-disc pl-5 md:mt-16">
              <li>
                The Macro Regional Office (Southwest and Central) considers it
                important to have a section showcasing the export growth in
                those areas, feeling that the current newsletter content
                excludes them and is solely directed towards Lima.
              </li>
              <li className="mt-2">
                They suggest diversifying the delivery channels beyond email,
                including WhatsApp, text messages, and other social media
                platforms.
              </li>
              <li className="mt-2">
                The newsletter should not only be informative but also
                educational, incorporating tips and advice to enhance export
                activities for businesses.
              </li>
            </ul>
          </div>
          <div className="mt-10 md:mt-0 md:w-1/3">
            <ul className="list-disc pl-5 md:mt-16">
              <li>
                They emphasize the importance of aligning the information with
                our country&apos;s offerings and ensuring relevance to our
                reality, avoiding the mere replication of product launches from
                other countries, which may not be beneficial for Peruvian
                exporters.
              </li>
              <li className="mt-2">
                The new design should allow readers to select content of
                interest, ensuring they receive truly relevant information for
                their businesses.
              </li>
              <li className="mt-2">
                Setting an appropriate date and time for newsletter delivery is
                crucial, as it helps readers plan and establish a reading
                routine, generating anticipation for each edition.
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
        <div className="md:flex md:w-[450px] md:justify-center md:items-center">
          <div className="px-10 py-2 rounded-lg  bg-[#1F1E1E] md:py-5">
            7 Stakeholders
          </div>
        </div>
      </section>
      <section className="w-full mt-10 md:mt-20" id="workshop">
        <h2 className="text-2xl md:text-5xl mb-5 font-bold lg:mb-16 text-center">
          2. Workshop
        </h2>
        <div className="w-full">
          <Image
            src={"/images/projects/siicex/workshop.png"}
            width={300.99}
            height={205.71}
            alt={"Spacework"}
            sizes={"(max-width: 1500px) 100px"}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </section>
      <section className="w-full mt-10 md:mt-20">
        <h3 className="text-xl md:text-2xl mb-5 font-bold lg:mb-16">
          Workshop: Questionnaire
        </h3>
        <ul className="list-disc pl-5 md:mt-16">
          <li>
            Each attendee had to complete a questionnaire with questions about
            their company&apos;s experience, roles, and, most importantly, their
            user experience with the newsletter.
          </li>
          <li className="mt-2">
            This questionnaire allowed them to express which is the most
            convenient channel for them to receive the newsletter, enabling them
            to assess the current distribution of information.
          </li>
        </ul>
        <div className="w-full flex justify-center mt-10">
          <div className="md:w-4/5 w-full">
            <Image
              src={"/images/projects/siicex/workshop_1.png"}
              width={300.99}
              height={205.71}
              alt={"Spacework"}
              sizes={"(max-width: 1500px) 100px"}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>
      <section className="w-full mt-10 md:mt-20">
        <h3 className="text-xl md:text-2xl mb-5 font-bold lg:mb-16">
          Results: Content distribution
        </h3>
        <span>So we can say that...</span>
        <ul className="list-disc pl-5 ">
          <li>
            Nearly 50% of the participants consider it of great importance to
            receive information quickly and on specified dates.
          </li>
          <li className="mt-2">
            A large portion of the readers wishes to receive segmented
            information according to their market interests.
          </li>
        </ul>
        <div className="w-full flex justify-center mt-10">
          <div className="md:w-4/5 w-full">
            <Image
              src={"/images/projects/siicex/workshop_2.png"}
              width={300.99}
              height={205.71}
              alt={"Spacework"}
              sizes={"(max-width: 1500px) 100px"}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>
      <section className="w-full mt-10 md:mt-20">
        <h3 className="text-xl md:text-2xl mb-5 font-bold lg:mb-16">
          Results: Most used networks
        </h3>
        <span>So we can say that...</span>
        <ul className="list-disc pl-5 ">
          <li>
            The majority of users prefer the newsletter to be delivered via
            email.
          </li>
          <li className="mt-2">
            More people prefer reading the newsletter from the website rather
            than their mobile phones.
          </li>
          <li className="mt-2">
            50% of the attendees consider receiving the newsletter via WhatsApp
            as a good idea to implement.
          </li>
        </ul>
        <div className="w-full flex justify-center mt-10">
          <div className="md:w-4/5 w-full">
            <Image
              src={"/images/projects/siicex/workshop_3.png"}
              width={300.99}
              height={205.71}
              alt={"Spacework"}
              sizes={"(max-width: 1500px) 100px"}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>
      <section className="w-full mt-10 md:mt-20">
        <h3 className="text-xl md:text-2xl mb-5 font-bold lg:mb-16">
          Workshop: Content Evaluation
        </h3>
        <p>
          For this exercise, participants were asked to assess a series of
          elements and actions that could appear in the new newsletter design
          based on their importance to them.
        </p>
        <p>
          The aspects to be evaluated were: Not relevant to me , could be
          interesting to me , I am interested , I am very interested and
          essential.
        </p>
        <br />
        <p>So we can say that...</p>
        <p>
          Implementing a search function makes receiving and finding information
          easier.
        </p>
        <ul className="list-disc pl-5 mt-8">
          <li>
            They wish for the newsletter to be a means by which PromPerú can
            consistently inform exporters about new buyers to increase their
            businesses.
          </li>
          <li className="mt-2">
            They desire the content to be closely related to the type of
            businesses they conduct.
          </li>
        </ul>
        <div className="w-full flex justify-center mt-10">
          <div className="md:w-4/5 w-full">
            <Image
              src={"/images/projects/siicex/workshop_4.png"}
              width={300.99}
              height={205.71}
              alt={"Spacework"}
              sizes={"(max-width: 1500px) 100px"}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>
      <section className="w-full mt-10 md:mt-20">
        <h3 className="text-xl md:text-2xl mb-5 font-bold lg:mb-16">
          Workshop: Sharing of information
        </h3>
        <ul className="list-disc pl-5 ">
          <li>
            The sharing of information continued, where we could discuss the
            highest and lowest ratings made by everyone.
          </li>
          <li className="mt-2">
            We could also learn through questions what design they expected to
            receive, a design that would be more appealing to them.
          </li>
        </ul>
        <div className="w-full flex justify-center mt-10">
          <div className="md:w-4/5 w-full">
            <Image
              src={"/images/projects/siicex/workshop_5.png"}
              width={300.99}
              height={205.71}
              alt={"Spacework"}
              sizes={"(max-width: 1500px) 100px"}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>
      <section className="w-full mt-10 md:mt-20">
        <h3 className="text-xl md:text-2xl mb-5 font-bold lg:mb-16">
          Workshop: Ideal Newsletter
        </h3>
        <ul className="list-disc pl-5 ">
          <li>
            The participants are divided into two teams and are asked to design
            a newsletter suitable for their needs as exporters.
          </li>
          <li className="mt-2">
            Then, a representative is requested to present and explain how that
            design meets their needs, especially highlighting the sections they
            would include.
          </li>
        </ul>
        <div className="w-full flex justify-center mt-10">
          <div className="md:w-4/5 w-full">
            <Image
              src={"/images/projects/siicex/workshop_6.png"}
              width={300.99}
              height={205.71}
              alt={"Spacework"}
              sizes={"(max-width: 1500px) 100px"}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
        <div className="w-full flex justify-center mt-10">
          <div className="md:w-4/5 w-full">
            <Image
              src={"/images/projects/siicex/workshop_7.png"}
              width={300.99}
              height={205.71}
              alt={"Spacework"}
              sizes={"(max-width: 1500px) 100px"}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
        <div className="w-full flex justify-center mt-10">
          <div className="md:w-4/5 w-full">
            <Image
              src={"/images/projects/siicex/workshop_8.png"}
              width={300.99}
              height={205.71}
              alt={"Spacework"}
              sizes={"(max-width: 1500px) 100px"}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>
      <section className="w-full mt-10 md:mt-20">
        <h3 className="text-xl md:text-2xl mb-5 font-bold lg:mb-16">
          Results: Content evaluation
        </h3>
        <span>Green Team </span>
        <ul className="list-disc pl-5 ">
          <li>
            The design should include a menu where selecting an option displays
            only the corresponding content.
          </li>
          <li className="mt-2">
            The personalized studies section should show the possibility of
            visualization by categories and document download in different
            formats.
          </li>
          <li className="mt-2">
            They believe that a section of interviews should be included,
            showcasing testimonials from successful entrepreneurs and others.
          </li>
        </ul>
        <div className="w-full flex justify-center mt-10">
          <div className="md:w-4/5 w-full">
            <Image
              src={"/images/projects/siicex/workshop_9.png"}
              width={300.99}
              height={205.71}
              alt={"Spacework"}
              sizes={"(max-width: 1500px) 100px"}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>
      <section className="w-full mt-10 md:mt-20">
        <span>Purple Team</span>
        <ul className="list-disc pl-5 ">
          <li>
            The first section should display the most relevant news for foreign
            trade.
          </li>
          <li className="mt-2">
            They propose the use of dynamic infographics that allow them to
            dynamically showcase market opportunities in other countries.
          </li>
          <li className="mt-2">
            There should be a section where the product or company of the month
            can be featured.
          </li>
          <li className="mt-2">
            It is necessary to include a download area for documents or
            templates of formats important for the exporter.
          </li>
          <li className="mt-2">
            They consider it of great importance to include the possibility of
            sharing through social networks.
          </li>
        </ul>
        <div className="w-full flex justify-center mt-10">
          <div className="md:w-4/5 w-full">
            <Image
              src={"/images/projects/siicex/workshop_10.png"}
              width={300.99}
              height={205.71}
              alt={"Spacework"}
              sizes={"(max-width: 1500px) 100px"}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>
      <section className="w-full mt-10 md:mt-28">
        <h3 className="text-1xl md:text-2xl mb-5 font-bold lg:mb-16">
          What is the current situation?
        </h3>
        <div className="w-full flex justify-center mt-10">
          <div className="w-full">
            <Image
              src={"/images/projects/siicex/workshop_11.png"}
              width={300.99}
              height={205.71}
              alt={"Spacework"}
              sizes={"(max-width: 1500px) 100px"}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>
      <section className="mt-28 w-full" id="conclusions">
        <h2 className="text-2xl md:text-5xl mb-5 font-bold lg:mb-16 text-center">
          3. Conclusions
        </h2>
        <h3 className="text-1xl md:text-2xl mb-5 font-bold lg:mb-16">
          What do they expect?
        </h3>
        <div className="w-full flex justify-center mt-10">
          <div className="w-full">
            <Image
              src={"/images/projects/siicex/workshop_12.png"}
              width={300.99}
              height={205.71}
              alt={"Spacework"}
              sizes={"(max-width: 1500px) 100px"}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </section>
      <section className="md:mt-28 mt-16 w-full">
        <h3 className="text-1xl md:text-2xl mb-5 font-bold">First Insight</h3>
        <h4 className="text-1xl md:text-3xl mb-10 text-center md:font-thin">
          &quot;The information they share with us is very generic; we want
          something with specialized sources.&quot;
        </h4>
        <div className="text-1xl md:text-2xl mb-10 font-bold">
          &quot;Industry Segmentation&quot;
        </div>

        <h3 className="text-1xl md:text-2xl mb-8 font-bold">Context</h3>
        <p>
          Nuestros usuarios se mantienen informados todo el tiempo, suelen leer
          distintos semanarios, boletines y diarios especializados por lo cual
          no les llama la atención la información repetitiva.
        </p>
        <h3 className="text-1xl md:text-2xl my-8 font-bold">Problem</h3>
        <p>
          Users have mentioned that the information they find in the newsletter
          is not very relevant to them. They feel they could easily find such
          information in specialized newspapers like Gestión or Semana Económica
          (it is clear that they stay informed consistently based on their
          recognition of the news).
        </p>
        <h3 className="text-1xl md:text-2xl my-8 font-bold">Solution</h3>
        <p>
          Provide specialized information that is not a replica of other
          sources, and above all, is of interest to our exporters.
        </p>
        <div className="text-1xl md:text-2xl my-10 font-bold">
          Motivations vs. Pain Points
        </div>
        <div className="md:flex w-full md:justify-between my-8 w-full">
          <div className="md:w-1/3">
            <h3 className="text-1xl md:text-2xl mb-5 font-bold">Motivations</h3>
            <ul className="list-disc pl-5 md:mt-16">
              <li>Enhancing knowledge</li>
              <li className="mt-2">
                Learning about exports in other countries.
              </li>
              <li className="mt-2">
                Gaining insights into regulations and norms in target countries
                for potential product shipments.
              </li>
              <li className="mt-2">
                Acquiring specialized and accurate information.
              </li>
            </ul>
          </div>
          <div className="mt-10 md:mt-0 md:w-1/3">
            <h3 className="text-1xl md:text-2xl mb-5 font-bold">Pain Points</h3>
            <ul className="list-disc pl-5 md:mt-16">
              <li>Lack of specialized information.</li>
              <li className="mt-2">
                Absence of data to facilitate learning about export topics.
              </li>
              <li className="mt-2">
                Insufficient details on training sessions and events.
              </li>
            </ul>
          </div>
        </div>
        <p>
          Therefore, The industry segmentation will help exporters find
          immediate information according to their interests.
        </p>
      </section>
      <section className="md:mt-28 mt-16 w-full" id="conclusions">
        <h3 className="text-1xl md:text-2xl mb-5 font-bold">Second Insight</h3>
        <h4 className="text-1xl md:text-3xl mb-10 md:font-thin text-center">
          &quot;PromPerú has a lot of valuable information for exports, but
          despite that, it&apos;s difficult to navigate and find what I
          need.&quot;
        </h4>
        <div className="text-1xl md:text-2xl mb-10 font-bold">
          &quot;They don&apos;t find the information they want despite its
          existence.&quot;
        </div>

        <h3 className="text-1xl md:text-2xl mb-8 font-bold">Context</h3>
        <p>
          &quot;The newsletter readers have many activities to carry out in
          their companies, so allocating an extended time for reading the
          newsletter is impossible for them...&quot;
        </p>
        <h3 className="text-1xl md:text-2xl my-8 font-bold">Problem</h3>
        <p>
          &quot;They share with us that when they enter the newsletter and want
          to obtain information that benefits their businesses, it is very
          difficult for them to reach it since it is not segmented according to
          the interests of their sector. Due to the lack of time, they cannot
          review all the articles, which harms them as they recognize that
          PromPerú provides valuable and reliable information.&quot;
        </p>
        <h3 className="text-1xl md:text-2xl my-8 font-bold">Solution</h3>
        <p>
          &quot;Providing a newsletter with segmented information so that
          readers can quickly find content of interest to them.&quot;
        </p>
        <div className="text-1xl md:text-2xl my-10 font-bold">
          Motivations vs. Pain Points
        </div>
        <div className="md:flex w-full md:justify-between my-8 w-full">
          <div className="md:w-1/3">
            <h3 className="text-1xl md:text-2xl mb-5 font-bold">Motivations</h3>
            <ul className="list-disc pl-5 md:mt-16">
              <li>They want to know the content provided by PromPerú.</li>
              <li className="mt-2">
                Receive information validated by export specialists.
              </li>
              <li className="mt-2">
                Reading the newsletter regularly can help them stay informed
                about PromPerú&apos;s activities that benefit their company.
              </li>
            </ul>
          </div>
          <div className="mt-10 md:mt-0 md:w-1/3">
            <h3 className="text-1xl md:text-2xl mb-5 font-bold">Pain Points</h3>
            <ul className="list-disc pl-5 md:mt-16">
              <li>
                The organization of information is inadequate and does not
                highlight topics of interest for the exporter.
              </li>
              <li className="mt-2">
                The information is unappealing, with very small images, and the
                relevant links are not visible.
              </li>
            </ul>
          </div>
        </div>
        <p>
          Therefore, Displaying a friendly and intuitive design will help
          generate more interest among readers, allowing them to not only read
          articles faster but also understand them better.
        </p>
      </section>
      <section className="md:mt-28 mt-16 w-full" id="conclusions">
        <h3 className="text-1xl md:text-2xl mb-5 font-bold">Third Insight</h3>
        <h4 className="text-1xl md:text-3xl mb-10 md:font-thin text-center">
          &quot;We are known for being very visual; we don&apos;t read much
          anymore.&quot;
        </h4>
        <div className="text-1xl md:text-2xl mb-10 font-bold">
          &quot;They assimilate information better in a dosed manner.&quot;
        </div>
        <h3 className="text-1xl md:text-2xl mb-8 font-bold">Context</h3>
        <p>
          &quot;Users have told us that they no longer read or find textual
          information less appealing. They prefer to see infographics, graphics,
          and other dynamic visual materials.&quot;
        </p>
        <h3 className="text-1xl md:text-2xl my-8 font-bold">Problem</h3>
        <p>
          &quot;The newsletter information has too much text, small images,
          lacks visuals within the news, and infographics are not immediately
          visible but need to be searched for. Infographics are equally hidden
          as the newsletters within SIICEX.&quot;
        </p>
        <h3 className="text-1xl md:text-2xl my-8 font-bold">Solution</h3>
        <p>
          &quot;Enhance the way information is conveyed in the newsletter with
          statistical graphics, brief information capsules, infographics,
          presentations, animations, videos, etc.&quot;
        </p>
        <div className="text-1xl md:text-2xl my-10 font-bold">
          Motivations vs. Pain Points
        </div>
        <div className="md:flex w-full md:justify-between my-8 w-full">
          <div className="md:w-1/3">
            <h3 className="text-1xl md:text-2xl mb-5 font-bold">Motivations</h3>
            <ul className="list-disc pl-5 md:mt-16">
              <li>View information quickly.</li>
              <li className="mt-2">
                Better understand and assimilate the shared information.
              </li>
              <li className="mt-2">
                Prefer interactive statistics and graphics.
              </li>
            </ul>
            <span>
              They would like the shared information to be less dull and
              clearer.
            </span>
          </div>
          <div className="mt-10 md:mt-0 md:w-1/3">
            <h3 className="text-1xl md:text-2xl mb-5 font-bold">Pain Points</h3>
            <ul className="list-disc pl-5 md:mt-16">
              <li>
                TThere is nothing visually appealing in the newsletter to
                capture their attention.
              </li>
              <li className="mt-2">
                They do not assimilate information as well as they would with
                interactive graphics.
              </li>
              <li className="mt-2">The interface is not attractive at all.</li>
            </ul>
          </div>
        </div>
        <p>
          Therefore, What users need is a newsletter with an interesting and
          interactive interface, especially with specialized information. This
          will engage users with the content in the newsletter, providing them
          with valuable insights.
        </p>
      </section>
      <section className="mb-20 md:mt-32 w-full" id="design">
        <h2 className="text-2xl md:text-5xl mb-5 font-bold lg:mb-16 text-center">
          4. Design
        </h2>
        <h3 className="text-1xl md:text-2xl font-bold mb-10 mt-10">
          Wireframe
        </h3>
        <Slider
          imageUrls={[
            "/images/projects/siicex/wireframes/wireframe_1.jpg",
            "/images/projects/siicex/wireframes/wireframe_2.png",
            "/images/projects/siicex/wireframes/wireframe_3.jpg",
            "/images/projects/siicex/wireframes/wireframe_4.jpg",
            "/images/projects/siicex/wireframes/wireframe_5.jpg",
          ]}
        />
        <h3 className="text-1xl md:text-2xl font-bold mb-10 mt-10">Mockup</h3>
        <Slider
          imageUrls={[
            "/images/projects/siicex/mockups/mockup_1.png",
            "/images/projects/siicex/mockups/mockup_2.png",
            "/images/projects/siicex/mockups/mockup_3.png",
            "/images/projects/siicex/mockups/mockup_4.png",
            "/images/projects/siicex/mockups/mockup_5.png",
          ]}
        />
        <h3 className="text-1xl md:text-2xl font-bold mb-10 mt-10">
          Prototype
        </h3>
        <Slider
          imageUrls={[
            "/images/projects/siicex/prototypes/prototype_1.jpg",
            "/images/projects/siicex/prototypes/prototype_2.jpg",
            "/images/projects/siicex/prototypes/prototype_3.jpg",
            "/images/projects/siicex/prototypes/prototype_4.jpg",
            "/images/projects/siicex/prototypes/prototype_5.jpg",
            "/images/projects/siicex/prototypes/prototype_6.jpg",
          ]}
        />
      </section>
    </main>
  );
}
