import React from 'react';
import logo from '../../../assets/image/logo.jpg';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="  p-10 bg-[#F63E7B] text-white">
            <footer className='footer w-10/12 mx-auto'>
                <aside>
                    <img className='h-10' src={logo} alt="" />
                    <p>Women Beauty Parlour <br />Mirpur, Dhaka-1216</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                </nav>
                <nav className='w-60 '>
                    <h6 className="footer-title">About Us</h6>
                    <p ><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem enim veritatis exercitationem sapiente nobis at quis quae expedita ex deserunt ducimus asperiores fugit reiciendis aspernatur vel laudantium, eveniet architecto nihil.</small></p>
                    <div className='flex gap-5 text-2xl'>
                        <FaFacebookSquare />
                        <FaInstagram />
                        <FaYoutube></FaYoutube>
                        <FaLinkedin></FaLinkedin>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;