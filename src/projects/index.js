import React from 'react';
import {
  translate,
  Datagrid,
  Edit,
  EditButton,
  ShowButton,
  List,
  DisabledInput,
  DateField,
  Create,
  SimpleForm,
  TextField,
  TextInput,
  Show,
  ReferenceManyField,
  TabbedShowLayout, 
  Tab,
} from 'react-admin';
import Icon from '@material-ui/icons/Details';
import { withStyles } from '@material-ui/core/styles';

export const CategoryIcon = Icon;


export const ProjectList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" style={{ padding: '0 12px 0 25px' }} />
      <TextField source="desc" options={{ multiLine: true }} />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <ShowButton />
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
          <EditButton />
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
    <TabbedShowLayout>
      <Tab label="summary">
        <TextField label="name" source="name" />
        <TextField label="desc" source="desc" />
        <DateField label="createdAt" source="createdAt" />
        <DateField label="updatedAt" source="updatedAt" />
      </Tab>
      <Tab label="report" path="report">
        <ReferenceManyField
          reference="Report"
          target="project._id"
          label="resources.Project.fields.reports"
          perPage={5}
        >
          <Datagrid>
            <TextField label="name" source="name" />
            <TextField label="key" source="key" />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
      </Tab>
      <Tab label="Strategy" path="Strategy">
        <ReferenceManyField
          reference="Strategy"
          target="project._id"
          label="resources.Project.fields.strategies"
          perPage={5}
        >
          <Datagrid>
            <TextField label="name" source="name" />
            <TextField label="key" source="key" />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
      </Tab>
    </TabbedShowLayout>
  </Show>
);