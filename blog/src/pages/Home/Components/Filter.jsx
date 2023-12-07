import styled from "styled-components";
import Input from "../../../components/Input";
import { Label } from "../../../styled-components/inputs.styled-components";
import { useRef, useState } from "react";
import { usePageContext } from "../context";

const Filter = () => {
  const searchRef = useRef(null);
  const [timerId, setTimerId] = useState(null);

  const { setState } = usePageContext()

  const handleSearch = () => {
    if(timerId) {
      clearTimeout(timerId)
    }

    const newTimer = setTimeout(() => {
      setState(old => ({
        ...old, 
        search: searchRef.current.value
      }))
    }, 2000)

    setTimerId(newTimer)
  }

  return (
    <FilterContainer>
      <Label>Buscar</Label>
      <Input type="text" ref={searchRef} onChange={handleSearch} />
    </FilterContainer>
  );
};

export default Filter;

const FilterContainer = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
`;
