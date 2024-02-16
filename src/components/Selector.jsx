import { useState } from "react";
import styled from "styled-components";

const Selector = ({ selectedNumber, setSelectedNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();

  console.log(selectedNumber);

  return (
    <NumberSelectorContainer>
      <div className="flex">
        {
          arrNumber.map((value, i) => (
            <Box 
              isselected={value == selectedNumber} 
              key={i} 
              onClick={() => setSelectedNumber(value)}
            >
              {value}
            </Box>
          ))
        };
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default Selector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700px;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (props.isselected ? "white" : "black")};
`;