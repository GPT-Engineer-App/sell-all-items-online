import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="teal.500" p={4}>
    <Flex justify="space-around">
      <Link as={NavLink} to="/" color="white" _hover={{ textDecoration: "none" }}>
        Home
      </Link>
      <Link as={NavLink} to="/cars" color="white" _hover={{ textDecoration: "none" }}>
        Cars
      </Link>
      <Link as={NavLink} to="/motorcycles" color="white" _hover={{ textDecoration: "none" }}>
        Motorcycles
      </Link>
      <Link as={NavLink} to="/printers" color="white" _hover={{ textDecoration: "none" }}>
        Printers
      </Link>
    </Flex>
  </Box>
);

export default Navbar;