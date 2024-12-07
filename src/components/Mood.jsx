const Mood = () => {
    const moods = [
      { name: 'Happiness', color: 'bg-blue-500', icon: '🌞' },
      { name: 'Sadness', color: 'bg-purple-500', icon: '🌙' },
      { name: 'Anger', color: 'bg-red-500', icon: '🔥' },
      { name: 'Fear', color: 'bg-yellow-500', icon: '⚡' },
    ];

    return (
        <div className="mt-6 px-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Moods</h2>
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
            {moods.map((mood, index) => (
              <div key={index} 
                className={`min-w-[120px] h-48 rounded-lg p-4 flex flex-col items-center justify-between text-white bg-mood-mosque bg-cover bg-no-repeat`}
              >
                <span className="text-2xl mb-2">{mood.icon}</span>
                <p className="text-sm font-semibold">{mood.name}</p>
              </div>
            ))}
          </div>
        </div>
    );
};

export default Mood;