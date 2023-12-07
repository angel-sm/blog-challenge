/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import styled from "styled-components";

const Input = forwardRef(function Input(props, ref) {
    const { type } = props
    return <StyledInput type={type} ref={ref} onChange={props.onChange} />
})

export default Input;

const StyledInput = styled.input`
  width: 100%;
  height: 33px;
  border-radius: 4px;
  border: none;
  padding: 0.5em;
  margin-top: 0.5em;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border: 1px solid #ccc;
`;
