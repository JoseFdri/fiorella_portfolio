import Image from 'next/image';
import Slider from '../../components/slider.component'
import htmlParser from 'html-react-parser';

type Props = {
  params: {
    project: string;
  };
}

async function getData(fileName: string) {
  const res = await fetch(`${process.env.BASE_URL}/projects/${fileName}.json`)
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Project({ params }: Props) {
  const { project } = params;
  const data = await getData(project);
  const { details, sections } = data;

  return (
    <main className="flex lg:w-11/12 max-w-[300px] md:max-w-2xl lg:max-w-screen-xl flex-col lg:px-0 items-center justify-center">
      <section className="flex lg:mt-44 w-full">
        <div className='flex flex-col lg:flex-row'>
          <div className='lg:w-3/4 lg:flex lg:flex-col lg:justify-center'>
            <h1 className='text-3xl mb-10 font-bold lg:text-7xl'>
              {data.title}
            </h1>
            <p className='lg:px-32'>
              {data.description}
            </p>
            <br />
            <div className='lg:px-32'>
              <a href={data.link} >{data.link}</a>
            </div>
          </div>
          <div className='my-10 lg:w-96 flex justify-center'>
            <picture>
              <Image
                src={data.project_img}
                width={500.99}
                height={505.71}
                alt={data.title}
                sizes={'(max-width: 1500px) 80w'}
              />
            </picture>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full">
        <h2 className='text-2xl mb-5 font-bold lg:mt-32 lg:mb-16'>
          Overview
        </h2>
        <p>
          {data.overview}
        </p>
        <div className='flex flex-col lg:mt-16 lg:flex-row'>
          <div className='lg:pr-20'>
            <h2 className='text-2xl mb-5 font-bold mt-8'>
              Problem
            </h2>
            <p>
              {data.problem}
            </p>
          </div>
          <div className='lg:pl-20'>
            <h2 className='text-2xl mb-5 font-bold mt-8'>
              Solution
            </h2>
            <p>
              {data.solution}
            </p>
          </div>
        </div>
      </section>
      <section className='flex justify-center lg:mt-44 bg-[#181818] w-screen py-7 mt-20'>
        <div className='w-full lg:w-11/12 max-w-[300px] md:max-w-2xl lg:max-w-screen-xl md:flex md:justify-between'>
          <div >
            <div>
              <div className='font-thin my-5'>Client</div>
              <div className='font-medium leading-loose'>{details.client}</div>
            </div>
            <div>
              <div className='font-thin my-5'>Role</div>
              <div className='font-medium leading-loose'>{details.role}</div>
            </div>
            <div>
              <div className='font-thin my-5'>Duration</div>
              <div className='font-medium leading-loose'>
              {details.duration}
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className='font-thin my-5'>Tools</div>
              <div className='font-medium leading-loose'>
                {details.tools.map((tool: string) => (<>{tool} <br /></>))}
              </div>
            </div>
          </div>
          <div>
          <div>
              <div className='font-thin my-5'>Process</div>
              <div className='leading-loose font-medium'>
                { details.process.map((step: string) => <>{step}<br /></>)}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-start md:items-center flex-col w-full my-20 md:my-24">
        <div className='md:flex-row flex-col items-start md:items-start flex'>
          <a href="#research" className='flex items-center justify-center md:flex-col md:w-52 text-center'>
            <div className='font-medium rounded-full flex justify-center items-center hover:bg-white transition-all border-white hover:text-black text-white border-2 w-12 h-12 mr-5 md:mr-0 md:mb-5'>
              1
            </div>
            {sections.research.title}
          </a>
          <a href="#wireframe" className='flex items-center justify-center md:flex-col md:w-52 text-center mt-5 md:mt-0'>
            <div className='font-medium rounded-full flex justify-center items-center hover:bg-white transition-all border-white hover:text-black text-white border-2 w-12 h-12 mr-5 md:mr-0 md:mb-5'>
              2
            </div>
            {sections.architecture.title}
          </a>
          <a href="#design" className='flex items-center justify-center md:flex-col md:w-52  text-center mt-5 md:mt-0'>
            <div className='font-medium rounded-full flex justify-center items-center hover:bg-white transition-all border-white hover:text-black text-white border-2 w-12 h-12 mr-5 md:mr-0 md:mb-5'>
              3
            </div>
            {sections.design.title}
          </a>
          <a href="#reflection" className='flex items-center justify-center md:flex-col md:w-52  text-center mt-5 md:mt-0'>
            <div className='font-medium rounded-full flex justify-center items-center hover:bg-white transition-all border-white hover:text-black text-white border-2 w-12 h-12 mr-5 md:mr-0 md:mb-5'>
              4
            </div>
            {sections.reflection.title}
          </a>
        </div>
      </section>
      <section id='research'>
        <div className='flex justify-center'>
          <h2 className='text-2xl md:text-5xl mb-5 font-bold lg:mb-16'>
            1. {sections.research.title}
          </h2>
        </div>
        {htmlParser(sections.research.content)}
        <div className='md:flex w-full md:justify-between mt-14 md:mt-20 w-full'>
          <div className='md:w-1/3'>
            <h3 className='text-1xl md:text-2xl mb-5 font-bold'>
              {sections.research.left_column.title}
            </h3>
            {htmlParser(sections.research.left_column.content)}
          </div>
          <div className='mt-10 md:mt-0 md:w-1/3'>
            <h3 className='text-1xl mb-5 md:text-2xl font-bold'>
            {sections.research.right_column.title}
            </h3>
            {htmlParser(sections.research.right_column.content)}
          </div>
        </div>
      </section>
      <section className='w-full flex justify-center flex-col items-center'>
        <div className='w-32 my-5'>
          <Image
            src={'/images/spacework.png'}
            width={300.99}
            height={205.71}
            alt={'Spacework'}
            sizes={'(max-width: 1500px) 100px'}
          />
        </div>
        <div className='md:flex md:w-[450px] md:justify-between md:items-center'>
          <div className='px-10 py-2 rounded-lg  bg-[#1F1E1E] md:py-5'>
          {sections.research.left_label}
          </div>
          <div className='px-10 py-2 rounded-lg  bg-[#1F1E1E] mt-3 md:mt-0 md:py-5'>
          {sections.research.right_label}
          </div>
        </div>
      </section>
      <section className='w-full mt-10 md:mt-20' id='wireframe'>
        <h2 className='text-2xl md:text-5xl mb-5 font-bold lg:mb-16 text-center'>
          2. {sections.architecture.title}
        </h2>
        {sections.architecture.sections.map((section: { title: string, images: string[]}) => {
          return (
            <>
              <h3 className='text-1xl md:text-2xl my-10 font-bold '>
                {section.title}
              </h3>
              {section.images.map((imgUrl, i)=> (
                <div className='md:w-full my-5' key={i}>
                  <Image
                    src={imgUrl}
                    width={1200}
                    height={205.71}
                    alt={'content-flow'}
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    />
                </div>
              ))}
            </>
          )
        })}
      </section>
      <section className='mt-20 w-full' id='design'>
        <h2 className='text-2xl md:text-5xl mb-5 font-bold lg:mb-16 text-center'>
          3. {sections.design.title}
        </h2>
        {sections.design.sections.map((section: { title: string, images: string[]}) => {
          return (
            <>
              <h3 className='text-1xl md:text-2xl font-bold mb-24 mt-10'>
                {section.title}
              </h3>
              <Slider imageUrls={section.images}/>
            </>
          )
        })}
      </section>
      <section className='my-32' id='reflection'>
        <h2 className='text-2xl md:text-5xl mb-5 font-bold lg:mb-16 text-center'>
          5. {sections.reflection.title}
        </h2>
        {htmlParser(sections.reflection.content)}
      </section>
    </main>
  )
}
