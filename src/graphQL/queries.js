import gql from "graphql-tag";

export const LOGIN_QUERY = gql`
	query LoginUser($loginInput: LoginUserInput!) {
		loginUser(loginUserInput: $loginInput) {
			id
			email
			name
			userType
			profileImageURL
			dateOfBirth
			accessToken
		}
	}
`;
