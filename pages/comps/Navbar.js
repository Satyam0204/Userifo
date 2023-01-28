import { Navbar } from '@mantine/core';

function CustomNav() {
  return (
    <Navbar height={600} p="xs" width={{ base: 300 }}>
      <Navbar.Section>{/* Header with logo */}First Option</Navbar.Section>
      <Navbar.Section grow mt="md">{/* Links sections */}Second Option</Navbar.Section>
      <Navbar.Section>{/* Footer with user */}Third Option</Navbar.Section>
    </Navbar>
  );
}

export default CustomNav