import React from 'react'; 
import ControllerTextInput from '../ControllerTextInput';



const RenderInputs = (props) => {
  const { inputs, errors, control } = props;
  return (
    <>
      {inputs
        .filter((input) => input.status)
        .map((input) => (
          <ControllerTextInput  key={input.name} {...input} errors={errors} control={control} />
        ))}
    </>
  );
};

export default RenderInputs;