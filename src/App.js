import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import './App.css';

import chineseMessages from './i18n/zh';

import buildDataProvider from './dataProvider';
// import buildGraphQLProvider from 'ra-data-graphql-simple';
import Menu from './Menu';
import { ProjectList, ProjectEdit, ProjectCreate, ProjectShow } from './projects';
import { ReportList, ReportEdit, ReportCreate, ReportShow } from './reports';
import { StrategyTypeList, StrategyTypeEdit, StrategyTypeCreate, StrategyTypeShow } from './strategyTypes';
import { StrategyList, StrategyEdit, StrategyCreate, StrategyShow } from './strategies';
import { ReportTableConfigList, ReportTableConfigEdit, ReportTableConfigCreate, ReportTableConfigShow } from './reportTableConfigs';

const i18nProvider = locale => {
  if (locale === 'en') {
    return import('./i18n/en').then(messages => messages.default);
  }

  // Always fallback on english
  return chineseMessages;
};

class App extends Component {
  state = { dataProvider: null };

  async componentWillMount() {
    const dataProvider = await buildDataProvider();
    this.setState({ dataProvider });
  }
  // componentDidMount() {
  //   buildGraphQLProvider({ clientOptions: { uri: 'http://localhost:7001/graphql' } })
  //     .then(dataProvider => this.setState({ dataProvider }));
  // }
  render() {
    const { dataProvider } = this.state;

    if (!dataProvider) {
      return (
        <div className="loader-container">
          <div className="loader">Loading...</div>
        </div>
      );
    }

    return (
      <Admin
        title="后台管理"
        dataProvider={dataProvider}
        menu={Menu}
        locale="zh"
        i18nProvider={i18nProvider} // 语言包
      >
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
        <Resource
          name="StrategyType"
          list={StrategyTypeList}
          edit={StrategyTypeEdit}
          create={StrategyTypeCreate}
          show={StrategyTypeShow}
        />
        <Resource
          name="Strategy"
          list={StrategyList}
          edit={StrategyEdit}
          create={StrategyCreate}
          show={StrategyShow}
        />
        <Resource
          name="ReportTableConfig"
          list={ReportTableConfigList}
          edit={ReportTableConfigEdit}
          create={ReportTableConfigCreate}
          show={ReportTableConfigShow}
        />
      </Admin>
    );
  }
}

export default App;
