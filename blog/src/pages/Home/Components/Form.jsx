import { useRef, useState } from "react";
import styled from "styled-components";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import {
  InputGroup,
  Label,
} from "../../../styled-components/inputs.styled-components";
import { SolidButton } from "../../../styled-components/buttons.styled-component";
import {
  ContentRowCenterCenter,
  ContentRowCenterEnd,
} from "../../../styled-components/flex.styled-components";
import { entranceServices } from "../../../services/entrances.services";
import { usePageContext } from "../context";

const Form = () => {
  const { setState } = usePageContext();
  const [error, setError] = useState(false);

  const titleRef = useRef();
  const authorRef = useRef();
  const contentRef = useRef();

  const handleSaveEntrance = () => {
    const title = titleRef.current.value;
    const author = authorRef.current.value;
    const content = contentRef.current.value;

    const value = [title, author, content];
    const refs = [titleRef, authorRef, contentRef];

    const empty = value.findIndex((value) => value === "");

    if (empty >= 0) {
      refs[empty].current.focus();
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 2000);

      return;
    }

    entranceServices
      .save({
        title,
        author,
        content,
      })
      .finally(() => {
        refs.forEach((ref) => (ref.current.value = ""));
        setState((old) => ({ ...old, refresh: !old.refresh }));
      });
  };

  return (
    <FormContainer>
      <InputGroup>
        <Label>Title</Label>
        <Input type="text" ref={titleRef} />
      </InputGroup>

      <InputGroup>
        <Label>Author</Label>
        <Input type="text" ref={authorRef} />
      </InputGroup>

      <InputGroup>
        <Label>Content</Label>
        <TextArea ref={contentRef} />
      </InputGroup>

      <ContentRowCenterEnd>
        <SolidButton onClick={handleSaveEntrance} type="button">
          Save
        </SolidButton>
      </ContentRowCenterEnd>

      {error && (
        <ContentRowCenterCenter>
          <Error>Campo requerido</Error>
        </ContentRowCenterCenter>
      )}
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.div`
  width: 100%;
`;

const Error = styled.span`
  width: 100%;
  background: #ffac9c;
  margin-top: 1em;
  color: #c0392b;
  text-align: center;
  padding: 0.5em;
  border-radius: 4px;
`;
