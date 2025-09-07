import { useState } from "react";
import { tabsData } from "../../constants/constants";

const Settings = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="w-full p-5">
      <div className="gap-5 grid grid-cols-2 mb-6">
        {tabsData.map((t, index) => (
          <div key={index} className="">
            <button
              onClick={() => setActiveTab(index)}
              className={`rounded-lg py-2 px-4 w-full text-center cursor-pointer transition-colors duration-200 ${
                activeTab === index
                  ? "bg-black text-white border-gray-400 border"
                  : "bg-gray-600 text-gray-200"
              }`}
            >
              {t.label}
            </button>
          </div>
        ))}
      </div>
      <div className="">{tabsData[activeTab].component}</div>
    </div>
  );
};

export default Settings;
