import { useState } from "react";
import Popup from "./Popup";

const App = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <div>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100%"}}>
        <button onClick={() => setIsPopupOpen(true)}>Открыть Popup</button>
      </div>
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <h2>Плавный попап</h2>
        <p>Подпишись!</p>
      </Popup>
    </div>
  );
};

export default App;