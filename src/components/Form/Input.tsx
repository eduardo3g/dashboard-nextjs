import { forwardRef, ForwardRefRenderFunction } from 'react';
import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps{
  name: string;
  type: string;
  label?: string;
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    { name, label, type, ...rest },
    ref
  ) => {
  return (
    <FormControl>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
      <ChakraInput
        id={name}
        name={name}
        type={type}
        focusBorderColor="pink.500"
        backgroundColor="gray.900"
        variant="filled"
        _hover={{
          backgroundColor: 'gray.900'
        }}
        size="lg"
        ref={ref}
        {...rest}
      />
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);