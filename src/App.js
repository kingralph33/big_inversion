import React from 'react';
import './App.scss';

import PersonCard from './components/PersonCard';
import styles from './components/PersonCard.module.scss';


function App() {
  return (
    <>
      <div className={styles.personStyle}>
        <PersonCard firstName={'Jane'} lastName={'Doe'} age={45} hairColor={'Black'} />
        <PersonCard firstName={'John'} lastName={'Smith'} age={88} hairColor={'Brown'} />
        <PersonCard firstName={'Millard'} lastName={'Fillmore'} age={50} hairColor={'Brown'} />
        <PersonCard firstName={'Maria'} lastName={'Smith'} age={62} hairColor={'Brown'} />
      </div>
    </>
  );
}

export default App;
