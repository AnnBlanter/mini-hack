import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading,
  IconButton,
  List,
  ListItem,
  SearchIcon
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

const menu = [{
  name: 'Cуп',
  items: ['Борщ', 'Солянка']
}, {
  name: 'Салаты и закуски',
  items: ['Ольвье', 'Рулетики с ветчиной']
}];

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Heading>I'm a Heading</Heading>
      {menu.map(({name, items}) => (
        <>
          <Heading as="h3">{name}</Heading>
          <List>
          {
            items.map((item) => (<>
              <ListItem>
                { item }
              </ListItem>
            </>))
          }
          </List>
        </>
      ))}
    </ChakraProvider>
  );
}

export default App;

//          <ColorModeSwitcher justifySelf="flex-end" />
