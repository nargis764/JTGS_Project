import React from 'react'
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";


const PhotoGallery = () => {

    let imgURL =
        "https://images.pexels.com/photos/701816/pexels-photo-701816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    const router = useRouter();

    return (
        <div className="px-20 md:px-32 lg:px-44">
            <div>
                <Image
                    className=""
                    src={imgURL}
                    //loader function generates the URL for the image by appending a root domain to the provided source
                    //apparently we don't need the loader function for locally stored images
                    loader={() => imgURL}
                    alt=""
                    layout="responsive"
                    objectFit="cover"
                    width={1250}
                    height={380}
                />
            </div>

            <p className="text-3xl py-10 pb-5 text-sky-600 text-center tracking-wider">
                Photo Gallery
            </p>

            <p className="text-lg mt-5 underline hover:text-teal-600">
                <Link href="https://drive.google.com/drive/folders/1hvPEPop1xPxX2BFfWO_jFnY8J8a2zkke">Gallery</Link>
            </p>




        </div>
    )
}

export default PhotoGallery