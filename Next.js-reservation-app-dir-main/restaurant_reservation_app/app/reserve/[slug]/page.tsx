import Form from "./component/Form";
import Header from "./component/Header";


export async function generateMetadata() {
	return {
		title: 'Milestones Grill (Toronto) | BookMyDining',
		description: 'Search',
	}
}

const Reserve = () => {
    return (
      
            <div className='border-t h-screen'>
              <div className='py-9 w-3/5 m-auto'>
               <Header />
                 <Form />
              </div>
            </div>
          
    );
}

export default Reserve;