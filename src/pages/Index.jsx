import { Box, Button, Container, Flex, Heading, Image, Input, Stack, Text, VStack, SimpleGrid, useColorModeValue, FormControl, FormLabel, Textarea, IconButton, AspectRatio } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="section" pt={10} pb={6}>
        <VStack spacing={4} as="header" textAlign="center">
          <Heading size="2xl">Finished Automobiles Logistics</Heading>
          <Text fontSize="lg" color={useColorModeValue("gray.600", "gray.400")}>
            Specializing in the transport of new, electric, and luxury vehicles using Metal R-Raks for maximized safety and space.
          </Text>
        </VStack>
      </Box>

      <AspectRatio ratio={16 / 9} my={10}>
        <iframe title="Finished Automobiles Logistics" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowFullScreen />
      </AspectRatio>

      <Box as="section" py={10}>
        <Heading size="lg" mb={6} textAlign="center">
          Marketplace
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <ProductCard title="Car Cover" price="$50.00" />
          <ProductCard title="Tire Chains" price="$75.00" />
          <ProductCard title="Safety Cones" price="$20.00" />
        </SimpleGrid>
      </Box>

      <Box as="section" py={10}>
        <Heading size="lg" mb={6} textAlign="center">
          Find Parts
        </Heading>
        <Flex justify="center">
          <Stack spacing={4} maxW="md" width="full">
            <FormControl>
              <FormLabel>Part Name</FormLabel>
              <Input placeholder="Enter part name" />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea placeholder="Describe the part you're looking for" />
            </FormControl>
            <Button rightIcon={<FaSearch />} colorScheme="blue">
              Search
            </Button>
          </Stack>
        </Flex>
      </Box>
    </Container>
  );
};

const ProductCard = ({ title, price }) => (
  <VStack p={4} bg={useColorModeValue("white", "gray.700")} boxShadow="lg" rounded="lg" textAlign="center">
    <Image boxSize="150px" objectFit="cover" src="https://images.unsplash.com/photo-1618178325258-a123dc15f610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXIlMjBhY2Nlc3Nvcnl8ZW58MHx8fHwxNzE0Njg3NTMxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt={title} />
    <Text fontWeight="bold" fontSize="lg">
      {title}
    </Text>
    <Text fontSize="md">{price}</Text>
    <Button rightIcon={<FaShoppingCart />} colorScheme="blue" variant="outline">
      Add to Cart
    </Button>
  </VStack>
);

export default Index;
