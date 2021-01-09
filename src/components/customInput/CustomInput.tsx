import React, { useState } from 'react'
import {
  Box,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
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
   * Return value to parents
   */
  sendValue: (v: string) => void
  /**
   * Set true if you need a textarea
   */
  area?: boolean
  /**
   * Help text
   */
  help?: string
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type,
  sendValue,
  area = false,
  help,
}) => {
  const [value, setValue] = useState('')
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    let v = e.target.value
    setValue(v)
    sendValue(v)
  }
  return (
    <FormControl>
      <Flex direction={['column', 'row']}>
        <FormLabel minW="150px" textAlign={['left', 'right']}>
          {label}
        </FormLabel>
        <Box w="100%">
          {area ? (
            <Textarea
              type={type}
              value={value}
              onChange={handleChange}
              placeholder={label}
            ></Textarea>
          ) : (
            <Input
              type={type}
              value={value}
              onChange={handleChange}
              placeholder={label}
            />
          )}
          {help ? <FormHelperText>{help}</FormHelperText> : null}
        </Box>
      </Flex>
    </FormControl>
  )
}
