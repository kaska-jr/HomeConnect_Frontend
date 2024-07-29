import { useState, useEffect } from "react";
import Blog from "../components/Blog";
import Blogimg from "../public/blogimg.svg";

const Blogs = () => {
  type blogData = {
    Blogname: string;
    Blogdate: string;
    Bloginfo: string;
    Blogimg: string;
  };

  const [loading, setLoading] = useState<boolean>(true);
  const [blogs, setBlogs] = useState<blogData[]>([]);

  const blogdata: blogData[] = [
    {
      Blogname:
        "Local Estate Experiences Record-Breaking Sales Figures Amidst Economic Resilience",
      Blogdate: "October 8, 2023",
      Bloginfo:
        "In a surprising turn of events, the local real estate market has witnessed an unprecedented surge in sales, leaving industry experts astounded and homeowners delighted. The latest data reveals a remarkable upswing in property tran... In a surprising turn of events, the local real estate market has witnessed an unprecedented surge in sales, leaving industry...",
      Blogimg: `${Blogimg}`,
    },
    {
      Blogname:
        "Local Estate Experiences Record-Breaking Sales Figures Amidst Economic Resilience",
      Blogdate: "October 6, 2023",
      Bloginfo:
        "In a surprising turn of events, the local real estate market has witnessed an unprecedented surge in sales, leaving industry experts astounded and homeowners delighted. The latest data reveals a remarkable upswing in property tran... In a surprising turn of events, the local real estate market has witnessed an unprecedented surge in sales, leaving industry...",
      Blogimg: `${Blogimg}`,
    },
    {
      Blogname:
        "Local Estate Experiences Record-Breaking Sales Figures Amidst Economic Resilience",
      Blogdate: "September 30, 2023",
      Bloginfo:
        "In a surprising turn of events, the local real estate market has witnessed an unprecedented surge in sales, leaving industry experts astounded and homeowners delighted. The latest data reveals a remarkable upswing in property tran... In a surprising turn of events, the local real estate market has witnessed an unprecedented surge in sales, leaving industry...",
      Blogimg: `${Blogimg}`,
    },
    {
      Blogname:
        "Local Estate Experiences Record-Breaking Sales Figures Amidst Economic Resilience",
      Blogdate: "November 4, 2023",
      Bloginfo:
        "In a surprising turn of events, the local real estate market has witnessed an unprecedented surge in sales, leaving industry experts astounded and homeowners delighted. The latest data reveals a remarkable upswing in property tran... In a surprising turn of events, the local real estate market has witnessed an unprecedented surge in sales, leaving industry...",
      Blogimg: `${Blogimg}`,
    },
    {
      Blogname:
        "Local Estate Experiences Record-Breaking Sales Figures Amidst Economic Resilience",
      Blogdate: "November 13, 2023",
      Bloginfo:
        "In a surprising turn of events, the local real estate market has witnessed an unprecedented surge in sales, leaving industry experts astounded and homeowners delighted. The latest data reveals a remarkable upswing in property tran... In a surprising turn of events, the local real estate market has witnessed an unprecedented surge in sales, leaving industry...",
      Blogimg: `${Blogimg}`,
    },
    {
      Blogname:
        "Local Estate Experiences Record-Breaking Sales Figures Amidst Economic Resilience",
      Blogdate: "November 26, 2023",
      Bloginfo:
        "In a surprising turn of events, the local real estate market has witnessed an unprecedented surge in sales, leaving industry experts astounded and homeowners delighted. The latest data reveals a remarkable upswing in property tran... In a surprising turn of events, the local real estate market has witnessed an unprecedented surge in sales, leaving industry...",
      Blogimg: `${Blogimg}`,
    },
  ];

  useEffect(() => {
    setLoading(false);
    setBlogs(blogdata);
  }, []);

  return loading ? (
    <h1 className="notfound">Loading...</h1>
  ) : blogs.length === 0 ? (
    <h1 className="notfound">No Blogs is available for Display</h1>
  ) : (
    <div className="flex flex-col items-center justify-center">
      <ul className="properties grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-12 my-8">
        {blogs.map((item, index) => (
          <Blog
            key={index}
            Blogname={item.Blogname}
            Blogdate={item.Blogdate}
            Bloginfo={item.Bloginfo}
            Blogimg={item.Blogimg}
          />
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
