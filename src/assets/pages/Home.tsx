import Sidebar from "../../components/sidebar";
import LefIndexCard from "../../components/leftcard";

function Home() {
  return (
    <>
      <div className="flex flex-wrap w-full justify-center gap-4 items-center mt-4 min-h-screen">
        <Sidebar /> <LefIndexCard /> 
      </div>
    </>
  );
}

export default Home;
