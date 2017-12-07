import React from 'react';
import ReactDOM from 'react-dom';
//引入公共样式
import './assets/css/common.css';
//引入当前index样式
import './index.css';
//嵌入detail
import Detail from './Detail';

ReactDOM.render(
	<Detail />,
	document.getElementById('root'));