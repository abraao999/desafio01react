// import styles from "./App.module.css";
import "./global.css";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

export function App() {
  return (
    <>
      <Header />
      <Tasks />
    </>
  );
}
