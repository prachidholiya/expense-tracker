const Home = () => {
  return (
    <>
      <div className=" gap-5 grid grid-cols-2">
        <div className="bg-gray-700 h-40 p-4 m-10 rounded-xl">
          <p className="text-lg text-center">Total Income</p>
        </div>
        <div className="bg-gray-700 h-40 p-4 m-10 rounded-xl">
          <p className="text-lg text-center">Total Expense</p>
        </div>
      </div>
      <div className="px-10">
        <p >Recent Entries</p>
      </div>
    </>
  );
};

export default Home;
