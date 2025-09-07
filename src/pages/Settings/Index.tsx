import { tabs } from "../../constants";

const Settings = () => {
  return (
    <div className=" gap-5 w-full p-5 grid grid-cols-2">
      {tabs.map((t) => (
        <div key={t.id} className="bg-gray-600 text-center cursor-pointer rounded-lg py-2 px-4 w-full">
          <button className="cursor-pointer ">{t.label}</button>
        </div>
      ))}
    </div>
  );
};

export default Settings;
