
import App from '../components/App.html'

let app = new App({
  target: document.getElementById('root'),
  data: { name: 'world' }
})

window.app = app
