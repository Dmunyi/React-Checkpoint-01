// App.js
import React from 'react';

import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const firstName = 'John'; // Replace with your first name or leave empty

const App = () => {
  return (
    <div>
      
            <Name />
         
          <Price />
          <Description />
          <Image />
        
      <p>Hello, {firstName? firstName : 'there!'}</p>
      {firstName && <Image />}
    </div>
  );
};

export default App;