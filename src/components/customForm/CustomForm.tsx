import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { CustomInput, CustomInputProps } from '../customInput/CustomInput'
import CustomButton from '../customButton'

interface inputProps {
  label: string
  type: string
  area?: boolean
  help?: string
}

export interface CustomFormProps {
  /**
   * Form title
   */
  title: string
  /**
   * List of all inputs
   */
  inputs: inputProps[]
  /**
   * sendSubmit function returns Form values to parent
   */
  sendSubmit: (data: object[]) => void
  /**
   * Submit button text
   */
  submitText?: string
}


export const CustomForm: React.FC<CustomFormProps> = ({
  title,
  inputs,
  sendSubmit,
  submitText = 'Submit',
}) => {
  const inputData = inputs.map((input) => ({ label: input.label, data: '' }))
  var allInputs: CustomInputProps[] = []

  for (let i = 0; i < inputs.length; i++) {
    allInputs.push({
      label: inputs[i].label,
      type: inputs[i].type,
      area: inputs[i].area,
      reset: false,
      help: inputs[i].help,
      sendValue: (v: string) => {
        inputData[i].data = v
      },
    })
  }

  const onSubmit = () => {
    sendSubmit(inputData)
    //allInputs.forEach((imput) => (imput.reset = true))
  }

  return (
    <Box
      mt="30px"
      p="10px"
      maxW="600px"
      mx="auto"
      border="1px"
      borderColor="primary.500"
    >
      <Text mb="20px" fontSize="xl" fontWeight="bold" textAlign="center">
        {title}
      </Text>
      <Flex direction="column" sx={{ gap: '20px' }}>
        {allInputs.map((input, key) => (
          <CustomInput
            label={input.label}
            type={input.type}
            sendValue={input.sendValue}
            area={input.area}
            help={input.help}
            key={key}
          />
        ))}
      </Flex>
      <Flex m="20px" justifyContent="flex-end">
        <CustomButton label={submitText} mode="primary" onClick={onSubmit} />
      </Flex>
    </Box>
  )
}
