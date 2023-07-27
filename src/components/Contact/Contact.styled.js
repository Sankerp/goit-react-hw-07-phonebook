import styled from 'styled-components';

export const StyledContact = styled.li`
  & button {
    margin-top: 20px;
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

  & span {
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 80%;
    padding: 5px 0 5px 10px;
    font-size: 20px;
    margin-right: 10px;
  }
`;
