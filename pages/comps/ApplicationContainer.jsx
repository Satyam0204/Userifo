import React,{useState} from 'react'
import {
    AppShell,
    Header,
    Navbar,
    NavLink,
    Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,

} from '@mantine/core'
import CustomNav from './Navbar';

export const ApplicationContainer = ({children}) => {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const [active, setActive] = useState(0);

    

  return (
    <AppShell


    styles={{
      main: {
        background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
      },
    }}
    navbarOffsetBreakpoint="sm"
    asideOffsetBreakpoint="sm"
    navbar={
      
      <CustomNav opened={opened}/>
    }
    aside={
      <MediaQuery smallerThan="sm" styles={{ display: 'none'  }}>
        <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
          <Text >Application sidebar</Text>
        </Aside>
      </MediaQuery>
    }
    footer={
      <Footer height={60} p="md">
        Application footer
      </Footer>
    }
    header={
      <Header height={{ base: 50, md: 70 }} p="md">
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
            />
          </MediaQuery>

          <Text>Application header</Text>
        </div>
      </Header>
    }
    >
        {children}
    </AppShell>
  )
}


