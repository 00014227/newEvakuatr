
import React, { useEffect, useState } from 'react'
import { Link } from "react-scroll"

export default function Burgerihihi({ close, handleClick }) {



    return (
        <div className="lg:hidden w-full bg-[#404040] h-[4rem] flex justify-between items-center px-4">
            <ul className=' flex justify-start items-center space-x-2'>
                <li className="text-[#404040] 2xl:text-2xl lg:text-xl  font-semibold uppercase cursor-pointer">
                    <a href="https://t.me/bahrom725">
                        <li className="text-[#404040] 2xl:text-2xl lg:text-xl  font-semibold uppercase cursor-pointer">
                            <a href="tel:+998950555555">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="40" viewBox="0,0,256,256">
                                    <g fill="#F39F1F" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(5.12,5.12)"><path d="M46.137,6.552c-0.75,-0.636 -1.928,-0.727 -3.146,-0.238h-0.002c-1.281,0.514 -36.261,15.518 -37.685,16.131c-0.259,0.09 -2.521,0.934 -2.288,2.814c0.208,1.695 2.026,2.397 2.248,2.478l8.893,3.045c0.59,1.964 2.765,9.21 3.246,10.758c0.3,0.965 0.789,2.233 1.646,2.494c0.752,0.29 1.5,0.025 1.984,-0.355l5.437,-5.043l8.777,6.845l0.209,0.125c0.596,0.264 1.167,0.396 1.712,0.396c0.421,0 0.825,-0.079 1.211,-0.237c1.315,-0.54 1.841,-1.793 1.896,-1.935l6.556,-34.077c0.4,-1.82 -0.156,-2.746 -0.694,-3.201zM22,32l-3,8l-3,-10l23,-17z"></path></g></g>
                                </svg>
                            </a>

                        </li>
                    </a>

                </li>

                <li className="text-[#404040] 2xl:text-2xl lg:text-xl  font-semibold uppercase cursor-pointer">
                    <a href="https://www.instagram.com/evakuator.725">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                            <g fill="#F39F1F" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><g transform="scale(8,8)"><path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path></g></g>
                        </svg>
                    </a>

                </li>


            </ul>
            <div className=' '>
            <button onClick={handleClick} className=' flex items-center justify-end'>
                <svg width="50px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 18L20 18" stroke="#F39F1F" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 12L20 12" stroke="#F39F1F" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 6L20 6" stroke="#F39F1F" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </button>
            </div>
            {close ? (
                <div className="bg-[#404040] p-[5rem] w-[25rem] opacity-90 absolute top-[4.5rem] transition-opacity duration-300 ease-in-out">
                    <ul className=" space-y-4">
                        <li className="text-[#F39F1F] 2xl:text-2xl lg:text-xl font-semibold uppercase"><Link to="hero"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500} >главная</Link></li>
                        <li className="text-[#F39F1F] 2xl:text-2xl lg:text-xl  font-semibold uppercase"><Link to="about"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500} >о нас</Link></li>
                        <li className="text-[#F39F1F] 2xl:text-2xl lg:text-xl  font-semibold uppercase"><Link to="price"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500} >цены</Link></li>
                        <li className="text-[#F39F1F] 2xl:text-2xl lg:text-xl  font-semibold uppercase"><a href="tel:+998950555555">вызвать</a></li>
                    </ul>
                </div>) : null
            }

        </div>
    )
}
