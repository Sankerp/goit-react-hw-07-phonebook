import styled from 'styled-components';

export const StyledForm = styled.form`
  & label {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    font-size: 30px;
    width: 100%;
  }

  & input {
    margin-top: 10px;
    height: 30px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  & button {
    margin-top: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: #ccc;
    color: black;
    font-size: 20px;
    cursor: pointer;
    &:hover,
    &:focus {
      background-color: #fff;
      color: #000;
      border: 1px solid #ccc;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 12px,
        rgba(0, 0, 0, 0.12) 0px 5px 5px;
      scale: 1.05;
      transition: all 0.3s ease-in-out;
    }
  }
`;
