import React from "react";
import { Link } from "react-router-dom";
import "./_NavbarStyle.css";

export default function Navbar() {
  return (
    <>
      <section id="navbar" dir="rtl">
        <nav class="navbar navbar-expand-lg bg-body-tertiary menu  ">
          <div class="container ">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav m-auto mb-2 mb-lg-0  header   ">
                <li class="nav-item  ">
                  <Link class="nav-link active" aria-current="page" to="/">
                    خدمة العملاء
                  </Link>
                </li>
                <li class="nav-item ">
                  <Link class="nav-link active " to="/">
                    معرض الصور
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active  " to="/">
                    من نحن
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active  " to="">
                    تواصل معانا
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
