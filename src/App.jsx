import { useState } from "react";
import "./App.css";
import Card from "./components/card";
function App() {
  const [cardList, SetList] = useState([
    { title: "Windows", description: "This is Windows" },
    { title: "IOS", description: "This is IOS" },
    { title: "Mac OS", description: "This is Mac OS" },
  ]);

  const deleteHandler = (title) => {
    SetList(cardList.filter((card) => card.title !== title));
  };

  return (
    <div className="container">
      {cardList.map((item, index) => {
        return (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            onDelete={() => deleteHandler(item.title)}
          />
        );
      })}
    </div>
  );
}

export default App;
