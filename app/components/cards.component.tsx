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
    <Link className={`${classes?.join(" ")} hover:scale-75 transition ease-in-out`} href={`${slug ? `/projects/${slug}` : "#"} `}>
      <div className={`${subClasses?.join(" ")} relative lg:p-16 p-2 bg-gradient-to-br from-[#151231] to-[#10172f] from-60% to-78% rounded-lg `}>
        <Image
          src={imgUrl}
          height={height}
          width={width}
          alt={name}
          sizes={sizes}
        />
      </div>
      <div className={`flex flex-col lg:mt-10 mt-5 ${subClasses?.join(" ")}`}>
          <h2 className="font-bold lg:text-4xl text-2xl ">{name}</h2>
          <p className="lg:text-2xl text-xl font-thin mt-5">{description}</p>
        </div>
    </Link>
  );
};

export default Card;
