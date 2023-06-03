import "./App.css";
import { useEffect, useState } from "react";
import { data } from "./Data/data";
import { Content } from "./Component/Content";
import { Carousel } from "./Component/Carousel";

function App() {
  const [play, setPlay] = useState(false);
  const [newData, setNewData] = useState([]);
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (index === data.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setIndex((prev) => (index === 0 ? data.length - 1 : prev - 1));
  };
  
  const handleStart = () => {
    setPlay(!play);
  };

  useEffect(() => {
    setNewData(data[index]);
    let timer;
    if (play) {
      timer = setInterval(handleNext, 5000);
    }
    return () => clearInterval(timer);
  }, [handleNext, data, index]);

  return (
    <div className="App">
      <Content newData={newData}/>
      <Carousel handleNext={handleNext} handlePrev={handlePrev} handleStart={handleStart} play={play} setIndex={setIndex} index={index} />
    </div>
  );
}

export default App;
