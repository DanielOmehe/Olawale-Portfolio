import {
  Header,
  Hero,
  Services,
  About,
  Project,
  Platforms,
  Contact,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <main className="w-[80%] max-w-screen-xl mx-auto">
        <Hero />
        <Services />
        <About />
        <Project />
        <Platforms />
        <Contact />
      </main>
    </>
  );
}

export default App;
