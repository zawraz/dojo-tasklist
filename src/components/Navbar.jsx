import {
	Box,
	Button,
	Flex,
	HStack,
	Heading,
	Spacer,
	Text,
} from "@chakra-ui/react"

export default function Navbar() {
	return (
		<Flex as="nav" p="10px" mb="40px" align="center">
			<Heading as="h1">Dojo Tasklist</Heading>
			<Spacer />
			<HStack spacing="20px">
				<Box bg="gray.200" p="10px">
					M
				</Box>
				<Text>test1@yopmail.com</Text>
				<Button colorScheme="purple">Log out</Button>
			</HStack>
		</Flex>
	)
}
