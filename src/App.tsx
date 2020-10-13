import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import { Image } from "./typescript-interfaces/image.interface";
import Modal from "./components/modal/modal.component";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<Array<Image>>([]);
  const [element, setElement] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [modalIdSent, setModalIdSent] = useState(1);

  const page = useRef(1);
  const prevY = useRef(0);
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        const y = firstEntry.boundingClientRect.y;

        if (prevY.current > y) {
          setTimeout(() => loadMore(), 1000); // 1 sec delay
        }

        prevY.current = y;
      },
      { threshold: 1 }
    )
  );

  const loadMore = () => {
    page.current++;

    handleInitial(page.current);
  };

  const fetchData = useCallback(async (pageNumber) => {
    console.log("pageNumber: ", pageNumber);

    const url = `https://picsum.photos/v2/list?page=${pageNumber}&limit=15`;
    setLoading(true);

    try {
      const res = await axios.get(url);
      const { status, data } = res;

      setLoading(false);
      return { status, data };
    } catch (e) {
      setLoading(false);
      return e;
    }
  }, []);

  const handleInitial = useCallback(
    async (page) => {
      const newImages = await fetchData(page);
      const { status, data } = newImages;
      if (status === 200) setImages((images) => [...images, ...data]);
    },
    [fetchData]
  );

  useEffect(() => {
    handleInitial(page.current);

    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [handleInitial, element]);

  return (
    <div className="appStyle" style={{ textAlign: "center" }}>
      {images && (
        <ul style={{ listStyle: "none" }} className="imageGrid">
          {images.map((image, index) => (
            <li
              key={index}
              className="imageContainer"
              onClick={() => {
                setModalVisible(true);
                setModalIdSent(index);
              }}
            >
              <img
                style={{ width: "95vw" }}
                src={image.download_url}
                alt={image.author}
                className="imageStyle"
              />
            </li>
          ))}
        </ul>
      )}

      {loading && <li>Loading ...</li>}

      <div ref={setElement} className="buttonContainer">
        <h1>Loading more content</h1>
      </div>
      {modalVisible ? (
        <Modal
          imagesArray={images}
          idReceived={modalIdSent}
          setModalVisible={setModalVisible}
        />
      ) : undefined}
    </div>
  );
};

export default App;
