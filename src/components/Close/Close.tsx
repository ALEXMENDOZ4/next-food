import React from 'react';
import * as sc from './styles';

interface Iclose {
  setIcon: (a: boolean) => void;
  icon: boolean;
}

const Close = ({icon,setIcon}: Iclose) => {

  const change = () => {
    setIcon(!icon);
  }

  console.log(icon);

  return (
    <sc.Container>
      <label className='hamburger-menu' onClick={change}>
        <input type="checkbox" />
      </label>
    </sc.Container>
  )
}

export default Close;