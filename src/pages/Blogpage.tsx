import Blogs from "../components/Blogs";

function Blogpage() {
  return (
    <div className="flex flex-col gap-4 w-full h-full items-center justify-center">
      <div className="w-full h-48 md:h-96 text-center justify-center flex items-center bg-[#51657d]">
        <h1 className="text-white text-[60px] font-bold top-0 mt-0">Blog</h1>
      </div>
      <Blogs />
    </div>
  );
}

export default Blogpage;
