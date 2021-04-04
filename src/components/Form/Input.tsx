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

export function Input({ name, label, type, ...rest }: InputProps) {
  return (
    <FormControl>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
      <ChakraInput
        name={name}
        type={type}
        focusBorderColor="pink.500"
        backgroundColor="gray.900"
        variant="filled"
        _hover={{
          backgroundColor: 'gray.900'
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
};