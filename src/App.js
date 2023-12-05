import { useState } from "react";
import QRCode from 'react-qr-code';
import styles from './css/app.module.css';
import './css/norma.css'

function App() {
  
  const [value, setValue] = useState('Code me')
  const [back, setBack] = useState('#FFFFFF')
  const [front, setFront] = useState('#000000')

  return (
    <div className={styles.App}>
      <h1>
        QRCode Coder
      </h1>
      <ul className={styles.inputList}>
        <li className={styles.inputValue}>
          <p>Value:</p>
          <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          />
        </li>
        <li className={styles.inputBack}>
          <p>Background color:</p>
          <input
          type="color"
          onChange={(e) => setBack(e.target.value)}
          />
        </li>
        <li className={styles.inputFront}>
          <p>Code color:</p>
          <input
          type="color"
          onChange={(e) => setFront(e.target.value)}
          />
        </li>
      </ul>
      <center>
        {value && (
          <QRCode
          value={value}
          bgColor={back}
          fgColor={front}
          size={350}
          />
        )}
      </center>
    </div>
  );
}

export default App;
