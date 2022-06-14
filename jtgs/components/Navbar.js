import React, { useReducer } from 'react'
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router';
import DropdownHome from "./dropdown-home";
import DropdownMinistries from './dropdown-ministries';
import DropdownForm from './dropdown-form';
import DropdownPlaylist from './dropdown-playlist';
import DropdownRE from './dropdown-re';
import DropdownNavbar from "./dropdown-navbar";



const Navbar = () => {

    // const [showDropdownHome, setShowDropdownHome] = useState(false)
    // const [showDropdownMinistries, setShowDropdownMinistries] = useState(false)
    // const [showDropdownForm, setShowDropdownForm] = useState(false)
    // const [showDropdownPlaylist, setShowDropdownPlaylist] = useState(false)

    const router = useRouter();


    const reducer = (state,action) => {

        switch(action.type) {

            case "displayNavbarDropdown":
                return {...state, showDropdownNavbar: !state.showDropdownNavbar}

            case "displayCloseIcon":
                return {...state, showCloseIcon: !state.showCloseIcon}  

            default:
                throw new Error();    

        }
    }


    const [state, dispatch] = useReducer(reducer, { showDropdownNavbar:false, showCloseIcon:false })

    
    const handleClick = () => {
        dispatch({type:"displayNavbarDropdown"})
        dispatch({type:"displayCloseIcon"})
    }

    
    return (
        <div className = "flex justify-around items-center px-10 py-8 border-b bg-gray-100 opacity-85 tracking-wide lg:px-20">
            <div>
                <p>Logo</p>
            </div>

            <div className = "relative lg:hidden"
            >
                <div className = "" 
                onClick = { handleClick }>
                <FontAwesomeIcon
                    icon = {state.showCloseIcon? faTimes: faBars}
                    className = "fas fa-bars">
                </FontAwesomeIcon>
                </div>

                <div className = {state.showDropdownNavbar? "block absolute z-10 -translate-x-1/2" : "hidden"}>
                    <DropdownNavbar/>
                </div>
                
            </div>



            {/* <div className = "hidden lg:visible"> */}
            <ul className = "hidden lg:flex gap-8 justify-between">
                <li className="relative group font-bold text-lg text-gray-500 cursor-pointer">
                    {/* <p onClick = {() => { setShowDropdownHome(!showDropdownHome) }}> */}
                    <p 
                    className="tracking-wider"
                    onClick = {() => router.push("/")}>
                        Home
                    </p>
                    {/* {showDropdownHome && <DropdownHome />}  */}
                    {/* <div className = {showDropdownHome? "visible" : "hidden"}>
                        <DropdownHome />
                    </div>   */}
                    <div className="hidden absolute z-10 group-hover:block transition-all">
                        <DropdownHome />
                    </div>
                </li>                



                <li className = "relative group font-bold text-lg text-gray-500 cursor-pointer">
                    <p 
                    className="tracking-wider"
                    onClick={() => {router.push("/ministries")}}>Ministries</p>
                    <div className = "hidden absolute z-10 group-hover:block">
                        <DropdownMinistries />
                    </div>
                </li>



                <li className = "relative group font-bold text-lg text-gray-500 cursor-pointer">
                    <p className="tracking-wider">Religious Education</p>
                    <div className = "hidden absolute z-10 group-hover:block">
                        <DropdownRE />                        
                    </div>
                </li>



                {/* <li className="font-bold text-lg text-gray-500 cursor-pointer">
                    <p onClick={() => { setShowDropdownForm(!showDropdownForm) }}>
                        Forms
                    </p>
                    <div className={showDropdownForm ? "visible absolute z-10" : "hidden"}>
                        <DropdownForm />
                    </div>
                </li> */}



                <li className = "relative group font-bold text-lg text-gray-500 cursor-pointer">
                    <p className="tracking-wider">Forms</p>
                    <div className="hidden absolute z-10 group-hover:block">
                        <DropdownForm />
                    </div>
                </li>



                <li className="font-bold text-lg text-gray-500 cursor-pointer tracking-wider">
                    <Link href="/donations">Donations</Link>
                </li>



                <li className="font-bold text-lg text-gray-500 cursor-pointer trracking-wide">
                    <Link href="/photo-gallery">Photo Gallery </Link>
                </li>

                <li className="font-bold text-lg text-gray-500 cursor-pointer tracking-wider">
                    <Link href="/mass-livestream">Mass-Livestream</Link>
                </li>




                <li className = "relative group font-bold text-lg text-gray-500 cursor-pointer">
                    {/* <p 
                    onMouseOver = {() => {setShowDropdownPlaylist(!showDropdownPlaylist)}}
                    onMouseOut = {() => {setShowDropdownPlaylist(false)}}>
                        Playlists
                    </p> */}

                    <p className="tracking-wider">Playlists</p>

                    {/* <div className = {showDropdownPlaylist? "visible" : "hidden"}> */}
                    <div className="hidden absolute z-10 group-hover:block">
                        <DropdownPlaylist />
                    </div>
                </li>

            </ul>

            {/* </div> */}
            


        </div>
    )
}

export default Navbar