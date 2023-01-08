import './App.scss';
import { MainPage } from './components/main-page/main-page.component';
import { LayerTabs } from './components/layer-tabs/layer-tabs.component';

function App() {
  return (
    <div className="App">
      <MainPage>
        <LayerTabs />
      </MainPage>
    </div>
  );
}

export default App;
