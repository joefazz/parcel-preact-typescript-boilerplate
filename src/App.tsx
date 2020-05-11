import { useState } from "react";

export default function App() {
  const [greeting, setGreeting] = useState('Hello');
  return <div>{greeting} world</div>;
}
