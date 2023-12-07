/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import styled from "styled-components";

const TextArea = forwardRef(function TextArea(props, ref) {
  return <StyledTextArea rows={6} ref={ref} />;
});

export default TextArea;

const StyledTextArea = styled.textarea`
  width: 100%;
  border-radius: 4px;
  border: none;
  padding: 0.5em;
  resize: none;
  margin-top: 0.5em;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border: 1px solid #ccc;
`;
