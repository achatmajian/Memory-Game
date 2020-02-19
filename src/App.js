import React from 'react';
import Hero from "./components/Hero.js";
import Grid from "./components/Grid.js";
import './App.css';

var images = [
  {
      id: 1,
      name: "Richard Hendricks",
      url: "https://vignette.wikia.nocookie.net/silicon-valley/images/3/33/Richard_Hendricks.jpg/revision/latest?cb=20150526104602"
  },
  {
      id: 2,
      name: "Erlich Bachman",
      url: "https://vignette.wikia.nocookie.net/silicon-valley/images/b/bb/Binding_Arbitration_Image_4.jpg/revision/latest/scale-to-width-down/619?cb=20151228222226"
  },
  {
      id: 3,
      name: "Dinesh Chugtai",
      url: "https://vignette.wikia.nocookie.net/silicon-valley/images/e/e3/Dinesh_Chugtai.jpg/revision/latest/scale-to-width-down/619?cb=20150620094204"
  },
  {
      id: 4,
      name: "Bertram Gilfoyle",
      url: "https://vignette.wikia.nocookie.net/silicon-valley/images/b/b8/Gilfoyle.jpg/revision/latest/scale-to-width-down/619?cb=20160923173521"
  },
  {
      id: 5,
      name: "Donald 'Jared' Dunn",
      url: "https://vignette.wikia.nocookie.net/silicon-valley/images/c/c9/Silicon-Valley-Wikia_infobox-Jared-Dunn_01.jpg/revision/latest?cb=20140407101454"
  },
  {
    id: 6,
    name: "Nelson 'Big Head' Bighetti",
    url: "https://vignette.wikia.nocookie.net/silicon-valley/images/3/39/Silicon-Valley-Wikia_infobox-bighead_01.jpg/revision/latest?cb=20140407090624"
  },
  {
    id: 7,
    name: "Jian Yang",
    url: "https://vignette.wikia.nocookie.net/silicon-valley/images/4/49/Jian_Yang.jpg/revision/latest/scale-to-width-down/619?cb=20150620095320"
  },
  {
    id: 8,
    name: "Monica Hall",
    url: "https://vignette.wikia.nocookie.net/silicon-valley/images/6/69/Silicon-Valley-Wikia_infobox-Monica_01.jpg/revision/latest/scale-to-width-down/619?cb=20160913215924"
  },
  {
    id: 9,
    name: "Gavin Belson",
    url: "https://vignette.wikia.nocookie.net/silicon-valley/images/7/76/Silicon-Valley-Wikia_infobox-Gavin-Belson_01.jpg/revision/latest?cb=20140407103426"
  },
  {
    id: 10,
    name: "Peter Gregory",
    url: "https://vignette.wikia.nocookie.net/silicon-valley/images/b/be/Peter.jpeg/revision/latest/scale-to-width-down/619?cb=20180312013433"
  },
  {
    id: 11,
    name: "Laurie Bream",
    url: "https://vignette.wikia.nocookie.net/silicon-valley/images/d/dc/Laurie-bream.jpg/revision/latest/scale-to-width-down/619?cb=20150620085525"
  },
  {
    id: 12,
    name: "Russ Hanneman",
    url: "https://vignette.wikia.nocookie.net/silicon-valley/images/7/7d/Russ_Hanneman.jpg/revision/latest/scale-to-width-down/619?cb=20160903214702"
  },
];

function App() {
  const shuffle = () => {
    // Shuffle logic goes here
  };
  const imageClick = () => {
    // Image click logic goes here
  };
  const gameOver = () => {
    // Game over logic goes here
  };
  return (
    <div className="App">
      <Hero />
      <Grid images={images}/>
    </div>

  );
}

export default App;
