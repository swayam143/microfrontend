import { useState } from "react";

export const useName = () => {
  const [name, setName] = useState("");

  return { name, setName };
};
