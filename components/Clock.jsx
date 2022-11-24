import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import style from '../styles/Clock.module.css'

export default function clock() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={style.clock}>
      <Clock value={value} className={style.clock} renderNumbers={true}/>
    </div>
  );
}
