import React, { useState, useEffect } from 'react'
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
   * Set true to reset all values to ""
   */
  reset?: boolean
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
  reset = false,
  help,
}) => {
  const [value, setValue] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    let v = e.target.value
    sendValue(v)
    setValue(v)
  }

  useEffect(() => {
    if (reset) {
      setValue('')
    }
  }, [reset])

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
