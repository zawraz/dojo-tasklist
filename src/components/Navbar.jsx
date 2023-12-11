import { UnlockIcon } from "@chakra-ui/icons"
import {
	Box,
	Button,
	Flex,
	HStack,
	Heading,
	Spacer,
	Text,
	useToast,
} from "@chakra-ui/react"

export default function Navbar() {
	const toast = useToast()

	const showToast = () => {
		toast({
			title: "Logged out",
			description: "Successfully logged out",
			duration: 2500,
			isClosable: true,
			status: "success",
			position: "top",
			icon: <UnlockIcon />,
		})
	}

	return (
		<Flex as="nav" p="10px" mb="40px" align="center">
			<Heading as="h1">Dojo Tasklist</Heading>
			<Spacer />
			<HStack spacing="20px">
				<Box bg="gray.200" p="10px">
					M
				</Box>
				<Text>test1@yopmail.com</Text>
				<Button colorScheme="purple" onClick={showToast}>
					Log out
				</Button>
			</HStack>
		</Flex>
	)
}
