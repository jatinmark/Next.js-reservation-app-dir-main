
interface Props {
 input :  {   firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    password: string; } ;
    handleChangeInput : (e: React.ChangeEvent<HTMLInputElement>) => void
    isSignin : boolean ;
    data : string | undefined ;
}

const AuthModalInput = ({input , data, handleChangeInput , isSignin} : Props) => {
    return ( <div>
        {  isSignin ? null : <div className="my-3 flex justify-between text-sm">
            <input value={input.firstName} onChange={handleChangeInput} name="firstName" type="text" className="border rounded p-2 py-3 w-[49%]" placeholder="First name " />
            <input value={input.lastName} onChange={handleChangeInput} name="lastName" type="text" className="border rounded p-2 py-3 w-[49%]" placeholder="Last name " />
            </div> }

        <div className="my-3 flex justify-between text-sm">
           <input value={data ? data :  input.email } onChange={handleChangeInput} name="email" type="text" className="border rounded p-2 py-3 w-full" placeholder="Email " />
            </div>

         {isSignin ? null :   <div className="my-3 flex justify-between text-sm">
           <input value={input.phone} onChange={handleChangeInput} name="phone" type="text" className="border rounded p-2 py-3 w-[49%]" placeholder="Phone " />
           <input value={input.city} onChange={handleChangeInput} name="city" type="text" className="border rounded p-2 py-3 w-[49%]" placeholder="City" />
        </div>}

        <div className="my-3 flex justify-between text-sm">
           <input type="text" value={input.password} onChange={handleChangeInput} name="password" className="border rounded p-2 py-3 w-full" placeholder="Password " />
            </div>
    </div>  );
}
 
export default AuthModalInput;