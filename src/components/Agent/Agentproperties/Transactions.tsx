import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoCaretDown } from "react-icons/io5";

type transcations = {
  PropertyCode: string;
  PropertyPrice: string;
  PropertyAction: string;
  PropertyActionTitle: string;
  TransactionID: string;
};
const Transactions = () => {
  const transactions: transcations[] = [
    {
      PropertyCode: "AD501",
      PropertyPrice: "250,000,000",
      PropertyAction: "leased",
      PropertyActionTitle: "Sale",
      TransactionID: "897hxxxxxxxxxxxxx90",
    },
    {
      PropertyCode: "AD502",
      PropertyPrice: "250,000,000",
      PropertyAction: "sold",
      PropertyActionTitle: "Rent",
      TransactionID: "acd79xxxxxxxxxxxxxhj",
    },

    {
      PropertyCode: "AD503",
      PropertyPrice: "250,000,000",
      PropertyAction: "leased",
      PropertyActionTitle: "Sale",
      TransactionID: "897hxxxxxxxxxxxxx90",
    },
    {
      PropertyCode: "AD504",
      PropertyPrice: "250,000,000",
      PropertyAction: "leased",
      PropertyActionTitle: "Sale",
      TransactionID: "897hxxxxxxxxxxxxx90",
    },
    {
      PropertyCode: "AD505",
      PropertyPrice: "250,000,000",
      PropertyAction: "sold",
      PropertyActionTitle: "Rent",
      TransactionID: "acd79xxxxxxxxxxxxxhj",
    },
    {
      PropertyCode: "AD506",
      PropertyPrice: "250,000,000",
      PropertyAction: "leased",
      PropertyActionTitle: "Sale",
      TransactionID: "897hxxxxxxxxxxxxx90",
    },
    {
      PropertyCode: "AD506",
      PropertyPrice: "250,000,000",
      PropertyAction: "sold",
      PropertyActionTitle: "Rent",
      TransactionID: "acd79xxxxxxxxxxxxxhj",
    },
    {
      PropertyCode: "AD507",
      PropertyPrice: "250,000,000",
      PropertyAction: "leased",
      PropertyActionTitle: "Sale",
      TransactionID: "897hxxxxxxxxxxxxx90",
    },
    {
      PropertyCode: "AD508",
      PropertyPrice: "250,000,000",
      PropertyAction: "sold",
      PropertyActionTitle: "Rent",
      TransactionID: "acd79xxxxxxxxxxxxxhj",
    },
    {
      PropertyCode: "AD509",
      PropertyPrice: "250,000,000",
      PropertyAction: "leased",
      PropertyActionTitle: "Sale",
      TransactionID: "897hxxxxxxxxxxxxx90",
    },
    {
      PropertyCode: "AD510",
      PropertyPrice: "250,000,000",
      PropertyAction: "sold",
      PropertyActionTitle: "Rent",
      TransactionID: "acd79xxxxxxxxxxxxxhj",
    },
    {
      PropertyCode: "AD511",
      PropertyPrice: "250,000,000",
      PropertyAction: "leased",
      PropertyActionTitle: "Sale",
      TransactionID: "897hxxxxxxxxxxxxx90",
    },
    {
      PropertyCode: "AD512",
      PropertyPrice: "250,000,000",
      PropertyAction: "sold",
      PropertyActionTitle: "Rent",
      TransactionID: "acd79xxxxxxxxxxxxxhj",
    },
    {
      PropertyCode: "AD513",
      PropertyPrice: "250,000,000",
      PropertyAction: "leased",
      PropertyActionTitle: "Sale",
      TransactionID: "897hxxxxxxxxxxxxx90",
    },
    {
      PropertyCode: "AD514",
      PropertyPrice: "250,000,000",
      PropertyAction: "sold",
      PropertyActionTitle: "Rent",
      TransactionID: "acd79xxxxxxxxxxxxxhj",
    },
    {
      PropertyCode: "AD515",
      PropertyPrice: "250,000,000",
      PropertyAction: "leased",
      PropertyActionTitle: "Sale",
      TransactionID: "897hxxxxxxxxxxxxx90",
    },
    {
      PropertyCode: "AD516",
      PropertyPrice: "250,000,000",
      PropertyAction: "sold",
      PropertyActionTitle: "Rent",
      TransactionID: "acd79xxxxxxxxxxxxxhj",
    },
    {
      PropertyCode: "AD517",
      PropertyPrice: "250,000,000",
      PropertyAction: "leased",
      PropertyActionTitle: "Sale",
      TransactionID: "897hxxxxxxxxxxxxx90",
    },
    {
      PropertyCode: "AD518",
      PropertyPrice: "250,000,000",
      PropertyAction: "sold",
      PropertyActionTitle: "Rent",
      TransactionID: "acd79xxxxxxxxxxxxxhj",
    },
    {
      PropertyCode: "AD519",
      PropertyPrice: "250,000,000",
      PropertyAction: "leased",
      PropertyActionTitle: "Sale",
      TransactionID: "897hxxxxxxxxxxxxx90",
    },
    {
      PropertyCode: "AD520",
      PropertyPrice: "250,000,000",
      PropertyAction: "sold",
      PropertyActionTitle: "Rent",
      TransactionID: "acd79xxxxxxxxxxxxxhj",
    },
    {
      PropertyCode: "AD500",
      PropertyPrice: "250,000,000",
      PropertyAction: "leased",
      PropertyActionTitle: "Sale",
      TransactionID: "897hxxxxxxxxxxxxx90",
    },
    {
      PropertyCode: "AD500",
      PropertyPrice: "250,000,000",
      PropertyAction: "sold",
      PropertyActionTitle: "Rent",
      TransactionID: "acd79xxxxxxxxxxxxxhj",
    },
    {
      PropertyCode: "AD500",
      PropertyPrice: "250,000,000",
      PropertyAction: "leased",
      PropertyActionTitle: "Sale",
      TransactionID: "897hxxxxxxxxxxxxx90",
    },
    {
      PropertyCode: "AD500",
      PropertyPrice: "250,000,000",
      PropertyAction: "sold",
      PropertyActionTitle: "Rent",
      TransactionID: "acd79xxxxxxxxxxxxxhj",
    },
    {
      PropertyCode: "AD500",
      PropertyPrice: "250,000,000",
      PropertyAction: "leased",
      PropertyActionTitle: "Sale",
      TransactionID: "897hxxxxxxxxxxxxx90",
    },
    {
      PropertyCode: "AD500",
      PropertyPrice: "250,000,000",
      PropertyAction: "sold",
      PropertyActionTitle: "Rent",
      TransactionID: "acd79xxxxxxxxxxxxxhj",
    },
    {
      PropertyCode: "AD500",
      PropertyPrice: "250,000,000",
      PropertyAction: "leased",
      PropertyActionTitle: "Sale",
      TransactionID: "897hxxxxxxxxxxxxx90",
    },
    {
      PropertyCode: "AD500",
      PropertyPrice: "250,000,000",
      PropertyAction: "sold",
      PropertyActionTitle: "Rent",
      TransactionID: "acd79xxxxxxxxxxxxxhj",
    },
    {
      PropertyCode: "AD500",
      PropertyPrice: "250,000,000",
      PropertyAction: "leased",
      PropertyActionTitle: "Sale",
      TransactionID: "897hxxxxxxxxxxxxx90",
    },
    {
      PropertyCode: "AD500",
      PropertyPrice: "250,000,000",
      PropertyAction: "leased",
      PropertyActionTitle: "Sale",
      TransactionID: "897hxxxxxxxxxxxxx90",
    },
    {
      PropertyCode: "ADLAST",
      PropertyPrice: "250,000,000",
      PropertyAction: "leased",
      PropertyActionTitle: "Sale",
      TransactionID: "897hxxxxxxxxxxxxx90",
    },
  ];

  const TranscationSortType: string[] = [
    "older",
    "newer",
    "Rent",
    "Buy",
    "Type",
    "location",
  ];

  const TranscationSearchType: string[] = [
    "Duplex",
    "Flat",
    "Bungalow",
    "Apartment",
    "Villa",
    "Mansion",
  ];

  // manage transaction drop down
  const [IsPopOverA, setIsPopOverA] = useState(false);
  const [IsPopOverB, setIsPopOverB] = useState(false);
  const [TransData, setTransData] = useState(transactions.slice(0, 5));
  const [TransHis, setTransHis] = useState(1);
  const handleDropDown = (type: string) => {
    if (type === "typeA") {
      setIsPopOverA(!IsPopOverA);
      setIsPopOverB(false);
    }
    if (type === "typeB") {
      setIsPopOverB(!IsPopOverB);
      setIsPopOverA(false);
    }
  };

  const pageNation = (page: any) => {
    const end = page * 5;
    const start = end - 5;
    setTransData(transactions.slice(start, end));
    setTransHis(page);
  };

  const [pagesArray, setPagesArray] = useState([1]);

  useEffect(() => {
    console.log(transactions.length);
    const pages = Math.ceil(transactions.length / 5);
    const newPagesArray = Array.from(
      { length: pages },
      (_, index) => index + 1
    );
    setPagesArray(newPagesArray);
  }, []);

  /*1) Array.from: This method creates a new array from an iterable object or array-like object. In this case, we want to create an array of length pages. { length: pages }: We pass an object to Array.from with a property length set to the calculated number of pages. This essentially creates an array with the specified length. 

2) (_, index) => index + 1: This is a function that is applied to each element of the new array. The first parameter (represented by _ here) is the current element, which we don't need in this case. The second parameter (index) is the index of the current element. We use this to generate the page numbers by adding 1 to the index.

3) the newPagesArray will be an array of page numbers from 1 to pages. Finally, we use setPagesArray(newPagesArray) to update the state with the new array of page numbers. */

  const PageLocation = (pageLoc: string) => {
    if (pageLoc === "last") {
      const pages = Math.ceil(transactions.length / 5);
      const end = pages * 5;
      const start = end - 5;
      setTransData(transactions.slice(start, end));
      setTransHis(pages);
    } else if (pageLoc === "next") {
    } else if (pageLoc === "prev") {
    }
  };

  return (
    <div className="p-4 md:px-12">
      <div className="flex justify-between flex-col md:flex-row">
        <h1 className="font-semibold text-2xl py-4 w-fit text-gray-950">
          Transactions
        </h1>
        <div className="flex-1 flex md:items-center justify-end gap-5 flex-col md:flex-row">
          <div className="relative">
            <div
              className="relative w-64 h-10 cursor-pointer"
              onClick={() => handleDropDown("typeA")}
            >
              <FaSearch className="absolute text-gray-400 top-1/2 -translate-y-1/2 left-2" />
              <p className="h-full w-full hover:outline-none focus:outline-none px-8 rounded-2xl border border-gray-400 flex items-center">
                <span className="text-gray-400">Sort by</span>
              </p>
              <IoCaretDown className="absolute text-gray-400 top-1/2 -translate-y-1/2 right-2" />
            </div>

            {IsPopOverA && (
              <div className="bg-white w-64 h-fit flex flex-col py-3 shadow-md shadow-slate-500 absolute top-11">
                {TranscationSortType.map((item, index) => (
                  <span
                    key={index}
                    className="hover:bg-[#4959EE] text-black px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="relative">
            <div
              className="relative w-64 h-10 flex items-center cursor-pointer"
              onClick={() => handleDropDown("typeB")}
            >
              <IoCaretDown className="absolute text-gray-400 top-1/2 -translate-y-1/2 left-2" />

              <p className="h-full w-full hover:outline-none focus:outline-none px-8 rounded-2xl border border-gray-400 flex items-center">
                <span className="text-gray-400">Sort by</span>
              </p>

              <div className="bg-homeBlue absolute top-1/2 -translate-y-1/2 right-0 h-full px-3 rounded-xl flex items-center justify-center">
                <FaSearch className="text-white text-xl" />
              </div>
            </div>

            {IsPopOverB && (
              <div className="bg-white w-64 h-fit flex flex-col py-3 shadow-md shadow-slate-500 absolute top-11">
                {TranscationSearchType.map((item, index) => (
                  <span
                    key={index}
                    className="hover:bg-[#0B2749] hover:text-white px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {TransData.map(
          (
            {
              PropertyActionTitle,
              PropertyAction,
              PropertyCode,
              PropertyPrice,
              TransactionID,
            },
            index
          ) => (
            <div
              className="w-full flex md:flex-row flex-col md:justify-between md:items-center p-2 border-b border-[#B7C4CA]"
              key={index}
            >
              <div>
                <p
                  className={`font-semibold text-lg ${
                    PropertyActionTitle === "Sale"
                      ? "text-[#287106]"
                      : "text-[#4959EE]"
                  }`}
                >
                  {PropertyActionTitle}
                </p>
                <p className="italic text-[#797A81] text-lg font-medium">
                  Property{" "}
                  <span className="text-[#000000]">{PropertyCode}</span>{" "}
                  {PropertyAction} at{" "}
                  <span className="text-[#000000]">{PropertyPrice}</span>
                </p>
                <p>
                  Transaction ID: <span>{TransactionID}</span>
                </p>
              </div>
              <div className="flex justify-start">
                <a className="text-[#FF7E00]" href="#">
                  view details
                </a>
              </div>
            </div>
          )
        )}
      </div>

      <div className="text-base flex gap-1 flex-col items-end my-3">
        <div className="flex items-center gap-1 text-sm md:text-base text-gray-500">
          <span>Pages</span>

          {pagesArray.map((page, index) => (
            <span
              className={`${
                TransHis === page && "text-orange-600"
              } cursor-pointer`}
              key={index}
              onClick={() => pageNation(page)}
            >
              {page}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <span className="cursor-pointer" onClick={() => PageLocation("last")}>
            Last
          </span>
          <span className="cursor-pointer" onClick={() => PageLocation("prev")}>
            prev
          </span>
          <span className="cursor-pointer" onClick={() => PageLocation("next")}>
            next
          </span>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
