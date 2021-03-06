import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Link from "next/link"
import { useRouter } from 'next/router'



const DropdownForm = () => {
    
    const router = useRouter();
    const { showNavbarMenu, showCloseButton } = useContext(GlobalContext); 
    

    return (
        <div>
            <ul className = "grid grid-template-rows-8 text-left min-w-max bg-blue-900 shadow lg:bg-gray-100 lg:opacity-85 rounded">
                <li className = "px-4 py-2 hover:bg-blue-300 hover:text-white border-b"
                onClick = {() => { 
                        router.push("/parish-registration-form");
                        showNavbarMenu();
                        showCloseButton();
                        }}>
                    Parish Registration Form
                </li>
                

                <li className = "px-4 py-2 hover:bg-blue-300 hover:text-white border-b"
                onClick = {() => { 
                        router.push("/facility-scheduling-form");
                        showNavbarMenu();
                        showCloseButton();
                        }}>
                    Facility Scheduling Form
                </li>


                <li className = "px-4 py-2 hover:bg-blue-300 hover:text-white border-b">
                    <p className = "cursor-pointer"
                        onClick = {() => { router.push("https://www.jesusthegoodshepherd.org/wp-content/uploads/Forms/JTGS-Student-Registration-Form_v3.pdf") }}>
                        Student Registration Form
                    </p>
                </li>


                <li className = "px-4 py-2 hover:bg-blue-300 hover:text-white border-b">
                    <p className = "cursor-pointer"
                        onClick = {() => { router.push("https://www.jesusthegoodshepherd.org/wp-content/uploads/Forms/Hall-Rental-Agreement.pdf") }}>
                        Hall Rental Agreement Form
                    </p>
                </li>


                <li className = "px-4 py-2 hover:bg-blue-300 hover:text-white border-b">
                    <p className = "cursor-pointer"
                        onClick = {() => { router.push("https://www.jesusthegoodshepherd.org/wp-content/uploads/Forms/JTGS-REP-2021-2022-Calendar.pdf") }}>
                        Religious Eductaion Calendar
                    </p>
                </li>


                <li className = "px-4 py-2 hover:bg-blue-300 hover:text-white border-b">
                    <p className = "cursor-pointer"
                        onClick = {() => { router.push("https://www.jesusthegoodshepherd.org/wp-content/uploads/Guide-for-Making-a-Good-Confession.pdf") }}>
                        Guide For Making a Good Confession
                    </p>
                </li>


                <li className = "px-4 py-2 hover:bg-blue-300 hover:text-white border-b">
                    <p className = "cursor-pointer"
                        onClick = {() => { router.push("https://www.jesusthegoodshepherd.org/wp-content/uploads/Forms/Wedding-Guidelines.pdf") }}>
                        Wedding Guidelines
                    </p>
                </li>


                <li className = "px-4 py-2 hover:bg-blue-300 hover:text-white">
                    <p className = "cursor-pointer"
                        onClick={() => { router.push("https://www.jesusthegoodshepherd.org/wp-content/uploads/Forms/Wedding-Confirmation-Date.pdf") }}>
                        Wedding Confirmation Date
                    </p>
                </li>
            </ul>


        </div>
    )
}

export default DropdownForm