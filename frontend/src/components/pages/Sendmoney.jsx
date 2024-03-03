const Sendmoney = () => {
  return (
    <div className="bg-slate-300 h-screen flex flex-col justify-center">
      <div className="w-96 bg-white h-80 mx-auto rounded shadow-lg">
        <div className="flex flex-col justify-around h-full">
          <div className="text-center font-black text-3xl">Send Money</div>
          <div className="ml-8">
          <div className="flex">
            <div className="border rounded-full bg-green-600  w-10 h-10 flex items-center justify-center text-xl text-white">A</div>
            <div className="ml-4 font flex items-center font-bold text-lg">Friend's Name</div>
          </div>
          <div>
            <div className="font-semibold my-2">Amount</div>
            <input type="text" placeholder="Enter amount" className="my-2 w-80 border rounded-md p-2"/>
          </div>
          <div className="flex justify-center">
            <button className="bg-green-600 py-2 px-6 text-center mt-2 rounded text-white">Initiate transfer</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Sendmoney;
