
const Settings = () => {
    return (
        <div className="grid grid-cols-3 gap-4 mt-6 px-4">
          <div className="bg-yellow-100 rounded-lg p-4 text-center h-32 flex flex-col justify-between items-center">
            <p className="text-yellow-700 font-bold">Surah</p>
            <p className="text-xs text-gray-500">Saved Items</p>
          </div>
          <div className="bg-red-100 rounded-lg p-4 text-center h-32 flex flex-col justify-between items-center">
            <p className="text-red-700 font-bold">Ayat</p>
            <p className="text-xs text-gray-500">Saved Items</p>
          </div>
          <div className="bg-pink-100 rounded-lg p-4 text-center h-32 flex flex-col justify-between items-center">
            <p className="text-pink-700 font-bold">Tafsir</p>
            <p className="text-xs text-gray-500">Saved Items</p>
          </div>
        </div>
    );
};

export default Settings;