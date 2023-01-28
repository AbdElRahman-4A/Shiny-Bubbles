import React from "react";
import "./_BubblesStyle.css";

export default function Bubbles({ visible }) {
  let bubblesVisibility = true;
  setTimeout(() => {
    bubblesVisibility = false;
  }, 4000);
  return (
    <>
      {bubblesVisibility ?
        <section className={`${visible ? '' : 'opacity-0'} bubbles-container`}>
          <div className="bubbles" id="background-wrap">
            <div className="bubble x1"></div>
            <div className="bubble x2"></div>
            <div className="bubble x3"></div>
            <div className="bubble x4"></div>
            <div className="bubble x5"></div>
            <div className="bubble x6"></div>
            <div className="bubble x7"></div>
            <div className="bubble x8"></div>
            <div className="bubble x9"></div>
            <div className="bubble x10"></div>
            <div className="bubble x11"></div>
            <div className="bubble x12"></div>
            <div className="bubble x13"></div>
            <div className="bubble x14"></div>
            <div className="bubble x15"></div>
            <div className="bubble x16"></div>
            <div className="bubble x17"></div>
            <div className="bubble x18"></div>
            <div className="bubble x19"></div>
            <div className="bubble x20"></div>
            <div className="bubble x21"></div>
            <div className="bubble x22"></div>
            <div className="bubble x23"></div>
            <div className="bubble x24"></div>

            {/* <div className="bubble x25"></div>
          <div className="bubble x26"></div>
          <div className="bubble x27"></div>
          <div className="bubble x28"></div>
          <div className="bubble x29"></div>
          <div className="bubble x30"></div>
          <div className="bubble x31"></div>
          <div className="bubble x32"></div>
          <div className="bubble x33"></div>
          <div className="bubble x34"></div>
          <div className="bubble x35"></div>
          <div className="bubble x36"></div>
          <div className="bubble x37"></div>
          <div className="bubble x38"></div>
          <div className="bubble x39"></div>
          <div className="bubble x40"></div>
          <div className="bubble x41"></div>
          <div className="bubble x42"></div>
          <div className="bubble x43"></div>
          <div className="bubble x44"></div>
          <div className="bubble x45"></div>
          <div className="bubble x46"></div>
          <div className="bubble x47"></div>
          <div className="bubble x48"></div> */}
          </div>
        </section> : ''}


    </>
  );
}
