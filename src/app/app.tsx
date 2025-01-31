import Slideshow from "components/slideshow/Slideshow";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <div className="flex items-center justify-center min-h-screen">
          <div className="wrapper-main md:w-full">
            <Slideshow />
          </div>
        </div>
      </main>
    </QueryClientProvider>
  );
}

export default App;
