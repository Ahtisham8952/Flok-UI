import {
	Box,
	Flex,
	Text,
	Textarea,
	Checkbox,
	Button,
	input,
	CheckboxGroup,
} from "@chakra-ui/react";
import React, { forwardRef, useState } from "react";
import { Input } from "@chakra-ui/react";
import { Upload } from "../../../core/OrganizationLogin/Upload";
import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/router";

const CATEGORIES_QUERY = gql`
	query Categories {
		categories {
			id
			createdAt
			updatedAt
			nameEN
			nameFR
			nameDE
			nameIT
		}
	}
`;

const CREATE_EVENT_MUTATION = gql`
	mutation CreateEvent($createEventInput: CreateEventInput!) {
		createEvent(createEventInput: $createEventInput) {
			id
		}
	}
`;

const MY_PROVIDER_QUERY = gql`
	query FindMyProvider {
		findMyProvider {
			id
		}
	}
`;

const OptionCheckBoxes = [
	{
		text: "Is a Recurring event",
		checked: true,
	},
	{
		text: "Boys Only",
	},
	{
		text: "Girls Only",
	},
	{
		text: "Parent participation ok",
	},
	{
		text: "Parent participation manditory",
	},
	{
		text: "Has a registration deadline / cut off point",
	},
	{
		text: "Food provided",
	},
];
const LanguagesCheckBoxes = [
	{
		text: "English",
		value: "ENGLISH",
	},
	{
		text: "French",
		value: "FRENCH",
	},
	{
		text: "German",
		value: "GERMAN",
	},
	{
		text: "Italian",
		value: "ITALIAN",
	},
];

const StatusCheckBoxes = [
	{
		text: "Draft",
		value: "DRAFT",
	},
	{
		text: "Published",
		value: "PUBLISHED",
	},
	{
		text: "Archive",
		value: "ARCHIVE",
	},
	{
		text: "Private Listing / Invite only",
		value: "PRIVATE",
	},
];

const EventPageForm = () => {
	const { data: { categories: allCategories = [] } = { categories: [] } } =
		useQuery(CATEGORIES_QUERY);
	const [createEvent] = useMutation(CREATE_EVENT_MUTATION);
	const [getMyProvider] = useLazyQuery(MY_PROVIDER_QUERY);

	const router = useRouter();

	const [categories, setCategories] = useState([]);
	const [description, setDescription] = useState("");
	const [title, setTitle] = useState("");
	const [location, setLocation] = useState("Salt Lake City, UT");
	const [latitude, setLatitude] = useState("40.7764907");
	const [longitude, setLongitude] = useState("112.0852914");
	const [date, setDate] = useState();
	const [recurringUntil, setRecurringUntil] = useState();
	const [registrationDeadline, setRegistrationDeadline] = useState();
	const [ageMinimum, setAgeMinimum] = useState("");
	const [ageMaximum, setAgeMaximum] = useState("");
	const [price, setPrice] = useState("");
	const [time, setTime] = useState("");
	const [languages, setLanguages] = useState([]);
	const [options, setOptions] = useState([]);
	const [status, setStatus] = useState("");

	const onSubmit = async () => {
		try {
			const myProvider = await getMyProvider();
			if (myProvider?.error) {
				throw new Error(myProvider.error.message);
			}

			let dates = [];
			if (date > recurringUntil) {
				dates = [date];
			} else {
				for (let i = date; i <= recurringUntil; i.setDate(i.getDate() + 1)) {
					dates.push(new Date(i));
				}
			}

			const createEventInput = {
				providerId: myProvider.data.findMyProvider.id,
				recurringDates: dates,
				eventDetails: languages.map((language) => ({
					language: language,
					description,
					title,
				})),
				categoryIds: categories.map((category) => category.value),
				registrationDeadline,
				minAge: parseInt(ageMinimum),
				maxAge: parseInt(ageMaximum),
				location,
				latitude,
				longitude,
				status,
			};

			await createEvent({ variables: { createEventInput } });
			router.push("/organizationprofile");
		} catch (err) {
			console.log(err);
		}
	};

	const CustomInput = forwardRef(({ value, onClick, onChange }, ref) => (
		<Input
			size="md"
			htmlSize="20"
			bg="white"
			width={{ base: "100%", lg: "100%" }}
			_focusVisible="none"
			onClick={onClick}
			value={value}
			onChange={onChange}
			ref={ref}
		/>
	));

	return (
		<Box>
			<Box
				maxW="995px"
				backgroundColor="#E0E0E0"
				margin="auto"
				px={{ base: "30px", md: "40px", lg: "50px" }}
				py="50px"
				my={{ base: "40px", md: "60px", lg: "120px" }}
				borderRadius="20px"
				width="100%"
			>
				<Box maxW={{ base: "100%", md: "50%" }} width="100%">
					<Flex justify="space-between" align="center">
						<Box fontSize={{ base: "13px", lg: "16px" }} fontWeight="700">
							Event banner image:
						</Box>
						<Box fontSize={{ base: "13px", lg: "16px" }} fontWeight="700">
							Upload Image:
						</Box>
						<Box>
							<Upload
								FileInput={(e) => {
									console.log(e.target.files[0]);
								}}
							/>
						</Box>
					</Flex>
					<Flex align="center" justifyContent="space-between" my="50px">
						<Text fontSize={{ base: "13px", lg: "16px" }} fontWeight="700">
							Category
						</Text>
						<Select
							placeholder="Select Categories"
							isMulti
							name="categories"
							value={categories}
							options={allCategories.map((category) => ({
								value: category.id,
								label: category.nameEN,
							}))}
							onChange={setCategories}
							className="basic-multi-select"
							classNamePrefix="select"
							styles={{
								container: (baseStyles, state) => ({
									...baseStyles,
									width: "65%",
								}),
							}}
						/>
					</Flex>
				</Box>
				<Box maxW={{ base: "100%", md: "50%" }} width="100%">
					<Flex align="center" justifyContent="space-between" my="50px">
						<Text fontSize={{ base: "13px", lg: "16px" }} fontWeight="700">
							Title
						</Text>
						<Input
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							datatype="Date"
							size="md"
							htmlSize="20"
							width="65%"
							bg="white"
							_focusVisible="none"
						/>
					</Flex>
				</Box>
				<Box>
					<Flex justify="space-between" align="center">
						<Box fontSize={{ base: "13px", lg: "16px" }} fontWeight="700">
							Description:
						</Box>
						<Box fontSize={{ base: "13px", lg: "16px" }} fontWeight="700">
							Upload Image:
						</Box>
						<Box>
							<Upload />
						</Box>
					</Flex>
					<Box>
						<Textarea
							placeholder="Description"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							bg="white"
							height="183px"
							my={{ base: "10px", sm: "10px", md: "15px", lg: "50px" }}
							_focusVisible="none"
							maxW="100%"
						/>
					</Box>
				</Box>

				<Box maxW={{ base: "100%", md: "50%" }} width="100%">
					<Flex align="center" justifyContent="space-between" my="50px">
						<Text fontSize={{ base: "13px", lg: "16px" }} fontWeight="700">
							Date
						</Text>
						<div style={{ width: "65%" }}>
							<DatePicker
								customInput={<CustomInput />}
								selected={date}
								onChange={(date) => setDate(date)}
							/>
						</div>
					</Flex>
				</Box>

				<Box maxW={{ base: "100%", md: "50%" }} width="100%">
					<Flex align="center" justifyContent="space-between" my="50px">
						<Text fontSize={{ base: "13px", lg: "16px" }} fontWeight="700">
							Time
						</Text>
						<div style={{ width: "65%" }}>
							<input
								value={time}
								type="time"
								className="custom-time-picker"
								onChange={(e) => setTime(e.target.value)}
							/>
						</div>
					</Flex>
				</Box>

				<Box maxW={{ base: "100%", md: "50%" }} width="100%">
					<Flex align="center" justifyContent="space-between" my="50px">
						<Text fontSize={{ base: "13px", lg: "16px" }} fontWeight="700">
							Price
						</Text>
						<Input
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							datatype="Date"
							size="md"
							htmlSize="20"
							width="65%"
							bg="white"
							_focusVisible="none"
						/>
					</Flex>
				</Box>

				<Box maxW={{ base: "100%", md: "50%" }} width="100%">
					<Flex align="center" justifyContent="space-between" my="50px">
						<Text fontSize={{ base: "13px", lg: "16px" }} fontWeight="700">
							Age Minimum
						</Text>
						<Input
							min={0}
							type="number"
							value={ageMinimum}
							onChange={(e) => setAgeMinimum(e.target.value)}
							datatype="Date"
							size="md"
							htmlSize="20"
							width="65%"
							bg="white"
							_focusVisible="none"
						/>
					</Flex>
				</Box>

				<Box maxW={{ base: "100%", md: "50%" }} width="100%">
					<Flex align="center" justifyContent="space-between" my="50px">
						<Text fontSize={{ base: "13px", lg: "16px" }} fontWeight="700">
							Age Maximum
						</Text>
						<Input
							max={0}
							type="number"
							value={ageMaximum}
							onChange={(e) => setAgeMaximum(e.target.value)}
							datatype="Date"
							size="md"
							htmlSize="20"
							width="65%"
							bg="white"
							_focusVisible="none"
						/>
					</Flex>
				</Box>

				<Box maxW={{ base: "100%", md: "50%" }} width="100%">
					<Flex align="center" justifyContent="space-between" my="50px">
						<Text fontSize={{ base: "13px", lg: "16px" }} fontWeight="700">
							Recurring Until
						</Text>
						<div style={{ width: "65%" }}>
							<DatePicker
								customInput={<CustomInput />}
								selected={recurringUntil}
								onChange={(date) => setRecurringUntil(date)}
							/>
						</div>
					</Flex>
				</Box>

				<Box maxW={{ base: "100%", md: "50%" }} width="100%">
					<Flex align="center" justifyContent="space-between" my="50px">
						<Text fontSize={{ base: "13px", lg: "16px" }} fontWeight="700">
							Registration Deadline
						</Text>
						<div style={{ width: "65%" }}>
							<DatePicker
								customInput={<CustomInput />}
								selected={registrationDeadline}
								onChange={(date) => setRegistrationDeadline(date)}
							/>
						</div>
					</Flex>
				</Box>

				<Box>
					<Text
						fontSize={{ base: "18px", lg: "24px" }}
						fontWeight="bold"
						mb="20px"
					>
						Options:
					</Text>

					<CheckboxGroup
						colorScheme="blue"
						value={options}
						onChange={setOptions}
					>
						{OptionCheckBoxes.map(({ text }, index) => (
							<Box key={index}>
								<Checkbox value={text} mt="20px">
									<Text>{text}</Text>
								</Checkbox>
							</Box>
						))}
					</CheckboxGroup>
				</Box>
				<Box>
					<Text
						fontSize={{ base: "18px", lg: "24px" }}
						fontWeight="bold"
						mb="20px"
						mt="50px"
					>
						Languages Supported
					</Text>

					<CheckboxGroup value={languages} onChange={setLanguages}>
						{LanguagesCheckBoxes.map(({ text, value }, index) => (
							<Box key={index}>
								<Checkbox value={value} mt="20px">
									<Text>{text}</Text>
								</Checkbox>
							</Box>
						))}
					</CheckboxGroup>
				</Box>
				<Box>
					<Text
						fontSize={{ base: "18px", lg: "24px" }}
						fontWeight="bold"
						mb="20px"
						mt="50px"
					>
						Status:
					</Text>

					{StatusCheckBoxes.map(({ text, value }, index) => (
						<Box key={index}>
							<Checkbox
								isChecked={value === status}
								value={text}
								onChange={(e) => {
									if (e.target.checked) setStatus(value);
									else setStatus("");
								}}
								mt="20px"
							>
								<Text>{text}</Text>
							</Checkbox>
						</Box>
					))}
				</Box>
				<Box>
					<Button
						display={"block"}
						wordBreak="break-all"
						w="100%"
						bg="#1F1F1F"
						colorScheme={"#1F1F1F"}
						color="#FFFFFF"
						fontSize={{ base: "8px", lg: "14px" }}
						fontWeight="400"
						lineHeight={"150%"}
						p="8px 40px"
						borderRadius={"50px"}
						border="1px solid white"
					>
						<Text>
							Save Organization details (You will be able to edit these later)
						</Text>
					</Button>
				</Box>
				<Box mt="20px">
					<Button
						w="100%"
						bg="#1F1F1F"
						colorScheme={"#1F1F1F"}
						color="#FFFFFF"
						fontSize={{ base: "11px", lg: "14px" }}
						fontWeight="400"
						lineHeight={"150%"}
						p="8px 40px"
						borderRadius={"50px"}
						border="1px solid white"
						onClick={onSubmit}
					>
						Save and duplicate for another language
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default EventPageForm;
