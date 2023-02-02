import { Navbar,NavLink } from '@mantine/core';
// import {opened} from './ApplicationContainer'
function CustomNav({opened}) {
  return (
    <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
    <NavLink label="Header with logo" 
    
    color="dark"
    /> 
  <Navbar.Section grow mt="md">Links sections</Navbar.Section>
  <Navbar.Section>Footer with user</Navbar.Section>
  </Navbar>
  );
}

export default CustomNav