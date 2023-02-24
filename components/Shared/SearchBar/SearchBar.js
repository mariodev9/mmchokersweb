import { useState } from "react";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { SearchIcon } from "../../Icons";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  let handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  let handleSubmit = () => {
    router.push(`/Busqueda?q=${search}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon />
        </InputLeftElement>
        <Input
          value={search}
          onChange={handleInputChange}
          placeholder="Buscar"
          variant="filled"
          _placeholder={{
            color: "#BABABA",
            fontSize: "14px",
          }}
          bg={"#f5f5f5"}
        />
      </InputGroup>
    </form>
  );
}
