// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Component } from "react";
// import Slider from "react-slick";

// type Review = {
//   text: string;
//   customImage: string;
//   author: string;
//   desc: string;
// };

// const ReviewCarousel: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
//   return (
//     <div className="flex">
//       {reviews.map((review, index) => (
//         <div key={index}>
//           <div className="review bg-[#0B2749] p-12 text-white m-12 w-[600px] rounded-2xl flex flex-col gap-6">
//             <p>{review.text}</p>
//             <div className="flex flex-row gap-2">
//               <img
//                 className="rounded-[100%] h-12 w-12"
//                 src={review.customImage}
//                 alt="customImage"
//               />
//               <div className="flex flex-col">
//                 <p className="author">{review.author}</p>
//                 <p className="desc text-[#AF6868]">{review.desc}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ReviewCarousel;

// export default class CenterMode extends Component {
//   render() {
//     const settings = {
//       className: "center",
//       centerMode: true,
//       infinite: true,
//       centerPadding: "60px",
//       slidesToShow: 3,
//       speed: 500,
//     };
//     return (
//       <div>
//         <Slider {...settings}>
//           <div className="flex items-center justify-between w-full h-[50vh]">
//             <div className="w-[30%] h-[45vh] -ml-20 flex items-center justify-center">
//               <div className="w-full h-[30vh] flex flex-col items-start justify-center rounded-[26px] bg-[#0B2749]">
//                 <p className="text-white text-xs font-semibold pb-5">
//                   <StarIcon style={{ fontSize: "medium", color: "yellow" }} />
//                   <StarIcon style={{ fontSize: "medium", color: "yellow" }} />
//                   <StarIcon style={{ fontSize: "medium", color: "yellow" }} />
//                   <StarIcon style={{ fontSize: "medium", color: "yellow" }} />
//                   <StarIcon style={{ fontSize: "medium", color: "yellow" }} />
//                   5.0
//                 </p>
//                 <p className="text-[13px] pb-5">
//                   I've been using different means for several months now, and I
//                   can't express how impressed I am with its capabilities. As a
//                   property owner managing multiple rental units, staying
//                   organized and efficient has always been a challenge – until I
//                   discovered EstateEase.
//                 </p>
//                 <div className="flex items-center justify-between">
//                   <img
//                     src={ReviewBg}
//                     className="w-[40px] h-[40px]"
//                     alt="Review-bg"
//                   />
//                   <div className="pl-2">
//                     <p className="text-white text-xs font-semibold">
//                       John, Adeniyi
//                     </p>
//                     <p className="text-white text-xs font-light">
//                       CEO, Aritech
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="w-[45%] h-[45vh] flex">
//               <div className="w-full h-[30vh] flex flex-col items-start justify-center p-12 rounded-[26px] bg-[#0B2749]">
//                 <p className="text-white text-xs font-semibold pb-5">
//                   <StarIcon style={{ fontSize: "medium", color: "yellow" }} />
//                   <StarIcon style={{ fontSize: "medium", color: "yellow" }} />
//                   <StarIcon style={{ fontSize: "medium", color: "yellow" }} />
//                   <StarIcon style={{ fontSize: "medium", color: "yellow" }} />
//                   <StarIcon style={{ fontSize: "medium", color: "yellow" }} />
//                   5.0
//                 </p>
//                 <p className="text-sm pb-5">
//                   I've been using different means for several months now, and I
//                   can't express how impressed I am with its capabilities. As a
//                   property owner managing multiple rental units, staying
//                   organized and efficient has always been a challenge – until I
//                   discovered EstateEase.
//                 </p>
//                 <div className="flex items-center justify-between">
//                   <img
//                     src={ReviewBg}
//                     className="w-[40px] h-[40px]"
//                     alt="Review-bg"
//                   />
//                   <div className="pl-2">
//                     <p className="text-white text-xs font-semibold">
//                       John, Adeniyi
//                     </p>
//                     <p className="text-white text-xs font-light">
//                       CEO, Aritech
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="w-[30%] h-[45vh] -mr-20 items-center justify-center flex">
//               <div className="w-full h-[30vh] flex flex-col items-start justify-center p-12 rounded-[26px] bg-[#0B2749]">
//                 <p className="text-white text-xs font-bold pb-3 pt-2">
//                   <StarIcon style={{ fontSize: "medium", color: "yellow" }} />
//                   <StarIcon style={{ fontSize: "medium", color: "yellow" }} />
//                   <StarIcon style={{ fontSize: "medium", color: "yellow" }} />
//                   <StarIcon style={{ fontSize: "medium", color: "yellow" }} />
//                   <StarIcon style={{ fontSize: "medium", color: "yellow" }} />
//                   5.0
//                 </p>
//                 <p className="text-[13px] pb-5">
//                   I've been using different means for several months now, and I
//                   can't express how impressed I am with its capabilities. As a
//                   property owner managing multiple rental units, staying
//                   organized and efficient has always been a challenge – until I
//                   discovered EstateEase.
//                 </p>
//                 <div className="flex items-center justify-between pb-3">
//                   <img
//                     src={ReviewBg}
//                     className="w-[40px] h-[40px]"
//                     alt="Review-bg"
//                   />
//                   <div className="pl-2">
//                     <p className="text-white text-xs font-semibold">
//                       John, Adeniyi
//                     </p>
//                     <p className="text-white text-xs font-light">
//                       CEO, Aritech
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
