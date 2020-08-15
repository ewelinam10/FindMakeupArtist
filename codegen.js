module.exports = {
    schema: [
        {
            'http://localhost:8080/v1/graphql': {
                headers: {
                    'content-type': 'application/json',
                    'x-hasura-admin-secret': '4H7ZEVPrauU5olGW_Wwv6tz6rB4pfdLNINVasHCbtOgiSG2dLWz-Z2wLCOkhqVEd',
                    'x-hasura-role' : 'user'
                },
            },
        },
    ],
    documents: ['./src/**/*.tsx', './src/**/*.ts'],
    overwrite: true,
    generates: {
        './src/generated/graphql.tsx': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
            ],
            config: {
                skipTypename: false,
                withHooks: true,
                withHOC: false,
                withComponent: false,
            },
        },
        './graphql.schema.json': {
            plugins: ['introspection'],
        },
    },
};