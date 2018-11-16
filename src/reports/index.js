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
  NumberInput,
  Show,
  ReferenceInput,
  ReferenceField,
  AutocompleteInput,
  Filter,
  TabbedShowLayout,
  Tab,
  SelectInput,
  ReferenceArrayInput, 
  SelectArrayInput,
  NumberField,
} from 'react-admin';
import Icon from '@material-ui/icons/Details';
import { withStyles } from '@material-ui/core/styles';

import JsonEditorInput from '../customInputs/jsonEditorInput';
import JsonViewField from '../customFields/jsonPreviewField';
import ExportDataTable from './exportDataTable';

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
      <ReferenceField source="projectId" reference="Project" >
        <TextField source="name" />
      </ReferenceField>
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
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
  
  const optionRenderer = choice => {
    const index = record.includeStrategies.findIndex((item) => item === choice.id);
    return `${index + 1}. ${choice.name}`;
  }
  return (
    <ReferenceArrayInput
      source="includeStrategies"
      reference="Strategy"
      {...props}
      filter={{ projectId: record.projectId }}
      options={{ fullWidth: true }}
      sort={{ field: 'id', order: 'ASC' }}
    >
      <SelectArrayInput optionText={optionRenderer} />
    </ReferenceArrayInput>
  );
}

export const ReportEdit = props => (
  <Edit title={<ReportTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <DisabledInput source="key" />

      <ReferenceField label="resources.Report.fields.projectId" source="projectId" reference="Project" >
        <TextField source="name" />
      </ReferenceField>

      <TextInput source="name" />
      <TextInput source="desc" />

      <JsonEditorInput source="dataMappers" label="resources.Report.fields.dataMappers" isArray />


      <FilterStrategiesReferenceArrayInput />

      <NumberInput source="scopeDay" />
      <NumberInput source="scopeHour" />

      <SelectInput source="intervalType" choices={[
        { id: 'day', name: '天' },
        { id: 'hour', name: '小时' },
      ]} />
      

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
        <TextInput source="key" />
        <TextInput source="desc" options={{ fullWidth: true }} />

        <ReferenceInput source="projectId" reference="Project">
          <SelectInput optionText="name" />
        </ReferenceInput>

        <JsonEditorInput source="dataMappers" label="resources.Report.fields.dataMappers" isArray />

        <FilterStrategiesReferenceArrayInput />

        <NumberInput source="scopeDay" />
        <NumberInput source="scopeHour" />

        <SelectInput source="intervalType" choices={[
          { id: 'day', name: '天' },
          { id: 'hour', name: '小时' },
        ]} />


      </SimpleForm>
    </Create>
  )
);

export const ReportShow = (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="resources.Report.self">
        <TextField source="name" />
        <TextField source="desc" />
        <TextField source="key" />
        <NumberField source="scopeDay" />
        <NumberField source="scopeHour" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
      </Tab>
      <Tab label="resources.Report.exportData" path="exportData">
        <JsonViewField source="exportData" />
      </Tab>
      <Tab label="resources.Report.exportDataTable" path="exportTable">
        <ExportDataTable source="exportTable" />
      </Tab>
    </TabbedShowLayout>
  </Show>
);