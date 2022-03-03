import './App.css';
import Header from "./Header.js";
import Card from "./Card.js";
import Data from "./data.js";

export default function App() {

  const cards = Data.map(item => {
    return (
        <Card
          key= {item.id}
          title= {item.title}
          location= {item.location}
          googleMapsUrl= {item.googleMapsUrl}
          startDate= {item.startDate}
          endDate= {item.endDate}
          description={item.description}
          imageUrl={item.imageUrl}
          />
      )
  })

  return (
    <div>
      <Header />
      {cards}
    </div>
  );
}

 