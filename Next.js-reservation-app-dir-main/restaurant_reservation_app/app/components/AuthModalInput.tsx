
interface Props {
 input :  {   firstname: string;
    lastname: string;
    email: string;
    phone: string;
    city: string;
    password: string; } ;
    handleChangeInput : (e: React.ChangeEvent<HTMLInputElement>) => void
    isSignin : boolean
}

const AuthModalInput = ({input , handleChangeInput , isSignin} : Props) => {
    return ( <div>
        {  isSignin ? null : <div className="my-3 flex justify-between text-sm">
            <input value={input.firstname} onChange={handleChangeInput} name="firstname" type="text" className="border rounded p-2 py-3 w-[49%]" placeholder="First name " />
            <input value={input.lastname} onChange={handleChangeInput} name="lastname" type="text" className="border rounded p-2 py-3 w-[49%]" placeholder="Last name " />
            </div> }

        <div className="my-3 flex justify-between text-sm">
           <input value={input.email} onChange={handleChangeInput} name="email" type="text" className="border rounded p-2 py-3 w-full" placeholder="Email " />
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