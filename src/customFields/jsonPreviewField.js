import React from 'react';

import ReactJson from 'react-json-view'

const JsonViewField = ({ source, record = {} }) => (
  <div style={{ padding: '12px 25px' }} > 
    <ReactJson src={record[source]} /> 
  </div>);

export default JsonViewField;