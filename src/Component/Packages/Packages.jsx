import React from "react";
import "./_PackagesStyle.css";
import S1 from "../../img/s1.png";
import S2 from "../../img/s2.png";
import S3 from "../../img/S6.png";

export default function Packages() {
  return (
    <>
      <section className="packSec" id="pack">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <h1 className="text-center">خدمات العملاء </h1>
              <div className="titleLine m-auto"></div>
              <h1 className="text-center mt-4 ">الباقات</h1>
              <p className="text-center">
                "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
                أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دت .
                ديواس أيوتي أريري دولار إن ريبريهينديرأيت
              </p>
            </div>
          </div>

          <div className="row p-3 mb-5 ">
            <div className="col-md-4 p-3  ">
              <div className="d-flex justify-content-center  ">
                <img src={S1} alt="" className="w-75 " />
              </div>
              <div className=" text-end  handleHeight">
                <ul dir="rtl" className="text-center">
                  <li style={{ listStyleType: "none" }}>
                    <h3 className="mb-3">تنظيف عادي بالبخار </h3>
                    <h5 className="mb-2 my-4">داخلي / خارجي </h5>
                    <ul  className="" style={{ listStyleType: "none" }}>
                      <li>الخدمه</li>
                      <li>الخدمه</li>
                      <li>الخدمه</li>
                      <li>الخدمه</li>
                    </ul>
                  </li>
                </ul>
                <div className=" btnPrice  bg-info rounded-3 text-center   p-2">
                  <div className="">
                    <h3 className="text-light m-auto">السعر : 65 ريال</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className=" d-flex justify-content-center ">
                <img src={S2} alt="" className="w-75 " />
              </div>
              <div className=" text-end handleHeight ">
                <ul dir="rtl" className="text-center">
                  <li style={{ listStyleType: "none" }}>
                    <h3 className="mb-3">
                      تنظيف عميق بالبخار لازالة البقع الصعبة{" "}
                    </h3>
                    <h5 className="mb-2">داخلي / خارجي </h5>
                    <ul style={{ listStyleType: "none" }}>
                      <li>الخدمه المتميزه</li>
                      <li>الخدمه المتميزه</li>
                      <li>الخدمه المتميزه</li>
                    </ul>
                  </li>
                </ul>
                <div className=" btnPrice  bg-info rounded-3 text-center  p-2">
                  <div className="">
                    <h3 className="text-light m-auto">السعر : 150 ريال</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-3 ">
              <div className=" d-flex justify-content-center ">
                <img src={S3} alt="" className="w-75 " />
              </div>
              <div className=" text-end handleHeight ">
                <ul dir="rtl" className="text-center">
                  <li className="mb-2" style={{ listStyleType: "none" }}>
                    <h3 className="mb-3">الباقة الشهرية</h3>
                    <h5 className="mb-2">تنظيف عادي </h5>
                    <ul className="mb-2 " style={{ listStyleType: "none" }}>
                      <li >الخدمه المطلوبة</li>
                      <li>الخدمه المطلوبة</li>
                    </ul>
                    <h6 className="fw-bold">عدد الزيارات : ثلاثة </h6>
                    <h6  className="fw-bold">تستهلك خلال : 30 يوم</h6>
                  </li>
                </ul>
                <div className=" btnPrice  bg-info rounded-3 text-center  p-2">
                  <div className="">
                    <h3 className="text-light m-auto">السعر : 179 ريال</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
