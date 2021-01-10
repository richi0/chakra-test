import React, { useRef } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { CustomInput } from '../customInput/CustomInput'
import CustomButton from '../customButton'

interface inputProps {
  label: string
  type: string
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
  const nullRef = useRef<HTMLInputElement>(null)
  const inputRefs = inputs.map((ref) => nullRef)

  const onSubmit = () => {
    sendSubmit(
      inputs.map((input, key) => {
        return { lable: input.label, value: inputRefs[key].current?.value }
      }),
    )
    inputRefs.forEach((ref) => {
      let a = ref.current
      if (a) {
        a.value = ''
      }
    })
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
        {inputs.map((input, key) => (
          <CustomInput
            label={input.label}
            type={input.type}
            sendRef={(ref) => {
              inputRefs[key] = ref
            }}
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
