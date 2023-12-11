import { EditIcon, ViewIcon } from "@chakra-ui/icons"
import {
	Avatar,
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Divider,
	Flex,
	HStack,
	Heading,
	SimpleGrid,
	Text,
} from "@chakra-ui/react"
import { useLoaderData } from "react-router-dom"

export const tasksLoader = async () => {
	const res = await fetch("http://localhost:3000/tasks")
	const data = res.json()
	return data
}

export default function Dashboard() {
	const tasks = useLoaderData()
	return (
		<SimpleGrid spacing={10} minChildWidth="300px">
			{tasks?.map(({ id, title, description, author, img }) => (
				<Card key={id} borderTop="8px" borderColor="purple.400">
					<CardHeader>
						<Flex gap={5}>
							<Avatar src={img} />
							<Box>
								<Heading as="h3" size="sm">
									{title}
								</Heading>
								<Text>by {author}</Text>
							</Box>
						</Flex>
					</CardHeader>
					<CardBody color="gray.500">
						<Text>{description}</Text>
					</CardBody>
					<Divider borderColor="gray.300" />
					<CardFooter>
						<HStack>
							<Button variant="ghost" leftIcon={<ViewIcon />}>
								Watch
							</Button>
							<Button variant="ghost" leftIcon={<EditIcon />}>
								Comment
							</Button>
						</HStack>
					</CardFooter>
				</Card>
			))}
		</SimpleGrid>
	)
}
