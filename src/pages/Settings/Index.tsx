import { useState } from "react";
import { tabsData } from "../../constants/constants";
import Categories from "../../components/Categories/Index";
import Payments from "../../components/Payments/Index";

const Settings = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const renderTabContent = () => {
    const activeValue = tabsData[activeTab]?.value;

    if (activeValue === "categories") {
      return <Categories />;
    } else if (activeValue === "payments") {
      return <Payments />;
    } else {
      return null;
    }
  };

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
      <div>{renderTabContent()}</div>
    </div>
  );
};

export default Settings;
