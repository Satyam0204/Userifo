import { MantineProvider } from "@mantine/core"
import { ApplicationContainer } from "./comps/ApplicationContainer"


export default function App({ Component, pageProps }) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{colorScheme:"light"}}>
      <ApplicationContainer>
          <Component {...pageProps} />
      </ApplicationContainer>
    </MantineProvider>
  )
}