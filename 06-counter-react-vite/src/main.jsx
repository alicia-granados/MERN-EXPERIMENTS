import React from 'react'
import { render } from 'react-dom';

const saludo = <h1>Hola mundo</h1>;
const divRoot = document.querySelector('#root');
render ( saludo , divRoot);