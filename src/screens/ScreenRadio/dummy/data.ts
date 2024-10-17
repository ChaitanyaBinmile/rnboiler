import { useState } from "react";
import { Option } from "../../../common/CustomRadioButton/type";

export  const [options1, setOptions1] = useState<Option[]>([
    { id: '1', label: 'Option 1', value: 'option1' },
    { id: '2', label: 'Option 2', value: 'option2' },
    { id: '3', label: 'Option 3', value: 'option3' },
  ]);

 export const [options2, setOptions2] = useState<Option[]>([
    { id: '1', label: 'Choice A', value: 'choiceA' },
    { id: '2', label: 'Choice B', value: 'choiceB' },
    { id: '3', label: 'Choice C', value: 'choiceC' },
  ]);