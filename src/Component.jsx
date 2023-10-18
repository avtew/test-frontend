import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import './Component.css';

export function Component() {

  const [icon, setIcon] = useState(null);

  const showIcon = () => {
    setTimeout(() => {
      library.add(fas);
      const icons = Object.keys(library.definitions.fas);
      setIcon(icons[Math.floor(Math.random()*icons.length)]);
    }, 3000);
  };

  return (
    <div className='container'>
      <div className='icon'>
        {!icon ? null : <FontAwesomeIcon icon={icon} size="3x" />}
      </div>
      <button className='button' onClick={() => showIcon()}>Show Icon</button>
    </div>
  );
}
