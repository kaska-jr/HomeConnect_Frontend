

const Transactions = () => {
  const PropertyCode = "AD500";
  const PropertyPrice = "250,000,000";
  const PropertyAction = ["sold", "leased"];
  const PropertyActionTitle = ["Sale", "Rent"];
  const TransactionID = "xxxxxxxxxxxxxxxxxxx" ;

  return (
    <div className='px-12'>
      <p className='font-semibold text-2xl py-4'>Transactions</p>
      <div className='flex flex-col gap-2'>
        <div className='w-full flex flex-row justify-between items-center p-2 border-b border-[#B7C4CA]'>
          <div>
            <p className={`font-semibold text-lg ${PropertyActionTitle[0] === 'Sale' ? 'text-[#287106]' : 'text-[#4959EE]'}`}>{PropertyActionTitle[0]}</p>
            <p className='italic text-[#797A81] text-lg font-medium'>Property <span className='text-[#000000]'>{PropertyCode}</span> {PropertyAction[0]} at <span className='text-[#000000]'>{PropertyPrice}</span></p>
            <p>Transaction ID: <span>{TransactionID}</span></p>
          </div>
          <div>
            <a className='text-[#FF7E00]' href="#">view details</a>
          </div>
        </div>
        <div className='w-full flex flex-row justify-between items-center p-2 border-b border-[#B7C4CA]'>
          <div>
            <p className={`font-semibold text-lg ${PropertyActionTitle[1] === 'Sale' ? 'text-[#287106]' : 'text-[#4959EE]'}`}>{PropertyActionTitle[1]}</p>
            <p className='italic text-[#797A81] text-lg font-medium'>Property <span className='text-[#000000]'>{PropertyCode}</span> {PropertyAction[0]} at <span className='text-[#000000]'>{PropertyPrice}</span></p>
          </div>
          <div>
            <a className='text-[#FF7E00]' href="#">view details</a>
          </div>
        </div>
        <div className='w-full flex flex-row justify-between items-center p-2 border-b border-[#B7C4CA]'>
          <div>
            <p className={`font-semibold text-lg ${PropertyActionTitle[0] === 'Sale' ? 'text-[#287106]' : 'text-[#4959EE]'}`}>{PropertyActionTitle[0]}</p>
            <p className='italic text-[#797A81] text-lg font-medium'>Property <span className='text-[#000000]'>{PropertyCode}</span> {PropertyAction[0]} at <span className='text-[#000000]'>{PropertyPrice}</span></p>
            <p>Transaction ID: <span>{TransactionID}</span></p>
          </div>
          <div>
            <a className='text-[#FF7E00]' href="#">view details</a>
          </div>
        </div>
        <div className='w-full flex flex-row justify-between items-center p-2 border-b border-[#B7C4CA]'>
          <div>
            <p className={`font-semibold text-lg ${PropertyActionTitle[1] === 'Sale' ? 'text-[#287106]' : 'text-[#4959EE]'}`}>{PropertyActionTitle[1]}</p>
            <p className='italic text-[#797A81] text-lg font-medium'>Property <span className='text-[#000000]'>{PropertyCode}</span> {PropertyAction[0]} at <span className='text-[#000000]'>{PropertyPrice}</span></p>
          </div>
          <div>
            <a className='text-[#FF7E00]' href="#">view details</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
