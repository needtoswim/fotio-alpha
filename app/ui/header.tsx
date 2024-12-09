import Link from 'next/link';
import '../../app/globals.css'
//import { ActiveUser} from '../lib/localstore'

//const signedIn: boolean = ActiveUser()
//console.log("Anyone signed in ",signedIn )

const Header = () => {
  
  return (
    <>
      <section>
      <div className="flex flex-row p-6">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        <div className="flex basis-3/12">
          <Link href="/">
            <div className='text-lg font-bold text-white uppercase px-4'>
                f o t i o . m e
            </div>    
          </Link>      
            {/* <div className="text-lg font-bold text-white uppercase px-4">
              {currUser}
            </div>   */}
            <button id="hamburger-button" type="button" className="relative h-8 w-8 cursor-pointer text-3xl md:hidden">
              &#9776;
              <div
                className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"
            ></div>
          </button>
        </div>
        <div className="flex basis-6/12 hidden md:block">
            <Link
              href='galleries'
              className={"text-xl text-white mr-4 hover:text-white hover:text-2xl rounded "}
            >
              Galleries
          </Link>
        
            <Link
              href='dashboard'
              className={"text-xl text-white mr-4 hover:text-white hover:text-2xl rounded "}
             >
              Dashboard
          </Link>
             
          <Link
              href='introduction'
              className='text-xl text-white mr-4 hover:text-white hover:text-2xl rounded'
            >
              Introduction
            </Link>

            <Link
              href='introduction'
              className='text-xl text-white mr-4 hover:text-white hover:text-2xl rounded'
            >
              FAQ
            </Link>
                      
            
        </div>
        <div className="flex basis-3/12">
            <Link
              href='signin'
              className={"text-xl text-white mr-4 hover:text-white hover:text-2xl rounded "}
              >
              Sign In
            </Link>
            <Link
              href='signout'
              className={"text-xl text-white mr-4 hover:text-white hover:text-2xl rounded "
                 }
            >
              Sign Out
        </Link>    
        </div>      
      </div>
      </section>
      
        
    </>  
  );
}; 

export default Header