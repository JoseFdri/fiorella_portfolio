import Image from 'next/image';
import Cards from '@/app/components/cards.component';

const projects = [
  {
    name: 'Export Portal',
    role: 'UR | UX',
    file_name: "exportemos",
    description: 'Web redesign to promote exports in Peru, with structural and content improvements for an effective user experience.',
    imgUrl: '/images/portal.png',
  },
  {
    name: 'Trume',
    role: 'UX|UI',
    description: 'Redesign of an application aimed at enhancing the user experience in patient monitoring and virtual appointment scheduling.',
    imgUrl: '/images/trume.png', 
    
  },
  {
    name: 'Rockerbox',
    role: 'UX|UI',
    description: 'Rockerbox is a company that provides forms to businesses so that their employees can access state benefits, such as tax reductions or other privileges.',
    imgUrl: '/images/rockerbox.png', 
  },
  {
    name: 'Requirements',
    role: 'UX|UI',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imgUrl: '/images/requirements.png',
  },
  {
    name: 'Turismo In',
    role: 'UR | UX',
    description: 'Web redesign aimed at promoting tourism in Peru for students and professionals, enhancing usability and information.',
    imgUrl: '/images/turismo.png',
  },
  {
    name: 'YOY Lima Box Park',
    role: 'UR | UX',
    description: 'I participated in the creation of an application that aims to provide various menu options and the ability to place pre-orders.',
    imgUrl: '/images/yoy.png',
  },
  {
    name: 'Mow Managers',
    role: 'UX | UI',
    description: 'I redesigned a CMS to streamline employee time tracking and job function recording.',
    imgUrl: '/images/manager.png',
  },
  {
    name: 'KeepltSaved',
    role: 'UX | UI',
    description: 'Creation of an application where senior citizens or individuals with serious illnesses can record important personal information.',
    imgUrl: '/images/eol.png',
  }
];

export default function Home() {
  return (
    <main className="flex lg:w-11/12 max-w-[300px] md:max-w-2xl lg:max-w-screen-xl flex-col lg:px-0">
      <section className='flex flex-col lg:mt-48 w-full'>
        <h1 className='lg:text-6xl text-2xl font-bold'>
          Crafting memorable digital <br className='hidden lg:inline'/> experiences with a user centered <br className='hidden lg:inline'/> approach.
        </h1>
        <div className='flex flex-row-reverse mt-5'>
          <p className='w-full lg:w-1/2 text-slate-500 '>
            Passionate about user experience design with nearly four years of experience in crafting impactful digital solutions. My focus is on blending attractive aesthetics with intuitive functionality, always with the user at the heart of each design. Throughout my career, I&apos;ve had the privilege of working on various projects that have transformed ideas into remarkable digital experiences.
          </p>
        </div>
      </section>
      <section className='w-full lg:mt-44 mt-12'>
        <div className="flex justify-center lg:mb-24 mb-10">
          <Image
            src='images/arrow.svg'
            height={50}
            width={16}
            alt="Arrow down"
          />
        </div>
        <div className='flex flex-col lg:flex-row flex-wrap'>
          {projects.map((project, i) => {
            const classes = ['lg:w-1/2', 'w-full', 'lg:my-10', 'my-5'];
            const subClasses = ['relative', 'mx-0'];

            subClasses.push(i % 2 !== 0 ? 'lg:ml-10' : 'lg:mr-10' );

            return (
              <Cards
                key={i}
                sizes='(max-width: 1500px) 80w'
                width={717.99}
                height={505.71}
                project={project}
                subClasses={subClasses}
                classes={classes}
              />
            )
          })}
          
        </div>
      </section>
    </main>
  )
}
