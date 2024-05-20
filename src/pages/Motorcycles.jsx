import { Box, Heading, Text, Image, SimpleGrid } from "@chakra-ui/react";

const Motorcycles = () => (
  <Box p={4}>
    <Heading mb={4}>Motorcycles</Heading>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Box>
        <Image src="/images/motorcycle1.jpg" alt="Motorcycle 1" />
        <Text mt={2}>Motorcycle Model 1 - $10,000</Text>
      </Box>
      <Box>
        <Image src="/images/motorcycle2.jpg" alt="Motorcycle 2" />
        <Text mt={2}>Motorcycle Model 2 - $15,000</Text>
      </Box>
    </SimpleGrid>
  </Box>
);

export default Motorcycles;