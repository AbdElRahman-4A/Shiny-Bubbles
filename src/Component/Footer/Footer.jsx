import React from "react";
import "./_FooterStyle.css";
import Logo from "../../img/logo.png";

export default function Footer() {
  return (
    <>
      <section dir="rtl">
        <div className=" footer">
          <div className="container p-4">
            <div className="row d-flex align-items-center  ">
              <div className="col-md-4 offset-3">
                <h3 className="mb-3">مغسلة الفقاعات اللامعة المتنقلة</h3>
                <p>
                  خدمة غسيل السيارات بالبخار و بأفضل أدوات التنظيف عند باب بيتك
                </p>
              </div>

              <div className="col-md-4  d-flex justify-content-center">
                <img src={Logo} alt="" className="w-50" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
