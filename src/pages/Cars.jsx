import { Box, Heading, Text, Image, SimpleGrid } from "@chakra-ui/react";

const Cars = () => (
  <Box p={4}>
    <Heading mb={4}>Cars</Heading>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Box>
        <Image src="/images/car1.jpg" alt="Car 1" />
        <Text mt={2}>Car Model 1 - $20,000</Text>
      </Box>
      <Box>
        <Image src="/images/car2.jpg" alt="Car 2" />
        <Text mt={2}>Car Model 2 - $25,000</Text>
      </Box>
    </SimpleGrid>
  </Box>
);

export default Cars;