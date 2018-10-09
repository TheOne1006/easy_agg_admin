import React, { Component } from 'react';
import compose from 'recompose/compose';

import blue from '@material-ui/core/colors/blue';
import { withStyles } from '@material-ui/core/styles';
import { Field } from 'redux-form';
import { translate, FieldTitle } from 'ra-core';

import AutocompleteArrayInputChip from 'ra-ui-materialui/esm/input/AutocompleteArrayInputChip';

const styles = theme => ({
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  root: {},
  suggestionsContainerOpen: {
    position: 'absolute',
    marginBottom: theme.spacing.unit * 3,
    zIndex: 2,
  },
  suggestion: {
    display: 'block',
    fontFamily: theme.typography.fontFamily,
  },
  suggestionText: { fontWeight: 300 },
  highlightedSuggestionText: { fontWeight: 500 },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  chip: {
    marginRight: theme.spacing.unit,
  },
  chipDisabled: {
    pointerEvents: 'none',
  },
  chipFocused: {
    backgroundColor: blue[300],
  },
});

const ChipInputComponent = ({ label, input }) => (
  <AutocompleteArrayInputChip  
    label={<FieldTitle label={label} />}
    onChange={(chips) => input.onChange(chips)}
    defaultValue={input.value}
  />);


class ChipInput extends Component {

  render() {
    const  { source, label } = this.props;
    return (
      <Field name={source} component={ChipInputComponent} label={label} />
    );
  }
}

export default compose(
  translate,
  withStyles(styles)
)(ChipInput);
