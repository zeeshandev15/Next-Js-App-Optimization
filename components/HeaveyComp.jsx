"use client";
const HeaveyComp = () => {
  const optimize = [
    {
      title: "Optimize Images",
      desc: "If your component uses images, make sure to use the next/image component for automatic image optimization. This can significantly reduce image sizes.",
    },
    {
      title: "Remove Unused Code",
      desc: "Audit your components for any unused imports or code that can be removed. This can include styles, functions, or libraries that are not needed.",
    },
    {
      title: "Minify CSS and JS",
      desc: " Ensure that you’re minifying your CSS and JavaScript. Next.js does this by default in production builds, but it’s worth checking that you’re running the app in production mode.",
    },
  ];
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {optimize.map((item, index) => (
              <div className="p-4 md:w-1/3" key={index}>
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      {item.title}
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-justify">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeaveyComp;
