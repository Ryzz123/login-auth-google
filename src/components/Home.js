import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { currentUser, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate('/sign');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card maxW="35%" margin="4em auto">
      <CardHeader display="flex" justifyContent="center">
        <Image width="75px" src={currentUser.photoURL} borderRadius="50%" />
      </CardHeader>
      <CardBody mt="-8" textAlign="center">
        <Heading as="h4" fontSize="xl">
          {currentUser.displayName}
        </Heading>
        <Text color="gray.500">{currentUser.email}</Text>
        <Button onClick={handleLogOut} w="65%" background="blue.400" my="1em">
          LOG OUT
        </Button>
      </CardBody>
    </Card>
  );
};

export default Home;
