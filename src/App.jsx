import { useState } from 'react';
import ArtCard from './ArtCard';
import './App.css';

import art1 from './images/art1.jpg';
import art2 from './images/art2.jpg';
import art3 from './images/art3.jpg';
import art4 from './images/art4.jpg';
import art5 from './images/art5.jpg';
import art6 from './images/art6.jpg';
import art7 from './images/art7.jpg';
import art8 from './images/art8.jpg';
import art9 from './images/art9.jpg';
import art10 from './images/art10.jpg';
import art11 from './images/art11.jpg';
import art12 from './images/art12.jpg';
import art13 from './images/art13.jpg';
import art14 from './images/art14.jpg';
import art15 from './images/art15.jpg';
import art16 from './images/art16.jpg';
import art17 from './images/art17.jpg';
import art18 from './images/art18.jpg';
import art19 from './images/art19.jpg';
import art20 from './images/art20.jpg';
import art21 from './images/art21.jpg';
import art22 from './images/art22.jpg';
import art23 from './images/art23.jpg';
import art24 from './images/art24.jpg';
import art25 from './images/art25.jpg';
import art26 from './images/art26.jpg';
import art27 from './images/art27.jpg';
import art28 from './images/art28.jpg';
import art29 from './images/art29.jpg';
import art30 from './images/art30.jpg';
import art31 from './images/art31.jpg';

function App() {
  const [selected, setSelected] = useState(null);

  const arts = [
    { image: art1, title: 'Рисунок 1' },
    { image: art2, title: 'Рисунок 2' },
    { image: art3, title: 'Рисунок 3' },
    { image: art4, title: 'Рисунок 4' },
    { image: art5, title: 'Рисунок 5' },
    { image: art6, title: 'Рисунок 6' },
    { image: art7, title: 'Рисунок 7' },
    { image: art8, title: 'Рисунок 8' },
    { image: art9, title: 'Рисунок 9' },
    { image: art10, title: 'Рисунок 10' },
    { image: art11, title: 'Рисунок 11' },
    { image: art12, title: 'Рисунок 12' },
    { image: art13, title: 'Рисунок 13' },
    { image: art14, title: 'Рисунок 14' },
    { image: art15, title: 'Рисунок 15' },
    { image: art16, title: 'Рисунок 16' },
    { image: art17, title: 'Рисунок 17' },
    { image: art18, title: 'Рисунок 18' },
    { image: art19, title: 'Рисунок 19' },
    { image: art20, title: 'Рисунок 20' },
    { image: art21, title: 'Рисунок 21' },
    { image: art22, title: 'Рисунок 22' },
    { image: art23, title: 'Рисунок 23' },
    { image: art24, title: 'Рисунок 24' },
    { image: art25, title: 'Рисунок 25' },
    { image: art26, title: 'Рисунок 26' },
    { image: art27, title: 'Рисунок 27' },
    { image: art28, title: 'Рисунок 28' },
    { image: art29, title: 'Рисунок 29' },
    { image: art30, title: 'Рисунок 30' },
    { image: art31, title: 'Рисунок 31' },
  ];

  return (
    <div>
      <header className="header">
        <h1>Мои рисунки</h1>
        <p>Галерея из 31 работы</p>
      </header>

      <div className="gallery">
        {arts.map((art, index) => (
          <ArtCard
            key={index}
            image={art.image}
            title={art.title}
            onClick={() => setSelected(art)}
          />
        ))}
      </div>

      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-content">
            <img src={selected.image} alt={selected.title} />
            <p>{selected.title}</p>
            <button onClick={() => setSelected(null)}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;