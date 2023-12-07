import {
	ChatIcon,
	CheckCircleIcon,
	EmailIcon,
	StarIcon,
	WarningIcon,
} from "@chakra-ui/icons"
import {
	List,
	ListIcon,
	ListItem,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from "@chakra-ui/react"

export default function Profile() {
	return (
		<Tabs colorScheme="purple" mt="40px" p="20px" variant="enclosed">
			<TabList>
				<Tab _selected={{ color: "white", bg: "purple.400" }}>Account Info</Tab>
				<Tab _selected={{ color: "white", bg: "purple.400" }}>Task Log</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>
					<List spacing={4}>
						<ListItem>
							<ListIcon as={EmailIcon} />
							test1@yopmail.com
						</ListItem>
						<ListItem>
							<ListIcon as={ChatIcon} />
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</ListItem>
						<ListItem>
							<ListIcon as={StarIcon} />
							Lorem ipsum dolor sit amet consectetur.
						</ListItem>
					</List>
				</TabPanel>
				<TabPanel>
					<List spacing={4}>
						<ListItem>
							<ListIcon as={CheckCircleIcon} color="teal.400" />
							Lorem ipsum dolor sit amet consectetur.
						</ListItem>
						<ListItem>
							<ListIcon as={CheckCircleIcon} color="teal.400" />
							Lorem ipsum dolor sit amet consectetur.
						</ListItem>
						<ListItem>
							<ListIcon as={WarningIcon} color="red.400" />
							Lorem ipsum dolor sit amet consectetur.
						</ListItem>
						<ListItem>
							<ListIcon as={CheckCircleIcon} color="teal.400" />
							Lorem ipsum dolor sit amet consectetur.
						</ListItem>
						<ListItem>
							<ListIcon as={WarningIcon} color="red.400" />
							Lorem ipsum dolor sit amet consectetur.
						</ListItem>
						<ListItem>
							<ListIcon as={CheckCircleIcon} color="teal.400" />
							Lorem ipsum dolor sit amet consectetur.
						</ListItem>
					</List>
				</TabPanel>
			</TabPanels>
		</Tabs>
	)
}
