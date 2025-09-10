import type { INCOMEI } from "../../constants/types";

const Home = () => {
  const incomes = JSON.parse(localStorage.getItem("income") || "[]");

  return (
    <>
      <div className="gap-5 grid grid-cols-2">
        <div className="bg-gray-700 h-40 p-4 m-10 rounded-xl flex items-center justify-center">
          <p className="text-lg font-semibold text-center text-white">
            Total Income
          </p>
        </div>
        <div className="bg-gray-700 h-40 p-4 m-10 rounded-xl flex items-center justify-center">
          <p className="text-lg font-semibold text-center text-white">
            Total Expense
          </p>
        </div>
      </div>

      <div className="px-10">
        <p className="text-xl font-semibold mb-4">Recent Entries</p>

        <div className="space-y-4">
          {incomes.length === 0 ? (
            <p className="text-gray-500">No entries yet.</p>
          ) : (
            incomes.map((i: INCOMEI, index: number) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg w-2/4 mx-auto shadow p-4 hover:bg-gray-700 transition"
              >
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-xs uppercase text-gray-400">Amount</p>
                    <p className="text-lg font-bold text-green-400">
                      ₹{i.amount}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase text-gray-400">Date</p>
                    <p className="text-sm text-white">{i.date}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase text-gray-400">Type</p>
                    <p className="text-sm font-medium text-white">{i.type}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase text-gray-400">
                      Description
                    </p>
                    <p className="text-sm text-gray-300">{i.description}</p>
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
