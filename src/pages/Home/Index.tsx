import { useState } from "react";
import type { TRANSACTIONI } from "../../constants/types";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const Home = () => {
  const transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
  const [currPage, setCurrPage] = useState(0);

  console.log("sadsdfdf", transactions.length);

  // const total = transactions.reduce(
  //   (acc: number, curr: TRANSACTIONI) => acc + Number(curr.amount),
  //   0
  // );

  const totalExpense = transactions
    .filter((t: TRANSACTIONI) => t.transactionType === "expense")
    .reduce((acc: number, curr: TRANSACTIONI) => acc + Number(curr.amount), 0);

  const totalIncome = transactions
    .filter((t: TRANSACTIONI) => t.transactionType === "income")
    .reduce((acc: number, curr: TRANSACTIONI) => acc + Number(curr.amount), 0);

  const balance = totalIncome - totalExpense;

  const pageSize = 10;
  const totalEntries = transactions.length;
  const noOfPages = Math.ceil(totalEntries / pageSize);

  console.log(totalEntries);

  const start = currPage * pageSize;
  const end = start + pageSize;

  const handlePageChange = (n: number) => {
    setCurrPage(n);
  };

  const handleLeftChange = () => {
    setCurrPage(currPage - 1);
    console.log(setCurrPage(currPage - 1));
  };
  const handleRightChange = () => {
    setCurrPage(currPage + 1);
  };

  return (
    <>
      <div className="gap-5 grid grid-cols-3">
        <div className="bg-gray-700 h-20 p-4 m-10 rounded-xl flex items-center justify-center">
          <p className="text-lg font-semibold text-center text-white flex gap-3">
            <span>Total Income:</span>
            <span>₹{totalIncome}</span>
          </p>
        </div>
        <div className="bg-gray-700 h-20 p-4 m-10 rounded-xl flex items-center justify-center">
          <p className="text-lg font-semibold text-center text-white flex gap-3">
            <span>Balance :</span>
            <span>₹{balance}</span>
          </p>
        </div>
        <div className="bg-gray-700 h-20 p-4 m-10 rounded-xl flex items-center justify-center">
          <p className="text-lg font-semibold text-center text-white flex gap-3">
            <span>Total Expense :</span>
            <span>₹{totalExpense}</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="cursor-pointer" onClick={handleLeftChange}>
          <BiLeftArrow />
        </button>
        {[...Array(noOfPages).keys()].map((n) => (
          <button
            className={`px-3 m-1 border cursor-pointer ${
              currPage === n ? "bg-gray-700" : ""
            }`}
            onClick={() => handlePageChange(n)}
            key={n}
          >
            {n}
          </button>
        ))}
        <button className="cursor-pointer" onClick={handleRightChange}>
          <BiRightArrow />{" "}
        </button>
      </div>
      <div className="px-4 py-6">
        <div className="grid md:grid-cols-2 gap-6">
          {transactions.length === 0 ? (
            <p className="text-gray-500 text-center col-span-2">
              No entries yet.
            </p>
          ) : (
            transactions
              .slice(start, end)
              .map((i: TRANSACTIONI, index: number) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-white rounded-2xl shadow-lg p-3 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-3">
                    <h3 className="text-lg font-semibold text-white">
                      ₹{i.amount}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        i.transactionType === "income"
                          ? "bg-green-600/20 text-green-400 border border-green-600"
                          : "bg-red-600/20 text-red-400 border border-red-600"
                      }`}
                    >
                      {i.transactionType}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <div className="flex ">
                        <span className="text-gray-400">Date : </span>
                        <span> {i.date}</span>
                      </div>
                      <div className="flex">
                        <span className="text-gray-400">Type : </span>
                        <span className="capitalize"> {i.type}</span>
                      </div>
                    </div>
                    {i.description && (
                      <div className="flex">
                        <span className=" text-gray-400 mb-1">
                          Description :
                        </span>
                        <p className="text-gray-200 text-sm">
                          {" "}
                          {i.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
