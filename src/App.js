import "./App.scss";
import React from "react";
import { MainPage } from "./components/main-page/main-page.component";
import { LayerTabs } from "./components/layer-tabs/layer-tabs.component";
import { KeymapProvider } from "./providers/keymap/keymap.provider";
import { BottomActions } from "./components/bottom-actions/bottom-actions.componet";
import { Header } from "./components/header/header.component";

function App() {
  return (
    <div className="App">
      <KeymapProvider>
        <Header />
        <MainPage>{<LayerTabs />}</MainPage>
        <BottomActions />
      </KeymapProvider>
    </div>
  );
}

export default App;
