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
  ReferenceManyField,
} from 'react-admin';
import Icon from '@material-ui/icons/Details';
import { withStyles } from '@material-ui/core/styles';

export const CategoryIcon = Icon;


export const ReportList = props => (
  <List {...props}>
    <Datagrid>
      <TextField label="name" source="name" style={{ padding: '0 12px 0 25px' }} />
      <TextField label="desc" source="desc" options={{ multiLine: true }} />
      <DateField label="createAt" source="createAt" />
      <DateField label="updateAt" source="updateAt" />
      <EditButton />
    </Datagrid>
  </List>
);

const ReportTitle = translate(({ record, translate }) => (
  <span>
    {translate('resources.Report.name', { smart_count: 1 })} {
      record.name
    }
  </span>
));

export const ReportEdit = props => (
  <Edit title={<ReportTitle />} {...props}>
    <SimpleForm>
      <DisabledInput label="Id" source="id" />
      <TextInput source="name" />
      <TextInput source="desc" />
    </SimpleForm>
  </Edit>
);


const stylesCreate = {
  name: { width: '5em' },
};


export const ReportCreate = withStyles(stylesCreate)(
  ({ classes, ...props }) => (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          source="name"
          options={{ fullWidth: true }}
        />
        <TextInput source="desc" options={{ fullWidth: true }} />
      </SimpleForm>
    </Create>
  )
);

export const ReportShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField label="name" source="name" />
      <TextField label="desc" source="desc" />
      <DateField label="createAt" source="createAt" />
      <DateField label="updateAt" source="updateAt" />
    </SimpleShowLayout>
  </Show>
);