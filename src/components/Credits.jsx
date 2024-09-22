import React from "react";

const Credits = () => {
  const products = [
    {
      id: 1,
      name: "INV-01-09072010",
      color: "240",

      price: "1200",
    },
    {
      id: 2,
      name: "INV-01-09072010",
      color: "2400",
      price: "240",
    },
    {
      id: 3,
      name: "INV-01-09072010",
      color: "120",
      price: "240",
    },
    {
      id: 4,
      name: "INV-01 -09072010",
      color: "4000",
      price: "500",
    },
    {
      id: 5,
      name: "INV-01-09072010",
      color: "350",
      price: "240",
    },
    {
      id: 6,
      name: "INV-01-09072010",
      color: "600",
      price: "240",
    },
  ];
  return (
    <div class="p-0 lg:p-4 lg:ml-64">
      <header className="flex justify-between items-center ml-4 md:ml-14 lg:-mb-16 mt-24 ">
        <h1 className=" ml-16 lg:ml-0 text-xl md:text-3xl font-bold">
          Credits Purchase History
        </h1>
      </header>

      <div className="flex justify-center items-center flex-col -mx-3 md:p-8 lg:p-12">
        <div className="relative shadow-md sm:rounded-lg flex justify-center items-center overflow-hidden bg-white xl:w-[75vw] h-[28rem] mt-8 md:mt-12 lg:mt-16 mx-10 md:mx-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs  bg-white text-black border-b border-gray-200">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 md:px-4 lg:px-6 py-3 text-sm md:text-lg lg:text-xl font-bold"
                >
                  Invoice
                </th>
                <th
                  scope="col"
                  className="px-3 md:px-4 lg:px-6 py-3 text-sm md:text-lg lg:text-xl font-bold"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-3 md:px-4 lg:px-6 py-3 text-sm md:text-lg lg:text-xl font-bold"
                >
                  Credits
                </th>
                <th
                  scope="col"
                  className="px-3 md:px-4 lg:px-6 py-3 text-sm md:text-lg lg:text-xl font-bold"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-3 md:px-4 lg:px-6 py-3 text-sm md:text-lg lg:text-xl font-bold"
                ></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="bg-white border-b border-gray-200 text-black text-[10px] md:text-base lg:text-lg"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id={`checkbox-table-search-${product.id}`}
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor={`checkbox-table-search-${product.id}`}
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-3 md:px-4 lg:px-6 py-4 font-medium text-black whitespace-nowrap"
                  >
                    {product.name}
                  </th>
                  <td className="px-3 md:px-4 lg:px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                      Completed
                    </div>
                  </td>
                  <td className="px-3 md:px-4 lg:px-6 py-4">{product.color}</td>
                  <td className="px-3 md:px-4 lg:px-6 py-4">
                    ${product.price}
                  </td>
                  <td className="px-3 md:px-4 lg:px-6 py-4">
                    <a href="#" className="font-medium text-black">
                      ...
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Credits;
