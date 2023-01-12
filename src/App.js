import './App.scss';
import axios from 'axios'
import { MainPage } from './components/main-page/main-page.component';
import { LayerTabs } from './components/layer-tabs/layer-tabs.component';
import { KeymapProvider } from './providers/keymap/keymap.provider';
import { BottomActions } from './components/bottom-actions/bottom-actions.componet';



function App() {

  const apiCall = () => {
    axios
      .get("/collections")
      .then((res) => {
        console.log(res.data)

      }).catch(err => { console.log({ err }) })
  }

  apiCall()

  return (
    <div className="App">
      <KeymapProvider>
        <MainPage>
          <LayerTabs />
          <BottomActions />
        </MainPage>
      </KeymapProvider>
    </div>
  );
}

export default App;
