import React from 'react';

function Default() {
    const [value, setValue] = React.useState('');

    return (
      <div>
        <p>Вы ввели {value} </p>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
      </div>
    );
};

export default Default;