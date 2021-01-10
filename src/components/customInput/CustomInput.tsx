import React, {useRef, useEffect} from 'react'
import {
  Box,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react'

export interface CustomInputProps {
  /**
   * Input lable
   */
  label: string
  /**
   * Input type (text, email, password ...)
   */
  type: string
  /**
   * Send the reference of the Input to the parent
   */
  sendRef: (ref: React.RefObject<HTMLInputElement>) => void
  /**
   * Help text
   */
  help?: string
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type,
  sendRef,
  help,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => sendRef(inputRef))

  return (
    <FormControl>
      <Flex direction={['column', 'row']}>
        <FormLabel minW="150px" textAlign={['left', 'right']}>
          {label}
        </FormLabel>
        <Box w="100%">
          <Input type={type} placeholder={label} ref={inputRef} />
          {help ? <FormHelperText>{help}</FormHelperText> : null}
        </Box>
      </Flex>
    </FormControl>
  )
}
