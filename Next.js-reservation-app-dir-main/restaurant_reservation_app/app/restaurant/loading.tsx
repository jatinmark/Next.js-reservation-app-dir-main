const Loading = () => {
    return ( <main className="bg-gray-100 min-h-screen w-screen">
    <main className="max-w-screen-2xl m-auto bg-white">
     
      <div className="h-96 overflow-hidden">
        <div
          className="bg-center animate-pulse bg-slate-200 h-full flex justify-center items-center"
        >
          <h1 className="text-7xl text-white captitalize text-shadow text-center">
            
          </h1>
        </div>
      </div>
      {/* HEADER */} {/* DESCRIPTION PORTION */}
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[70%] rounded p-3 shadow">
          {/* RESAURANT NAVBAR */}
          <nav className="flex text-reg border-b pb-2">
            <a href="" className="mr-7">  </a>
            <a href="" className="mr-7">  </a>
          </nav>
          {/* RESAURANT NAVBAR */} {/* TITLE */}
          <div className="mt-4 border-b pb-6">
            <h1 className="font-bold text-6xl"></h1>
          </div>
          {/* TITLE */} {/* RATING */}
          <div className="flex items-end">
            <div className="ratings mt-2 flex items-center">
              <p></p>
              <p className="text-reg ml-3"></p>
            </div>
            <div>
              <p className="text-reg ml-4"></p>
            </div>
          </div>
          {/* RATING */} {/* DESCRIPTION */}
          <div className="mt-4">
            <p className="text-lg font-light">
           </p>
          </div>
          {/* DESCRIPTION */} {/* IMAGES */}
          <div>
            <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
             
            </h1>
            
          </div>
          {/* IMAGES */} {/* REVIEWS */}
          <div>
            <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
             
            </h1>
            <div>
              {/* REVIEW CARD */}
              <div className="border-b pb-7 mb-7">
                <div className="flex">
                  <div className="w-1/6 flex flex-col items-center">
                    <div
                      className="rounded-full animate-pulse bg-slate-200 w-16 h-16 flex items-center justify-center"
                    >
                      <h2 className="text-white text-2xl"></h2>
                    </div>
                    <p className="text-center"></p>
                  </div>
                  <div className="ml-10 w-5/6">
                    <div className="flex items-center">
                      <div className="flex mr-5"></div>
                    </div>
                    <div className="mt-5">
                      <p className="text-lg font-light">
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* REVIEW CARD */}
            </div>
          </div>
          {/* REVIEWS */}
      </div>
      </div>
      {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */} {/* RESERVATION
      CARD PORTION */}
    </main>
  </main>
   );
}
 
export default Loading;