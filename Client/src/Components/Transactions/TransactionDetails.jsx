import React from "react";

const TransactionDetails = (props) => {
  const handler = true;
  console.log(handler);

  return (
    <div>
      {!handler ? (
        <div className="py-10 flex justify-center items-center">
          <h1 className="text-2xl">No details to show</h1>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-4 bg-white min-h-screen">
          {/* image of company */}
          <div className=" w-32 h-32 rounded-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKsF8Tym1kGvNnD4zY6kojfyhS3QzLzv14J70TAdPM&s"
              alt=""
              className="w-full h-full"
            />
          </div>

          {/* name of company */}
          <div className="my-2">
            <h1 className="text-3xl">"ბილიკი"</h1>
          </div>

          {/* payment */}
          <div className="my-2">
            <h1 className="text-xl text-gray-500">962</h1>
          </div>

          {/* details */}
          <div className="mt-16 w-[300px]">
            <div className="flex flex-row items-center justify-between">
              <div className="text-2xl">თარიღი: </div>
              <div className="text-2xl">12/12/2020</div>
            </div>

            <div className="flex flex-row items-center justify-between mt-4">
              <div className="text-2xl">ლოკაცია: </div>
              <div className="text-2xl">თბილისი</div>
            </div>

            <div className="flex flex-row items-center justify-between mt-16">
              <div className="text-2xl">ჯამი: </div>
              <div className="text-2xl">$1186.14</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionDetails;
