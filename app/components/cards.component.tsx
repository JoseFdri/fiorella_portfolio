import Link from "next/link";
import { FC } from "react";
import Image from "next/image";

type CardProps = {
  classes?: string[];
  subClasses?: string[];
  height: number;
  width: number;
  sizes: string;
  project: {
    name: string;
    slug?: string;
    role: string;
    description: string;
    imgUrl: string;
  };
};
const Card: FC<CardProps> = ({
  project,
  classes,
  subClasses,
  width,
  height,
  sizes,
}: CardProps) => {
  const { imgUrl, name, role, description, slug } = project;

  return (
    <div className={`${classes?.join(" ")}`}>
      <div>
        <Link
          href={`${slug ? `/projects/${slug}` : "#"} `}
          className={`${subClasses?.join(
            " "
          )} group block lg:p-16 p-2 bg-gradient-to-br from-[#151231] to-[#10172f] from-60% to-78% rounded-lg overflow-hidden`}
        >
          <Image
            src={imgUrl}
            className="group-hover:scale-[1.1] transition ease-in-out"
            height={height}
            width={width}
            alt={name}
            sizes={sizes}
          />
        </Link>
        <div className={`flex flex-col lg:mt-10 mt-5 ${subClasses?.join(" ")}`}>
          <Link
            href={`${slug ? `/projects/${slug}` : "#"} `}
            className="font-bold lg:text-4xl text-2xl "
          >
            {name}
          </Link>
          <p className="lg:text-2xl text-xl font-thin mt-5">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
