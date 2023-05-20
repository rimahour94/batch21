import { useState, useCallback, useMemo } from "react";
import Title from "./Title";
import Count from "./Count";
import Buttons from "./Buttons";

const HooksUseCallabck = () => {
  const [age, setAge] = useState(1);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 10000);
  }, [salary]);

  const isEligible = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return age >= 18;
  }, [age]);

  return (
    <>
      <Title />
      <Count count={age} />
      {isEligible ? (
        <span>user is elgible for vote</span>
      ) : (
        <span>user is not elgible for vote</span>
      )}
      <Buttons clickHandler={incrementAge}>Increment Age</Buttons>
      <Count count={salary} />
      <Buttons clickHandler={incrementSalary}>Increment Salary</Buttons>
    </>
  );
};

export default HooksUseCallabck;
