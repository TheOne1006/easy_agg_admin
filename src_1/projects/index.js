import React from 'react';
import {
  translate,
  Datagrid,
  Edit,
  EditButton,
  List,
  NumberField,
  ReferenceManyField,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin';
import Icon from '@material-ui/icons/Details';

export const CategoryIcon = Icon;

export const ProjectList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" style={{ padding: '0 12px 0 25px' }} />
      <EditButton />
    </Datagrid>
  </List>
);

const ProjectTitle = translate(({ record, translate }) => (
  <span>
    {translate('resources.Project.name', { smart_count: 1 })} "{
      record.name
    }"
    </span>
));

export const ProjectEdit = props => (
  <Edit title={<ProjectTitle />} {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <ReferenceManyField
        reference="Project"
        target="category.id"
        label="resources.Category.fields.products"
        perPage={5}
      >
        <Datagrid>
          <NumberField
            source="price"
            options={{ style: 'currency', currency: 'USD' }}
          />
          <NumberField
            source="width"
            options={{ minimumFractionDigits: 2 }}
          />
          <NumberField
            source="height"
            options={{ minimumFractionDigits: 2 }}
          />
          <NumberField source="stock" />
          <EditButton />
        </Datagrid>
      </ReferenceManyField>
    </SimpleForm>
  </Edit>
);
