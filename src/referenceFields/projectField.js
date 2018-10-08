import React from 'react';

import { 
  ReferenceField,
  TextField,
} from 'react-admin';

const ProjectReferenceField = props => (
  <ReferenceField source="project.id" reference="Project" {...props} >
    <TextField source="name" />
  </ReferenceField>
);

export default ProjectReferenceField;
