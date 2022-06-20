import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const SliderHomepage = () => {

    const images = ["/IMG_7883.JPG", "/IMG_7893.JPG", "/IMG_8134.JPG", "/IMG_8160.JPG"]

    //Implementation-I (without any library)

    // const length = images.length - 1

    // const [currentIndex, setCurrentIndex] = useState(0)


    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setCurrentIndex((prev) => {
    //             return prev + 1 === images.length ? 0 : prev + 1;
    //         });
    //     }, 4000);
    //     return () => {
    //         clearInterval(intervalId);
    //     };
    // }, []);




    // return (
    //     <div className="mx-16 mt-20 relative lg:mx-36 ">

    //         <div>
    //             <span className="cursor-pointer z-10 absolute top-2/4 left-8 text-white text-3xl font-bold hover:text-green-300 select-none"
    //                 onClick={() => {
    //                     setCurrentIndex(currentIndex < 1 ? length : currentIndex - 1)
    //                 }}>&#10094;</span>

    //             <span className="cursor-pointer z-10 absolute top-2/4 right-8 text-white text-3xl font-bold hover:text-green-300 select-none"
    //                 onClick={() => {
    //                     setCurrentIndex(currentIndex === length ? 0 : currentIndex + 1)
    //                 }}>&#10095;</span>
    //         </div>


    //         <div className="">

    //             <Image
    //                 className=""
    //                 src={images[currentIndex]}
    //                 loader={() => images[currentIndex]}
    //                 alt=""
    //                 layout="responsive"
    //                 objectFit="cover"
    //                 width={1250}
    //                 height={480}
    //             />
    //         </div>

    //         <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
    //             <button type="button" className="w-3 h-3 rounded-full bg-black" data-carousel-slide-to="0"></button>
    //             <button type="button" className="w-3 h-3 rounded-full bg-black" data-carousel-slide-to="1"></button>
    //             <button type="button" className="w-3 h-3 rounded-full bg-black" data-carousel-slide-to="2"></button>
    //             <button type="button" className="w-3 h-3 rounded-full bg-black" data-carousel-slide-to="3"></button>
    //             <button type="button" className="w-3 h-3 rounded-full bg-black" data-carousel-slide-to="4"></button>
    //         </div>

    //     </div>
    // )


    //Implementation-II (using react-slick library)
    // more resources can be used from the link below for further modification
    //documents for settings/configuration (https://react-slick.neostack.com/docs/api/)
    
    const sliderRef = useRef();

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        arrows:true,
        slidesToScroll: 1
    };

    const previousSlide = () => {
        sliderRef.current.slickPrev();
    }

    const nextSlide = () => {
        sliderRef.current.slickNext();
    }

    return (

        <div className="mx-16 mt-20 relative lg:mx-36">
            <div>                
                    <span className="cursor-pointer z-10 absolute top-2/4 left-8 text-white text-3xl font-bold hover:text-green-300 select-none"
                    onClick={previousSlide}
                    >&#10094;</span>
                
                    <span className="cursor-pointer z-10 absolute top-2/4 right-8 text-white text-3xl font-bold hover:text-green-300 select-none"
                    onClick={nextSlide}
                    >&#10095;</span>
            </div>

            <Slider {...settings} autoplay autoplaySpeed={5000} ref={sliderRef}> 
                {images.map((image, index) => {
                    return (
                        <div className="" key={index}>
                            <Image
                                className=""
                                src={image}
                                loader={() => image}
                                alt=""
                                layout="responsive"
                                objectFit="cover"
                                width={1250}
                                height={480}
                            />
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default SliderHomepage