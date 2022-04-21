import { Layout, Header, Footer, Aside, Main } from './layout';
import Col from 'vant/lib/col';
import 'vant/lib/col/index.css';
import Row from 'vant/lib/row';
import 'vant/lib/row/index.css';

const components = {
    Layout,
    Header,
    Footer,
    Aside,
    Main,
    CRow: Row,
    CCol: Col,
}

const install = (app) => {
  Object.keys(components).forEach(key => {
    if (key === 'CRow' || key === 'CCol') {
      app.component(key, components[key]);
    } else {
      app.component(components[key]['name'], components[key]);
    }
  });
}

const Mui = {
  install
}

export default Mui
