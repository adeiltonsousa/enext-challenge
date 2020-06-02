import React from 'react';

import "antd/dist/antd.css";
import './App.css';

import ColorProvider from './context/Color';
import BreedProvider from './context/Breed';

import SelectFont from './components/SelectFont';
import SelectColor from './components/SelectColor';
import PhotoDisplay from './components/PhotoDisplay';


function App() {

  return (
    <ColorProvider>
      <BreedProvider>
        <div className="container">
          <span className="content">
            <div className="display__photos">
              <PhotoDisplay />
            </div>
            <div className="display__menus">
              <span className="display__menus--color">
                <SelectColor />
              </span>
              <span className="display__menus--font">
                <SelectFont />
              </span>
            </div>
          </span>
        </div>
      </BreedProvider>
    </ColorProvider>
  );
}

export default App;


