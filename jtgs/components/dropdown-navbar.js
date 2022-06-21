import { useReducer } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import DropdownHome from './dropdown-home';
import DropdownMinistries from './dropdown-ministries';
import DropdownRE from './dropdown-re';
import DropdownForm from './dropdown-form';
import DropdownPlaylist from './dropdown-playlist';
import { useRouter } from "next/router";




const DropdownNavbar = () => {
    const router = useRouter();

    const reducer = (state,action) => {

        switch(action.type) {

            case 'showHome':
                return {...state, showDropdownHome: !state.showDropdownHome, showDropdownMinistries: false, showDropdownRE: false, showDropdownForm: false, showDropdownPlaylist: false }

            case 'showMinistries':
                return {...state, showDropdownMinistries: !state.showDropdownMinistries, showDropdownHome: false, showDropdownRE: false, showDropdownForm: false, showDropdownPlaylist: false}   

            case 'showRE':
                return {...state, showDropdownRE: !state.showDropdownRE, showDropdownHome: false, showDropdownMinistries: false, showDropdownForm: false, showDropdownPlaylist: false}    

            case 'showForm':
                return {...state, showDropdownForm: !state.showDropdownForm, showDropdownHome: false, showDropdownMinistries: false, showDropdownRE: false, showDropdownPlaylist: false}

            case 'showPlaylist':
                return {...state, showDropdownPlaylist: !state.showDropdownPlaylist, showDropdownHome: false, showDropdownMinistries: false, showDropdownRE: false, showDropdownForm: false }    

            default: 
            throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, { showDropdownHome:false, showDropdownMinistries:false, showDropdownRE:false, showDropdownForm:false, showDropdownPlaylist:false })

    
    return (
        <>
            <ul className="grid grid-template-rows-8 text-center text-white min-w-max bg-black opacity-85 rounded">
                <li className="px-4 py-2 relative hover:bg-blue-800 border-b"
                    onClick={() =>  dispatch({ type: 'showHome' }) }>
                    Home
                    <span className="ml-2">
                        <FontAwesomeIcon
                            icon={faCaretDown}
                            className="fas fa-caret-down">
                        </FontAwesomeIcon>
                    </span>

                    {/* <div className="absolute z-10"> */}
                    <div className="z-10"> 
                        {state.showDropdownHome ? <DropdownHome /> : null}
                    </div>
                </li>


                <li className="px-4 py-2 relative hover:bg-blue-800 border-b"
                    onClick={() => dispatch({ type:"showMinistries" })}>
                    Ministries
                    <span className="ml-2">
                        <FontAwesomeIcon
                            icon={faCaretDown}
                            className="fas fa-caret-down">
                        </FontAwesomeIcon>
                    </span>

                    {/* <div className="absolute z-10"> */}
                    <div className="z-10">
                        {state.showDropdownMinistries ? <DropdownMinistries /> : null}
                    </div>
                </li>


                <li className="px-4 py-2 relative hover:bg-blue-800 border-b"
                onClick={() => dispatch({ type:"showRE" })}>
                    Religious Education
                    <span className="ml-2">
                        <FontAwesomeIcon
                            icon={faCaretDown}
                            className="fas fa-caret-down">
                        </FontAwesomeIcon>
                    </span>

                    {/* <div className="absolute z-10"> */}
                    <div className="z-10">
                        {state.showDropdownRE ? <DropdownRE /> : null}
                    </div>
                </li>


                <li className="px-4 py-2 relative hover:bg-blue-800 border-b"
                onClick={() => dispatch({ type:"showForm" })}>
                    Forms
                    <span className="ml-2">
                        <FontAwesomeIcon
                            icon={faCaretDown}
                            className="fas fa-caret-down">
                        </FontAwesomeIcon>
                    </span>

                    {/* <div className="absolute z-10"> */}
                    <div className="z-10">
                        {state.showDropdownForm ? <DropdownForm /> : null}
                    </div>
                </li>


                <li className="px-4 py-2 hover:bg-blue-800 border-b">
                    Donations
                </li>


                <li className="px-4 py-2 hover:bg-blue-800 border-b" onClick={() =>
                    router.push("/photo-gallery")
                }>
                    Photo Gallery
                </li>
                

                <li className="px-4 py-2 hover:bg-blue-800 border-b">
                    Mass-Livestream
                </li>


                <li className="px-4 py-2 relative hover:bg-blue-800"
                onClick = {() => dispatch({ type:"showPlaylist" })}>
                    Playlists
                    <span className="ml-2">
                        <FontAwesomeIcon
                            icon={faCaretDown}
                            className="fas fa-caret-down">
                        </FontAwesomeIcon>
                    </span>

                    {/* <div className = "absolute z-10"> */}
                    <div className = "z-10">
                        {state.showDropdownPlaylist? <DropdownPlaylist/> : null}
                    </div>
                </li>
            </ul>


        </>
    )
}

export default DropdownNavbar