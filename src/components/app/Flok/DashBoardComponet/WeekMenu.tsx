import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
const WeekMenu = () => {
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<ChevronDownIcon color="black" />}>
        This Week
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default WeekMenu;
