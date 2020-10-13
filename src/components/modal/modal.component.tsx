import React, { useState } from "react";
import { Image } from "../../typescript-interfaces/image.interface";
import "./modal.styles.scss";

interface ModalProps {
  imagesArray: Array<Image>;
  idReceived: number;
  setModalVisible: any;
}

const Modal: React.FC<ModalProps> = ({
  imagesArray,
  idReceived,
  setModalVisible,
}) => {
  const [currentIndex, setCurrentIndex] = useState(idReceived);

  return (
    <div>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span
            className="close"
            onClick={() => {
              setModalVisible(false);
            }}
          >
            &times;
          </span>

          {imagesArray.map((image, index) => {
            if (index === currentIndex) {
              console.log(`${index} === ${currentIndex}`);

              return (
                <div key={index}>
                  <img
                    style={{ width: "50%" }}
                    src={image.download_url}
                    alt={image.author}
                    className="imageStyle"
                  />
                </div>
              );
            }
          })}

          <button
            onClick={() => {
              if (currentIndex > 0) {
                setCurrentIndex((prevState) => prevState - 1);
              }
            }}
          >
            Previous
          </button>
          <button
            onClick={() => {
              setCurrentIndex((prevState) => prevState + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
