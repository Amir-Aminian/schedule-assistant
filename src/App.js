import Authentication from "./containers/Routing";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <Authentication />
    </UserProvider>
  );
}

export default App;
