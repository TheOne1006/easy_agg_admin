import React from 'react';
import {
  translate,
  Datagrid,
  Edit,
  EditButton,
  List,
  DisabledInput,
  DateField,
  Create,
  SimpleForm,
  TextField,
  TextInput,
  Show,
  SimpleShowLayout,
  LongTextInput,
  SelectInput,
} from 'react-admin';
import Icon from '@material-ui/icons/Details';
import { withStyles } from '@material-ui/core/styles';

import JsonEditorInput from '../customInputs/jsonEditorInput';
import ChipInput from '../customInputs/ChipInput';

export const CategoryIcon = Icon;


export const ReportTableConfigList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="desc" options={{ multiLine: true }} />
      <TextField source="yAxisName" options={{ multiLine: true }} />
      <TextField source="xAxisName" />
      <TextField source="yAxisSelectorOrderBy" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <EditButton />
    </Datagrid>
  </List>
);

const ReportTableConfigTitle = translate(({ record, translate }) => (
  <span>
    {translate('resources.ReportTableConfig.name', { smart_count: 1 })} {
      record.name
    }
  </span>
));

export const ReportTableConfigEdit = props => (
  <Edit title={<ReportTableConfigTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
      <TextInput source="yAxisName" />

      <ChipInput source="yAxisSelectorPaths" label="resources.ReportTableConfig.fields.yAxisSelectorPaths" />

      <SelectInput source="yAxisSelectorOrderBy" choices={[
        { id: 'desc', name: '倒序' },
        { id: 'asc', name: '升序' },
      ]} />
      <TextInput source="xAxisName" />

      <JsonEditorInput source="xAxisInfo" label="resources.ReportTableConfig.fields.xAxisInfo" isArray />

      <LongTextInput source="desc" options={{ fullWidth: true }} />
    </SimpleForm>
  </Edit>
);


const stylesCreate = {
  name: { width: '5em' },
};


export const ReportTableConfigCreate = withStyles(stylesCreate)(
  ({ classes, ...props }) => (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" options={{ fullWidth: true }} />
        <TextInput source="yAxisName" options={{ fullWidth: true }} />

        <ChipInput source="yAxisSelectorPaths" label="resources.ReportTableConfig.fields.yAxisSelectorPaths" />

        <SelectInput source="yAxisSelectorOrderBy" choices={[
          { id: 'desc', name: '倒序' },
          { id: 'asc', name: '升序' },
        ]} />
        <TextInput source="xAxisName" />

        <JsonEditorInput source="xAxisInfo" label="resources.ReportTableConfig.fields.xAxisInfo" isArray />

        <LongTextInput source="desc" options={{ fullWidth: true }} />
      </SimpleForm>
    </Create>
  )
);

export const ReportTableConfigShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="yAxisName" />
      <ChipInput source="yAxisSelectorPaths" label="resources.ReportTableConfig.fields.yAxisSelectorPaths" />


      <SelectInput source="yAxisSelectorOrderBy" choices={[
        { id: 'desc', name: '倒序' },
        { id: 'asc', name: '升序' },
      ]} />
      <TextField source="xAxisName" />

      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <TextField source="desc" options={{ fullWidth: true }} />
    </SimpleShowLayout>
  </Show>
);