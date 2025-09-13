import type { TRANSACTIONI } from "../../constants/types";

const Home = () => {
  const transactions = JSON.parse(localStorage.getItem("transactions") || "[]");

  console.log("sadsdfdf", transactions);

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

      <div className="px-10">
        <p className="text-xl font-semibold mb-4">Recent Entries</p>

        <div className=" space-y-4">
          {transactions.length === 0 ? (
            <p className="text-gray-500">No entries yet.</p>
          ) : (
            transactions.map((i: TRANSACTIONI, index: number) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg w-2/4 mx-auto shadow p-4 hover:bg-gray-700 transition"
              >
                <div className="flex justify-between text-sm text-white">
                  <p>
                    <span className="text-gray-400 text-xs uppercase mr-1">
                      Amount:
                    </span>
                    <span className="font-bold text-green-400">
                      ₹{i.amount}
                    </span>
                  </p>

                  <p>
                    <span className="text-gray-400 text-xs uppercase mr-1">
                      Date:
                    </span>
                    {i.date}
                  </p>

                  <p>
                    <span className="text-gray-400 text-xs uppercase mr-1">
                      Type:
                    </span>
                    {i.type}
                  </p>
                </div>

                <div className="mt-2 text-sm flex justify-between items-center">
                  <div className="">
                    <span className="text-gray-400 text-xs uppercase mr-1">
                      Description:
                    </span>
                    <span className="text-gray-300">{i.description}</span>
                  </div>
                  <div className="flex justify-end">
                    <span
                      className={`${
                        i.transactionType === "income"
                          ? "bg-green-700 px-2 py-1 rounded-full text-xs"
                          : "bg-red-700 px-2 py-1 rounded-full text-xs"
                      }`}
                    >
                      {i.transactionType}
                    </span>
                  </div>
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
