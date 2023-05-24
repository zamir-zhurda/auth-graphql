const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString
} = graphql;

const AuthService = require('../services/auth');

const UserType = require('./types/user_type');
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signup: {
            type: UserType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(parentValue, args, req) {
                const { email, password } = args;
                return AuthService.signup({ email, password, req });
            }
        },
        logout: {
            type: UserType,           
            resolve(parentValue, args, req) {
                const { user } = req;
                req.logout();
                return user;
            }
        },
        login: {
            type: UserType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(parentValue, args, req) {
                const { email, password } = args;
                return AuthService.login({ email, password, req });
            }
        }

    }
})

module.exports = mutation;