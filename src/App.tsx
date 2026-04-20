import { Contact } from "./components/Contact"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { PlexusBackground } from "./components/PlexusBackground"
import { Projects } from "./components/Projects"
import { Services } from "./components/Services"
import { Stack } from "./components/Stack"
import { I18nProvider } from "./i18n"

function App() {
  return (
    <I18nProvider>
      <div className="relative min-h-svh">
        <PlexusBackground />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <Services />
            <Projects />
            <Stack />
            <Contact />
          </main>
        </div>
      </div>
    </I18nProvider>
  )
}

export default App
