import { Box, Heading, Text, Image, SimpleGrid } from "@chakra-ui/react";

const Printers = () => (
  <Box p={4} bgImage="url('/images/newspaper-bg.jpg')" bgSize="cover">
    <Heading mb={4}>Printers</Heading>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Box>
        <Image src="/images/printer1.jpg" alt="Printer 1" />
        <Text mt={2}>Printer Model 1 - $200</Text>
      </Box>
      <Box>
        <Image src="/images/printer2.jpg" alt="Printer 2" />
        <Text mt={2}>Printer Model 2 - $250</Text>
      </Box>
    </SimpleGrid>
  </Box>
);

export default Printers;