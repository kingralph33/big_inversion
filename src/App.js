import React from 'react';
import './App.scss';

import PersonCard from './components/PersonCard';
import styles from './components/PersonCard.module.scss';


function App() {
  return (
    <>
      <div className={styles.personStyle}>
        <PersonCard firstName={'Homer'} lastName={'Simpson'} age={45} hairColor={'Black'} />
        <PersonCard firstName={'Marge'} lastName={'Simpson'} age={42} hairColor={'Blue'} />
        <PersonCard firstName={'Bart'} lastName={'Simpson'} age={13} hairColor={'Yello'} />
        <PersonCard firstName={'Lisa'} lastName={'Simpson'} age={10} hairColor={'Yellow'} />
        <PersonCard firstName={'Maggie'} lastName={'Simpson'} age={2} hairColor={'Yellow'} />
      </div>
    </>
  );
}

export default App;
