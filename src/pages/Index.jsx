import { Container, Text, VStack, Heading, Box, Button, Flex } from "@chakra-ui/react";
import { FaCalendarAlt, FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">Event Management Platform</Heading>
        <Text fontSize="lg" textAlign="center">Manage your events efficiently and effortlessly.</Text>
        <Flex direction="column" align="center" justify="center" mt={10}>
          <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" size="lg" mb={4}>
            View Events
          </Button>
          <Button leftIcon={<FaPlusCircle />} colorScheme="blue" size="lg" onClick={() => navigate('/create-event')}>
            Create New Event
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;