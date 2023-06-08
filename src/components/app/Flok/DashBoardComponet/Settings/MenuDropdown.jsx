import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Box,
    Text,
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
const MenuDropdown = () => {
  return (
   <Box>
     <Text
            
            color="#191919"
            fontSize="14px"
            fontWeight="600"
            lineHeight={"150%"}
            mb='8px'
          >
       Country
          </Text>
    <Menu>

  <MenuButton border="1px solid #E7E7E7" py='17px' px='20px'  rightIcon={<ChevronDownIcon />}>
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>

   </Box>
  )
}

export default MenuDropdown