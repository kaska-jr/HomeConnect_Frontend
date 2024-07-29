import { Link } from "react-router-dom";

type BlogProps = {
  Blogname: string;
  Blogdate: string;
  Bloginfo: string;
  Blogimg: string;
};
const Blog: React.FC<BlogProps> = ({
  Blogname,
  Blogdate,
  Bloginfo,
  Blogimg,
}) => {
  return (
    <li
      style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
      className="property text-black bg-[#FEFEFE] w-96 max-h-fit py-4 flex flex-col rounded-xl gap-6 justify-center items-center "
    >
      <img
        className="w-full place-self-center p-4"
        src={Blogimg}
        alt={Blogname}
      />
      <div className="flex flex-col gap-3">
        <p className="property-location place-self-start font-medium text-[13px] px-4 text-[#797A81]">
          {Blogdate}
        </p>
        <h2 className="property-title place-self-start font-bold text-base px-4 w-[376px] text-black">
          {Blogname}
        </h2>
        <p className="property-location place-self-start font-normal text-[14px] px-4 text-black">
          {Bloginfo}
        </p>
        <hr className="bg-[#bfbfbf] h-[2.5px]" />
        <div className="flex flex-col items-end w-full h-24 justify-end p-4">
          <Link
            className="text-[#FF7E00] text-[14px] font-medium uppercase"
            to=""
          >
            Read More
          </Link>
        </div>
      </div>
    </li>
  );
};

export default Blog;
