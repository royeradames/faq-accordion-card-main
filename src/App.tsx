import React, { useState } from "react";
import "./App.css";
import faq from "./faq.module.scss";
import mobileWomenOnline from "./images/illustration-woman-online-mobile.svg";
import mobilePattern from "./images/bg-pattern-mobile.svg";
import desktopWomenOnline from "./images/illustration-woman-online-desktop.svg";
import desktopPattern from "./images/bg-pattern-desktop.svg";
import box from "./images/illustration-box-desktop.svg";
function App() {
  // interface faqDataArrayTypes{
  //   [index:number]: {
  //     question: string,
  //     answer: string,
  //     showing: boolean,
  //   }
  // }

  const faqDataArray = [
    {
      question: "How many team members can I invite?",
      answer:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      question: "What is the maximum file upload size?",
      answer:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes! Send us a message and we’ll process your request no questions asked.",
    },
    {
      question: "Do you provide additional support?",
      answer:
        "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
  ];
  interface data {
    showing: boolean;
    question: string;
    answer: string;
  }
  const [hiddeContent, setHiddeContent] = useState<data[]>(() => {
    return faqDataArray.map((faqData, idx: number) => {
      const defaultOpenQuestion = idx === 1;
      if (defaultOpenQuestion) return { ...faqData, showing: false };
      return { ...faqData, showing: true };
    });
  });

  function toggleClass(index: number) {
    const hideShowFaq = hiddeContent.map((data, idx: number) => {
      const onChangingObject = idx === index;
      if (onChangingObject) data.showing = !data.showing;
      return data;
    });
    setHiddeContent(hideShowFaq);
  }

  function renderFaq(faqList: data[]) {
    return (
      <ul className={faq.faq__list}>
        {faqList.map((faqData, index) => {
          return (
            <>
              <li>
                <div className={`${faq.faq_questionArrow}`}>
                  <h2
                    className={`${faq.faq__question} ${
                      faqData.showing ? "" : faq.faq__question_selected
                    }`}
                    onClick={() => toggleClass(index)}
                  >
                    {faqData.question}{" "}
                  </h2>
                  <p>
                    <i
                      className={`${faq.faq__arrow} ${
                        faqData.showing
                          ? faq.faq__arrow_down
                          : faq.faq__arrow_up
                      }`}
                    ></i>
                  </p>
                </div>
                <p
                  className={`${faq.faq__answer} ${
                    faqData.showing
                      ? faq.faq__answer_hidden
                      : faq.faq__answer_showing
                  }`}
                >
                  {faqData.answer}
                </p>
              </li>
              <hr className={faq.faq__divider}></hr>
            </>
          );
        })}
      </ul>
    );
  }
  return (
    <div className={faq.background}>
      <section className={faq.faq}>
        <div className={`${faq.faq__illustration}  ${faq.illustration}`}>
          <img src={box} alt="box" className={faq.illustration__box} />
          <section className={faq.illustration_container}>
            <picture className={faq.illustration__women}>
              <source media="(min-width: 800px)" srcSet={desktopWomenOnline} />
              <img
                src={mobileWomenOnline}
                alt="illustration of a woman using the computer"
              />
            </picture>

            <picture className={faq.illustration__pattern}>
              <source media="(min-width: 800px)" srcSet={desktopPattern} />
              <img src={mobilePattern} alt="blue carpet" />
            </picture>
          </section>
        </div>
        <div className={faq.faq_container}>
          <h1 className={faq.faq__title}>FAQ</h1>
          {renderFaq(hiddeContent)}
        </div>
      </section>

      {/* <div style={{
        fontSize: "11px", 
        textAlign: "center",
      }}>
        Challenge by <a style={{
          color: "hsl(228, 45%, 44%)",
        }} href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/royeradames">Royer Adames</a>.
      </div> */}
    </div>
  );
}

export default App;
