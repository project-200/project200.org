import React from 'react';

const Donate = () => {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="py-16 px-8 bg-default-black overflow-hidden rounded-md">
          <div className="mb-6 max-w-lg mx-auto text-center">
           
            <h2 className="font-heading text-4xl md:text-5xl text-white font-black tracking-tight">
              Support Our Cause
            </h2>
          </div>
          <div className="md:max-w-sm mx-auto mb-10">
            <div className="flex flex-wrap -m-2">
              <div className="w-full p-2">
                <p
                  className=" py-2 w-full text-base text-gray-300 text-center bg-default-black outline-none placeholder-gray-500 rounded-full"
                >Your donation can make a real difference. Help us continue our work towards achieving the UN Sustainable Development Goals.</p>
              </div>
              <div className="w-full p-2">
                <div className="flex flex-wrap justify-center -m-2">
                  {/* <div className="w-full p-2">
                    <a
                      className="block w-full px-8 py-3.5 text-lg text-center text-black font-bold bg-white hover:bg-blue-600 focus:ring-4 focus:ring-blue-600 rounded-sm"
                      href="#"
                    >
                      Donate
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
