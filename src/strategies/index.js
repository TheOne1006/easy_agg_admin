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
    ReferenceInput,
    ReferenceField,
    SelectInput,
    ArrayInput,
} from 'react-admin';
import Icon from '@material-ui/icons/Details';
import { withStyles } from '@material-ui/core/styles';

import JsonEditorInput from '../customInputs/jsonEditorInput';

export const CategoryIcon = Icon;


export const StrategyList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="key" />
            <TextField source="desc" options={{ multiLine: true }} />
            <DateField source="createAt" />
            <DateField source="updateAt" />
            <EditButton />
        </Datagrid>
    </List>
);

const StrategyTitle = translate(({ record, translate }) => (
    <span>
        {translate('resources.Strategy.name', { smart_count: 1 })} {
            record.name
        }
    </span>
));

export const StrategyEdit = props => (
    <Edit title={<StrategyTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <DisabledInput source="key" />

            <TextInput source="scope" />

            <ReferenceField source="typeId" reference="StrategyType">
                <TextField source="name"/>
            </ReferenceField>

            <ReferenceField source="projectId" reference="Project">
                <TextField source="name" />
            </ReferenceField>
            <JsonEditorInput source="matchFields" label="resources.Strategy.fields.matchFields" />

            <TextInput source="uniqueField" />
            <SelectInput source="intervalType" choices={[
                { id: 'day', name: '天' },
                { id: 'hour', name: '小时' },
            ]} />
            <TextInput source="incField" />
            <TextInput source="groupFields" />
            <TextInput source="sumField" />

            <LongTextInput source="desc" options={{ fullWidth: true }} />
        </SimpleForm>
    </Edit>
);


const stylesCreate = {
    name: { width: '5em' },
};


export const StrategyCreate = withStyles(stylesCreate)(
    ({ classes, ...props }) => (
        <Create {...props}>
            <SimpleForm>
                <TextInput
                    source="name"
                    options={{ fullWidth: true }}
                />
                <TextInput source="key" />
                <TextInput source="scope" />

                <ReferenceInput source="typeId" reference="StrategyType">
                    <SelectInput optionText="name" />
                </ReferenceInput>

                <ReferenceInput source="projectId" reference="Project">
                    <SelectInput optionText="name" />
                </ReferenceInput>

                <JsonEditorInput source="matchFields" label="resources.Strategy.fields.matchFields" />

                <TextInput source="uniqueField" />
                <SelectInput source="intervalType" choices={[
                    { id: 'day', name: '天' },
                    { id: 'hour', name: '小时' },
                ]} />
                <TextInput source="incField" />
                
                <JsonEditorInput source="groupFields" label="resources.Strategy.fields.groupFields" isArray />

                <TextInput source="sumField" />
                <LongTextInput source="desc" options={{ fullWidth: true }} />
            </SimpleForm>
        </Create>
    )
);

export const StrategyShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="desc" />
            <DateField source="createAt" />
            <DateField source="updateAt" />
        </SimpleShowLayout>
    </Show>
);