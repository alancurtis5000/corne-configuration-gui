import "./App.scss";
import { MainPage } from "./components/main-page/main-page.component";
import { LayerTabs } from "./components/layer-tabs/layer-tabs.component";
import { KeymapProvider } from "./providers/keymap/keymap.provider";
import { BottomActions } from "./components/bottom-actions/bottom-actions.componet";
import { Header } from "./components/header/header.component";
import { AppRouter } from "./router/app-router";
import { LayoutProvider } from "./providers/layout/layout.provider";

function App() {
  return (
    <div className="App">
      <LayoutProvider>
        <Header />
        <AppRouter />
        {/* <Header />
        <MainPage>
          <LayerTabs />
        </MainPage>
        <BottomActions /> */}
      </LayoutProvider>
    </div>
  );
}

export default App;
