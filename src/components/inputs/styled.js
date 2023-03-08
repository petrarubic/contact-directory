import styled from "styled-components";

export const FieldWrapper = styled.div`
  border: 1px solid #c5c5c5;
  padding: 10px;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 10px;

  input {
    width: 100%;
    border: none;
    outline: none;
    background-color: white;
  }
`;

export const ErrorsWrapper = styled.div`
  font-size: 12px;
  padding-bottom: 10px;
  color: #a20606;
`;
