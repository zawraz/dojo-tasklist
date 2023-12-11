import { UnlockIcon } from "@chakra-ui/icons"
import {
	Avatar,
	AvatarBadge,
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
				<Avatar name="mario" src="/img/luigi.png">
					<AvatarBadge width="1.3em" bg="purple.500">
						<Text fontSize="xs" color="white">
							3
						</Text>
					</AvatarBadge>
				</Avatar>
				<Text>test1@yopmail.com</Text>
				<Button colorScheme="purple" onClick={showToast}>
					Log out
				</Button>
			</HStack>
		</Flex>
	)
}
