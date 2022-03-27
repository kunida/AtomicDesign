import { UserProvider } from "./providers/UserRrovider";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
