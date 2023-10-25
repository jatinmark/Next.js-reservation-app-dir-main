import Header from "./component/Header";



const RestaurantLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return ( <main>
         <Header />
      <div className='flex w-2/3 justify-between items-start 0 -mt-11 m-auto '>
      {children}
      </div>

    </main> );
}
 
export default RestaurantLayout ;