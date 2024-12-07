
const Blogs = () => {
    const blogPosts = [
      { title: 'জান্নাতী দল কোনটি?', id: 1 },
      { title: 'কিয়ামত কি খুব কাছে?', id: 2 },
      { title: 'ইসলামের মূল ভিত্তি কী?', id: 3 },
    ];

    return (
        <div className="mt-6 px-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Blogs</h2>
          <div className="space-y-4">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-dark-green text-white rounded-lg p-4 flex items-center justify-between"
              >
                <div>
                  <p className="text-sm font-bold">{post.title}</p>
                  <p className="text-yellow-400 text-xs pt-1 rounded-full">
                    এখন পড়ুন
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
    );
};

export default Blogs;