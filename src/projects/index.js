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


export const ProjectList = props => (
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

const ProjectTitle = translate(({ record, translate }) => (
  <span>
    {translate('resources.Project.name', { smart_count: 1 })} {
      record.name
    }
    </span>
));

export const ProjectEdit = props => (
  <Edit title={<ProjectTitle />} {...props}>
    <SimpleForm>
      <DisabledInput label="Id" source="id" />
      <TextInput source="name" />
      <TextInput source="desc" />
      <ReferenceManyField
        reference="Report"
        target="project._id"
        label="resources.project.fields.reports"
        perPage={5}
      >
        <Datagrid>
          <TextField label="name" source="name" />
          <TextField label="key" source="key" />
        </Datagrid>
      </ReferenceManyField>
    </SimpleForm>
  </Edit>
);


const stylesCreate = {
  name: { width: '5em' },
};


export const ProjectCreate = withStyles(stylesCreate)(
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

export const ProjectShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField label="name" source="name" />
      <TextField label="desc" source="desc" />
      <DateField label="createAt" source="createAt" />
      <DateField label="updateAt" source="updateAt" />
    </SimpleShowLayout>
  </Show>
);