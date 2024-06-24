import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { FaTicketAlt } from 'react-icons/fa';

const BookTicket = () => {
  const [selectedEvent, setSelectedEvent] = useState('');
  const [numTickets, setNumTickets] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

  // Mock events data (in a real app, this would come from an API or state management)
  const events = [
    { id: 1, name: 'Summer Music Festival' },
    { id: 2, name: 'Tech Conference 2023' },
    { id: 3, name: 'Food and Wine Expo' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the booking data to a backend API
    console.log({ selectedEvent, numTickets, name, email });
    toast({
      title: 'Booking successful.',
      description: `You've booked ${numTickets} ticket(s) for ${events.find(e => e.id === parseInt(selectedEvent)).name}.`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    navigate('/');
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Book Event Tickets
        </Heading>
        <Box as="form" onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel>Select Event</FormLabel>
              <Select
                placeholder="Choose an event"
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(e.target.value)}
              >
                {events.map((event) => (
                  <option key={event.id} value={event.id}>
                    {event.name}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Number of Tickets</FormLabel>
              <NumberInput
                min={1}
                max={10}
                value={numTickets}
                onChange={(value) => setNumTickets(parseInt(value))}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Your Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="green"
              size="lg"
              leftIcon={<FaTicketAlt />}
            >
              Book Tickets
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default BookTicket;