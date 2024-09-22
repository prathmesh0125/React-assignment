import React from "react";
import { TbDownload } from "react-icons/tb";
function Shortlisted() {
  const cvs = [
    {
      name: "John Doe",
      title: "UI UX Developer",
      description:
        "From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.",
      skills: 5,

      avatar: "public/images/jon.jpg",
    },
    {
      name: "John Doe",
      title: "UI UX Developer",
      description:
        "From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.",
      skills: 5,
      avatar: "public/images/user.jpg",
    },
    {
      name: "John Doe",
      title: "UI UX Developer",
      description:
        "From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.",
      skills: 5,
      avatar: "public/images/jon.jpg",
    },
    {
      name: "John Doe",
      title: "UI UX Developer",
      description:
        "From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.",
      skills: 5,
      avatar: "public/images/user.jpg",
    },
    {
      name: "John Doe",
      title: "UI UX Developer",
      description:
        "From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.",
      skills: 5,
      avatar: "public/images/jon.jpg",
    },
    {
      name: "John Doe",
      title: "UI UX Developer",
      description:
        "From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.",
      skills: 5,
      avatar: "public/images/user.jpg",
    },
  ];
  return (
    <div class="p-0 sm:ml-64">
      <div className="container mx-auto p-8 min-h-screen">
        <header className="flex justify-between items-center mt-16 mb-10">
          <h1 className="text-3xl font-bold">Shortlisted CV's</h1>
        </header>
        <div className="space-y-4 ">
          {cvs.map((cv, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white shadow rounded-lg p-2"
            >
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300"
                />
                <div className="h-12 w-12 rounded-full bg-gray-200 flex justify-center items-center">
                  <img
                    src={cv.avatar}
                    alt={cv.name}
                    className="h-full w-full rounded-md"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex gap-3">
                    <div>
                      <h2 className="font-bold">{cv.name}</h2>
                      <p className="text-xs text-gray-500 w-24">{cv.title}</p>
                    </div>
                    <p className="text-sm text-gray-600 w-[35rem]">
                      {cv.description}
                    </p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex  gap-2 flex-col items-start">
                      <span className="text-black text-md font-semibold flex justify-center items-center gap-1 ">
                        <span className="bg-blue-700 w-3 h-2"></span>
                        <h1>Skills</h1>
                      </span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-5 h-5 flex justify-center items-center rounded-full ${
                              i < cv.skills ? "bg-blue-600" : "bg-gray-200"
                            }`}
                          >
                            {i < cv.skills && (
                              <div className="w-2 h-2 bg-white" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xs h-8 px-3 rounded-lg flex items-center justify-center gap-2 mt-3">
                    <i>
                      <TbDownload />
                    </i>
                    <span>Download for 30 credits</span>
                  </button>

                  <div className="bg-blue-600 text-2xl flex justify-center items-center w-6 h-4 mt-5 ">
                    <span className="text-white">-</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shortlisted;
