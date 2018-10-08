import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import SettingsIcon from '@material-ui/icons/Settings';
import LabelIcon from '@material-ui/icons/Label';
import {
  translate,
  DashboardMenuItem,
  MenuItemLink,
  Responsive,
} from 'react-admin';
import { withRouter } from 'react-router-dom';

const items = [
  { name: 'Project', icon: <LabelIcon /> },
  { name: 'StrategyType', icon: <LabelIcon /> },
  { name: 'Strategy', icon: <LabelIcon /> },
];

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%',
  },
};

const Menu = ({ onMenuClick, translate, logout }) => (
  <div style={styles.main}>
    <DashboardMenuItem onClick={onMenuClick} />
    {items.map(item => (
      <MenuItemLink
        key={item.name}
        to={`/${item.name}`}
        primaryText={translate(`resources.${item.name}.name`, {
          smart_count: 2,
        })}
        leftIcon={item.icon}
        onClick={onMenuClick}
      />
    ))}
    <Responsive
      xsmall={
        <MenuItemLink
          to="/configuration"
          primaryText={translate('pos.configuration')}
          leftIcon={<SettingsIcon />}
          onClick={onMenuClick}
        />
      }
      medium={null}
    />
    <Responsive xsmall={logout} medium={null} />{' '}
  </div>
);

const enhance = compose(
  withRouter,
  connect(
    state => ({
      theme: state.theme,
      locale: state.i18n.locale,
    }),
    {}
  ),
  translate
);

export default enhance(Menu);
