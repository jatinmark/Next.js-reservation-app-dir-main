import Header from "./component/Header";



const RestaurantLayout = ({
    children,params
  }: {
    children: React.ReactNode;
    params : {slug : string} 
  }) => {
    return ( <main>
         <Header name = {params.slug} />
      <div className='flex w-2/3 justify-between items-start 0 -mt-11 m-auto '>
      {children}
      </div>

    </main> );
}
 
export default RestaurantLayout ;