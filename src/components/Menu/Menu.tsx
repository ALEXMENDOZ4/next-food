import Close from '@/components/Close/Close';
import React, { useState } from 'react';
import * as sc from './styles';
import { IoFastFood } from "react-icons/io5";

const Menu = () => {

  const [icon, setIcon] = useState(false);

  return (
    <sc.ContainerMenu>
      <div>
        <IoFastFood/>
      </div>
      <div className='sidebar'>
        <ul>
          <li>Acerca</li>
          <li>Servicio</li>
          <li>Nosotros</li>
          <li>Ayuda</li>
          {icon.toString()}
          <Close icon={icon} setIcon={setIcon}/>
        </ul>
      </div>
    </sc.ContainerMenu>
  )
}

export default Menu;