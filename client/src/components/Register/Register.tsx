import React, { useState, useContext } from "react";
import { Input, Button, FormContainer } from "../UI";
import { Auth } from "aws-amplify";
//import { AppContext } from '../../Context/Context';

const Register = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [newUser, setNewUser] = useState<object>({});

	const [confirmationCode, setConfirmationCode] = useState<string>("");
	//const { register } = useContext(AppContext);

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		try {
			if (password === confirmPassword) {
				const auth = await Auth.signUp(email, password);
				setNewUser(auth);
				console.log(auth);
			} else {
				alert(`passwords doesnt match`);
			}
		} catch (e) {
			console.log("error");
		}
	};

	const handleConfirmationCode = async (event: React.FormEvent) => {
		event.preventDefault();
		try {
			console.log("confirm sign up", await Auth.confirmSignUp(email, confirmationCode));
			console.log("confirm sign in", await Auth.signIn(email, password));

			//history.push("/");
		} catch (e) {
			console.log("error");
		}
	};

	const renderForm = () => {
		return (
			<FormContainer>
				<h1>Register</h1>
				<form onSubmit={handleSubmit}>
					<Input
						onChange={e => setEmail(e.target.value)}
						placeholder="Your Email"
						value={email}
						name="email"
						type="email"
					/>
					<Input
						type="password"
						name="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						placeholder="Password"
					/>
					<Input
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={e => setConfirmPassword(e.target.value)}
						placeholder="Confirm Password"
					/>
					<Button
						fullWidth={true}
						disabled={email.length === 0 || password.length === 0 || confirmPassword.length === 0}
						uppercase={true}
						type="submit"
					>
						Register
					</Button>
				</form>
			</FormContainer>
		);
	};

	const renderConfirmPage = () => {
		return (
			<FormContainer>
				<h1>Confirmation Code</h1>
				<form onSubmit={handleConfirmationCode}>
					<Input
						onChange={e => setConfirmationCode(e.target.value)}
						placeholder="Confirmation Code"
						value={confirmationCode}
						name="confirmationCode"
						type="text"
					/>
					<Button fullWidth={true} disabled={confirmationCode.length !== 0} uppercase={true} type="submit">
						Register
					</Button>
				</form>
			</FormContainer>
		);
	};

	return <div>{Object.keys(newUser).length === 0 ? renderForm() : renderConfirmPage()}</div>;
};

export default Register;
