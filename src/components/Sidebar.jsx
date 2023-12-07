import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons"
import { List, ListIcon, ListItem } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

export default function Sidebar() {
	return (
		<List
			color="white"
			fontSize="1.2em"
			gap="30px"
			display="flex"
			flexDirection={{ lg: "column" }}
		>
			<ListItem>
				<ListIcon as={CalendarIcon} color="white" />
				<NavLink to="/">Dashboard</NavLink>
			</ListItem>
			<ListItem>
				<ListIcon as={EditIcon} color="white" />
				<NavLink to="/create">New task</NavLink>
			</ListItem>
			<ListItem>
				<ListIcon as={AtSignIcon} color="white" />
				<NavLink to="/profile">Profile</NavLink>
			</ListItem>
		</List>
	)
}
