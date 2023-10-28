import Header from "./components/Header";

const Loading = () => {
    return ( <><Header />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
      {/* SEARCH SIDE BAR */}
      <div className="w-1/5">
        <div className="border-b pb-6 animate-pulse bg-slate-200">
          <h1 className="mb-2 animate-pulse bg-slate-200"></h1>
          
        </div>
        <div className="animate-pulse bg-slate-200 border-b pb-6 mt-3">
          <h1 className="mb-2 animate-pulse bg-slate-200"></h1>
         </div>
         <div className="animate-pulse bg-slate-200 border-b pb-6 mt-3">
          <h1 className="mb-2 animate-pulse bg-slate-200"></h1>
         </div>
         <div className="animate-pulse bg-slate-200 border-b pb-6 mt-3">
          <h1 className="mb-2 animate-pulse bg-slate-200"></h1>
         </div>
        
      </div>
      {/* SEARCH SIDE BAR */}
      <div className="w-5/6 pb-5 ml-3">
        {/* RESAURANT CAR */}
        <div className=" animate-pulse bg-slate-200 border-b flex pb-10" >
        </div>
        <div className=" animate-pulse bg-slate-200 border-b flex pb-10" >
        </div>
        <div className=" animate-pulse bg-slate-200 border-b flex pb-10" >
        </div>
        <div className=" animate-pulse bg-slate-200 border-b flex pb-10" >
        </div>
        <div className=" animate-pulse bg-slate-200 border-b flex pb-10" >
        </div>
        <div className=" animate-pulse bg-slate-200 border-b flex pb-10" >
        </div>
        <div className=" animate-pulse bg-slate-200 border-b flex pb-10" >
        </div>
        <div className=" animate-pulse bg-slate-200 border-b flex pb-10" >
        </div>
        {/* RESAURANT CAR */}
      </div>
    </div>  </>);
}
 
export default Loading;