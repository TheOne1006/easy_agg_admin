import React, { Component } from 'react';

import compose from 'recompose/compose';
import { translate } from 'react-admin';
import { Field } from 'redux-form';
import ReactJson from 'react-json-view'

// const JsonEditorInput = ({ source, record = {} }) => (
//   <div style={{ padding: '15px 0px' }} >
//     <Field name={source} component="hidden" type="object" onEdit />
//     <ReactJson 
//       src={record[source]} 
//       onEdit={true}
//     />
//   </div>);


const ReactJSONEdit = ({ input, isArray }) => (
  <ReactJson
    src={input.value || (isArray ? [] : {})}
    onEdit={(e) => {
      // this.setState({ src: e.updated_src })
      input.onChange(e.updated_src);
    }}
    onAdd={(e) => {
      // this.setState({ src: e.updated_src })
      input.onChange(e.updated_src);
    }}
    onDelete={(e) => {
      // this.setState({ src: e.updated_src })
      input.onChange(e.updated_src);
    }}
  />
)


class JsonEditorInput extends Component {

  render() {
    const { label, source, translate, isArray } = this.props;

    return (
      <div style={{ padding: '15px 0px' }} >
        <label>
          {translate(label)}:
        </label>
        <Field name={source} component={ReactJSONEdit} isArray={isArray} />
      </div>
    );
  }
}


const enhance = compose(
  translate
);

export default enhance(JsonEditorInput);