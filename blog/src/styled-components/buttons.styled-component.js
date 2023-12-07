import styled from "styled-components";

export const SolidButton = styled.button`
    width: 100%;
    height: 33px;
    max-width: 120px;
    background: #4EEC91;
    color: #008C31;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    
    &:hover{
        background: #3EDC81;
        color: #008C31;
    }

    &:active {
        background: #4EEC91;
    }

`