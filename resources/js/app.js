import React from 'react';
import ReactDOM from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import 'material-icons/iconfont/material-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'sweetalert2/dist/sweetalert2.min.css';
import 'sweetalert2/dist/sweetalert2.min.js';
InertiaProgress.init()

createInertiaApp({
  title:(title)=>title,
  resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    ReactDOM.render(<App {...props} />, el)
  },
})
