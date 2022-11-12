import { 
    Menu,
      MenuButton,
      useColorModeValue,
      Box
  } from '@chakra-ui/react';
  import { Link} from "react-router-dom";

const Contact = () => {
    
  return (
    <Box>
        <Menu>
      <MenuButton
        variant="ghost"
        mx={1}
        py={[1, 2, 2]}
        px={4}
        borderRadius={5}
        _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
        aria-label="Courses"
        fontWeight="normal"
      >
        <Link to="#">Contact Sales </Link>
      </MenuButton>
      </Menu>
        </Box>
  )
}

export default Contact
