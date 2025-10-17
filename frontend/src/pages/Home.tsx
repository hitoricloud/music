//components
import Welcome from "../components/Welcome";
import Grace from "../components/Grace";

const Home = () => {
  return (
    <main className="flex flex-col p-4 gap-2">
      <Welcome />
      <Grace username="Dutixlf" />
    </main>
  );
};

export default Home;
