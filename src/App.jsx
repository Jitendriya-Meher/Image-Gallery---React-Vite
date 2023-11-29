
import { useState } from 'react';
import './App.css'
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from 'yet-another-react-lightbox/plugins';

import { slides } from './data';
import Images from './componensts/Images';

function App() {

  const [index, setIndex] = useState(-1);

  return (
  <div className='body'>

  <div className="me">
    Created By Jitendriya Meher
  </div>

    <div className="gal">
      Image Gallery
    </div>

    <Images data={slides} setIndex={setIndex}></Images>

      <Lightbox
      open={ index > -1}
      slides={slides}
      index={index}
      close={() => {
        setIndex(-1);
      }}
      plugins={[Captions,Download,Fullscreen,Zoom,Thumbnails]}
      captions={{
          showToggle: true,
          descriptionTextAlign: 'end',
      }}
      ></Lightbox>
    
  </div>
  )
}

export default App
