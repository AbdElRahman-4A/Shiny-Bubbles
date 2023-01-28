import React from "react";
import "./_GalleryStyle.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import I1 from "../../img/1.jpg";
import I2 from "../../img/2.jpg";
import I3 from "../../img/3.jpg";

export default function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <section className="gallery text-center" id="gallery">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h2 className="p-2"> معرض الصور</h2>
              <div className="titleLine m-auto "></div>
              <h2 className="p-2"> اعمالنا </h2>
              <p>
                "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
                أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دت .
                ديواس أيوتي أريري دولار إن ريبريهينديرأيت
              </p>
              <div className="p-5">
                <Slider {...settings}>
                  <div>
                    <img src={I1} alt="" className="w-100" />
                  </div>
                  <div>
                    <img src={I2} alt="" className="w-100" />
                  </div>
                  <div>
                    <img src={I3} alt="" className="w-100" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
