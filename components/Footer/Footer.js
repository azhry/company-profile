import React from 'react';


export default function(props) {
   
    return (
        <div className="flex  flex-wrap mt-8  lg:mt-40 md:ml-8 md:mr-8">
        <div className="w-full text-justify md:w-2/5 md:text-left p-4 text-gray-200">
            <img src="/Logo.png" alt="" />
            <p className="mt-6 mb-10 footer-text"><span style={{ fontWeight: 'bold', color: '#ab4693' }}>Muten</span> adalah tempat bagimu untuk <br /> mengembangkan usaha ke teknologi terkini</p>
            <p className="mr-4 ml-2 footer-text" style={{ display: 'inline' }}>Icon</p>
            <p className="mr-4 ml-2 footer-text" style={{ display: 'inline' }}>Icon</p>
            <p className="mr-4 ml-2 footer-text" style={{ display: 'inline' }}>Icon</p>
            <p className="mt-16 footer-text text-center sm:text-left">©2020MusiTeknologiNusa</p>

        </div>
        <div className="w-1/3 text-left md:w-1/5 p-4 ">
            <p className="mb-5 " style={{ fontWeight: 'bold' }}>Layanan</p>
            <a href="#" className="mb-5 footer-text block hover:text-black">Websites</a>
            <a href="#" className="mb-5 footer-text block hover:text-black">Apps</a>
            <a href="#" className="footer-text block hover:text-black">Multimedia</a>
        </div>
        <div className="w-1/3 text-left md:w-1/5  p-4 ">
            <p className="mb-5" style={{ fontWeight: 'bold' }}>Engage</p>
            <a href="#" className="mb-5 footer-text block hover:text-black">Muten ?</a>
            <a href="#" className="mb-5 footer-text block hover:text-black" >FAQ</a>
            <a href="#" className="mb-5 footer-text block hover:text-black">About Us</a>
            <a href="#" className="mb-5 footer-text block hover:text-black">Privacy Policy</a>
            <a href="#" className="mb-5 footer-text block hover:text-black">Terms of Service</a>
        </div>
        <div className="w-1/3 text-left md:w-1/5  p-4 ">
            <p className="mb-5" style={{ fontWeight: 'bold' }}>Hubungi Kami</p>
            <a href="a" className="mb-5 footer-text block hover:text-black">Email</a>
            <a href="a" className="mb-5 footer-text block hover:text-black">Phone</a>
        </div>
    </div>
    );
};