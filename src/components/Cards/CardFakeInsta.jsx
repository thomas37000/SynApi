/* eslint-disable react/no-danger */
import React from 'react';
import './Card_css/CardInsta.css';
import './Card_css/Card.css';

export default function CardFakeInsta() {
  const regex = /[@#]\w+/g;

  function Hashtag(match) {
    return match.replace(regex, (txt) => {
      return `<span class="txtSpanWithImgInst">${txt}</span>`;
    });
  }
  return (
    <>
      <div className="cardWithImgINSTA">
        <div className="cardBodyWithImg">
          <div className="contentNoImg">
            <span className="textSpanWithImg">
              <div
                dangerouslySetInnerHTML={{
                  __html: Hashtag(
                    'Pisciculture de #carbonne #urbex #volvestre #tourismeenvolvestre'
                  ),
                }}
              />
            </span>
          </div>
          <div className="cardImg">
            <div className="getImg">
              <img
                src="https://images.alphacoders.com/376/37681.jpg"
                alt="ubuntu"
              />
            </div>
          </div>
        </div>
        <div className="userCard">
          <img
            className="logoUser"
            src="https://logo-marque.com/wp-content/uploads/2020/09/Linux-Logo.png"
            alt="linux"
          />
          <h3 className="name">@ubuntu</h3>
        </div>
        <div className="footerCard">
          <h3 className="hashtag">ubuntu</h3>
          <img
            className="logoUser"
            src="https://logo-marque.com/wp-content/uploads/2020/09/Linux-Logo.png"
            alt="linux"
          />
        </div>
      </div>
    </>
  );
}
