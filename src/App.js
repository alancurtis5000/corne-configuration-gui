import './App.scss';
import { MainPage } from './components/main-page/main-page.component';
import { LayerTabs } from './components/layer-tabs/layer-tabs.component';
import { KeymapProvider } from './providers/keymap/keymap.provider';



function App() {
  return (
    <div className="App">
      <KeymapProvider>
        <MainPage>
          <LayerTabs />
        </MainPage>
      </KeymapProvider>
    </div>
  );
}

export default App;
