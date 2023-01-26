import React from "react";
import "./_ContactUsStyle.css";
import locIcon from "../../img/location.png";
import PhoneIcon from "../../img/whatsapp.png";
import EmailIcon from "../../img/email.png";

export default function ContactUs() {
  return (
    <>
      <section className="cotactSec">
        <div className="container">
          <div className="row">
            <div className="col-md-6 p-5" dir="rtl">
              <h3 dir="rtl">تواصل معانا</h3>
              <div className="titleLine m-2"></div>
              <h4 className="mb-4">للحجز و الاستفسار</h4>

              <div className="d-flex align-end">
                <div className="icons">
                  <img src={locIcon} alt="" />
                </div>
                <h5>الفرع الرئيسي</h5>
              </div>
              <h6>السعوديه / الرياض / اس م الشارع .......... </h6>
              <div className="phone d-flex align-end mt-5">
              <div className="icons">
                  <img src={PhoneIcon} alt="" />
                </div>
                <h6 className="me-2 mt-1" dir="ltr"> 4990 301 053</h6>
              </div>
              <div className=" d-flex align-end mt-1 " >
                <div className="icons C">
                  <img src={EmailIcon} alt="" />
                </div>
                <h6 className="me-2 mt-1"  > Shinybubbles.Jeddah@gmail.com</h6>
              </div>
            </div>
            <div className="col-md-5  d-flex justify-content-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14934532.555854663!2d36.045493586795104!3d23.955980237501276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2sSaudi%20Arabia!5e0!3m2!1sen!2seg!4v1674649071786!5m2!1sen!2seg"
                width="600"
                height="450"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
