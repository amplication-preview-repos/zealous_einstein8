import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MarketDataList } from "./marketData/MarketDataList";
import { MarketDataCreate } from "./marketData/MarketDataCreate";
import { MarketDataEdit } from "./marketData/MarketDataEdit";
import { MarketDataShow } from "./marketData/MarketDataShow";
import { CryptoAssetList } from "./cryptoAsset/CryptoAssetList";
import { CryptoAssetCreate } from "./cryptoAsset/CryptoAssetCreate";
import { CryptoAssetEdit } from "./cryptoAsset/CryptoAssetEdit";
import { CryptoAssetShow } from "./cryptoAsset/CryptoAssetShow";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { UserPortfolioList } from "./userPortfolio/UserPortfolioList";
import { UserPortfolioCreate } from "./userPortfolio/UserPortfolioCreate";
import { UserPortfolioEdit } from "./userPortfolio/UserPortfolioEdit";
import { UserPortfolioShow } from "./userPortfolio/UserPortfolioShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CryptoService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="MarketData"
          list={MarketDataList}
          edit={MarketDataEdit}
          create={MarketDataCreate}
          show={MarketDataShow}
        />
        <Resource
          name="CryptoAsset"
          list={CryptoAssetList}
          edit={CryptoAssetEdit}
          create={CryptoAssetCreate}
          show={CryptoAssetShow}
        />
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="UserPortfolio"
          list={UserPortfolioList}
          edit={UserPortfolioEdit}
          create={UserPortfolioCreate}
          show={UserPortfolioShow}
        />
      </Admin>
    </div>
  );
};

export default App;
