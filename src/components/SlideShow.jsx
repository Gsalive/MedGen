//images to store images . usestate to automate - works on index change ,timeoutref reset after some time to change index trigger usestate change image 
//*not able to work on local image *//
import React from "react";
import '../styles/slideshow.css';
const images = [
  "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/6129677/pexels-photo-6129677.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/3850812/pexels-photo-3850812.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {images.map((imageUrl, idx) => (
          <div className="slide" key={idx} style={{ backgroundImage: `url(${imageUrl})`,backgroundSize:"100%",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}></div>
        ))}
      </div>


    </div>
  );
}

export default Slideshow;