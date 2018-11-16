import buildApolloClient, { buildQuery } from 'ra-data-graphcool';

// import gql from 'graphql-tag';

export default () =>
  buildApolloClient({
    clientOptions: {
      // uri: 'https://api.graph.cool/simple/v1/cj2kl5gbc8w7a0130p3n4eg78',
      uri: 'http://localhost:7001/graphql',
      // uri: '/graphql',
    },
    buildQuery: introspectionResults => (raFetchType, resource, params) => {

      // remove exportData
      if (raFetchType === 'UPDATE' && resource === 'Report') {
        delete params.data.exportData;
      }

      const builtQuery = buildQuery(introspectionResults)(
        raFetchType,
        resource,
        params
      );

      // if (resource === 'Command') {
      //   if (raFetchType === 'GET_ONE') {
      //     return {
      //       ...builtQuery,
      //     };
      //   }
      //   if (raFetchType === 'GET_LIST') {
      //     const t = {
      //       ...builtQuery,
      //     };

      //     return t;
      //   }
      // }

      return builtQuery;
    },
  });
