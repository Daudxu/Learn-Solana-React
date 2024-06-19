import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";
import * as buffer from "buffer"; //引入buffer
 
if (typeof (window).Buffer === "undefined") { // 判断当前环境是否有Buffer对象
   (window).Buffer = buffer.Buffer; // Buffer对象不存在则创建导入的buffer
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
      <App />
  </Router>
)
