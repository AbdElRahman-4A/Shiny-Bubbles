import React from "react";
import "./_HeaderStyle.css";
import mlogo from "../../img/Mainlogo.png";

import Lottie from "lottie-react";
import NewL from "../../animation/lf20_xvw0ldqd.json";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <>
      <section className="headerSec1 mb-5 " dir="rtl">
        <Navbar/>
        <div className="container ms-0 ps-0 ">
          <div className="row d-flex align-items-center    position-relative ">
            {/* <div className='d-flex justify-content-center'>
              <img src={mlogo} alt="" className="logoF" />
            </div> */}
            <div className="col-md-5  " dir="rtl">
              <div className="d-flex justify-content-center  ">
                <img src={mlogo} alt="" className="w-50 m-auto" />
              </div>
              <h4 className="text-end  text-dark">نجيكم فين ما تكونوا </h4>
              <h1 className="text-end text-dark p-3">
                مغسلة الفقاعات اللامعة المتنقلة
              </h1>
              <h3 className="text-end text-dark p-3">
                خدمة غسيل السيارات بالبخار و بأفضل أدوات التنظيف عند باب بيتك
              </h3>
            </div>{" "}
            <div className="col-md-7 p-0">
              <div className=" animate">
                <Lottie animationData={NewL} className="animate" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
