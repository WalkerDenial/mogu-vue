import Col from 'vant/lib/col';
import 'vant/lib/col/index.css';
import Row from 'vant/lib/row';
import 'vant/lib/row/index.css';

const components = {
    CRow: Row,
    CCol: Col,
}

const install = (app) => {
  Object.keys(components).forEach(key => {
      app.component(key, components[key])
  });
}

const Mui = {
  install
}

export default Mui