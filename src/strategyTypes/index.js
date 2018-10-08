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
} from 'react-admin';
import Icon from '@material-ui/icons/Details';
import { withStyles } from '@material-ui/core/styles';

export const CategoryIcon = Icon;


export const StrategyTypeList = props => (
    <List {...props}>
        <Datagrid>
            <TextField label="name" source="name" style={{ padding: '0 12px 0 25px' }} />
            <TextField label="key" source="key" />
            <TextField label="desc" source="desc" options={{ multiLine: true }} />
            <DateField label="createAt" source="createAt" />
            <DateField label="updateAt" source="updateAt" />
            <EditButton />
        </Datagrid>
    </List>
);

const StrategyTypeTitle = translate(({ record, translate }) => (
    <span>
        {translate('resources.StrategyType.name', { smart_count: 1 })} {
            record.name
        }
    </span>
));

export const StrategyTypeEdit = props => (
    <Edit title={<StrategyTypeTitle />} {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput source="key" />
            <TextInput source="name" />
            <LongTextInput source="desc" />
        </SimpleForm>
    </Edit>
);


const stylesCreate = {
    name: { width: '5em' },
};


export const StrategyTypeCreate = withStyles(stylesCreate)(
    ({ classes, ...props }) => (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="key" />
                <TextInput
                    source="name"
                    options={{ fullWidth: true }}
                />
                <LongTextInput source="desc" options={{ fullWidth: true }} />
            </SimpleForm>
        </Create>
    )
);

export const StrategyTypeShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField label="name" source="name" />
            <TextField label="desc" source="desc" />
            <DateField label="createAt" source="createAt" />
            <DateField label="updateAt" source="updateAt" />
        </SimpleShowLayout>
    </Show>
);