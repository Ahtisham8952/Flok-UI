import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import LoginStepOne from "./LoginStepOne";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import LoginStepTwo from "./LoginStepTwo";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { LOGIN_QUERY } from "../../../graphQL/queries";

const LoginPageMain = () => {
	const [step1, setstep1] = useState(false);

	const email = "abubakarakram168@gmail.com"; // stattic credentials just for to test appollo configuration
	const password = "abc123456";

	const { loading, error, data } = useQuery(LOGIN_QUERY, {
		variables: {
			loginInput: {
				email: "abubakarakram168@gmail.com",
				password: "abc123456",
			},
		},
	});
	console.log("the data", data);

	const PageHandler = () => {
		setstep1(!step1);
	};
	return (
		<Box>
			<Box display={step1 ? "none" : "block"}>
				{/* <LoginPage nextPage={PageHandler}/> */}
				<LoginStepOne nextPage={PageHandler} />
			</Box>
			<Box display={step1 ? "block" : "none"}>
				<LoginStepTwo />
			</Box>
		</Box>
	);
};

export default LoginPageMain;
