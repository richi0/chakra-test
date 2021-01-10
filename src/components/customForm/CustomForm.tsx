import React, { useRef, useState } from 'react'
import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { CustomInput } from '../customInput/CustomInput'
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
  const [modalTitle, setModalTitle] = useState('')
  const [modalText, setModalText] = useState('')
  const nullRef = useRef<HTMLInputElement>(null)
  const inputRefs = inputs.map(() => nullRef)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onSubmit = () => {
    if (inputRefs.map((input) => input.current?.value).every((v) => v !== '')) {
      setModalTitle('Message send successfully!')
      setModalText(
        'Thanks for your message. We will contact you as soon as possible.',
      )
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
      onOpen()
    } else {
      setModalTitle('Data missing!')
      setModalText('Some data is missing. Please fill all the fields.')
      onOpen()
    }
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
            area={input.area}
            help={input.help}
            key={key}
          />
        ))}
      </Flex>
      <Flex m="20px" justifyContent="flex-end">
        <CustomButton label={submitText} mode="primary" onClick={onSubmit} />
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{modalText}</ModalBody>
          <ModalFooter>
            <Box mr="20px">
              <CustomButton label="Close" onClick={onClose} />
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}
