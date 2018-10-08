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
  ReferenceInput,
  ReferenceField,
  AutocompleteInput,
  Filter,
  TabbedShowLayout,
  Tab,
  ReferenceArrayInput, 
  SelectArrayInput,
} from 'react-admin';
import Icon from '@material-ui/icons/Details';
import { withStyles } from '@material-ui/core/styles';

import JsonViewField from '../customFields/jsonPreviewField';

// import ProjectReferenceField from '../referenceFields/projectField';

export const CategoryIcon = Icon;


const filterStyles = {
  status: { width: 150 },
};

export const ReportFilter = withStyles(filterStyles)(
  ({ classes, ...props }) => (
    <Filter {...props}>
      <ReferenceInput source="projectId" reference="Project" alwaysOn>
        <AutocompleteInput
          optionText={project =>
            `${project.name}`
          }
        />
      </ReferenceInput>
    </Filter>
  )
);

export const ReportList = props => (
  <List 
    {...props}
    filters={<ReportFilter />}
  >
    <Datagrid>
      <TextField source="name" style={{ padding: '0 12px 0 25px' }} />
      <TextField source="desc" options={{ multiLine: true }} />
      <ReferenceField label="resources.Report.fields.belongProject" source="projectId" reference="Project" >
        <TextField source="name" />
      </ReferenceField>
      <DateField source="createAt" />
      <DateField source="updateAt" />
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

// 过滤策略数据 (根据所属的项目)
const FilterStrategiesReferenceArrayInput = props => {
  const record = props.record;

  return (
    <ReferenceArrayInput
      source="includeStrategies"
      reference="Strategy"
      {...props}
      filter={{ projectId: record.projectId }}
      options={{ fullWidth: true }}
    >
      <SelectArrayInput optionText="name" />
    </ReferenceArrayInput>
  );
}

export const ReportEdit = props => (
  <Edit title={<ReportTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />

      <ReferenceField label="resources.Report.fields.belongProject" source="projectId" reference="Project" >
        <TextField source="name" />
      </ReferenceField>

      <TextInput source="name" />
      <TextInput source="key" />
      <TextInput source="desc" />

      <FilterStrategiesReferenceArrayInput />

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

        <ReferenceArrayInput source="includeStrategies" reference="Strategy">
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  )
);

export const ReportShow = (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="self">
        <TextField label="name" source="name" />
        <TextField label="desc" source="desc" />
        <DateField label="createAt" source="createAt" />
        <DateField label="updateAt" source="updateAt" />
      </Tab>
      <Tab label="exportData" path="exportData">
        <JsonViewField source="exportData" />
      </Tab>
    </TabbedShowLayout>
  </Show>
);