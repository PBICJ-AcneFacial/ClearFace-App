import { TextInput, TextInputProps, View } from 'react-native'

type InputProps = TextInputProps & {}

export function Input({ ...rest }: InputProps) {
  return (
    <TextInput
      className='w-full border border-gray-300 rounded-2xl px-3 py-2 text-black'
      placeholderTextColor='#52525C'
      {...rest}
    />
  )
}

export function MinimalistInput({ ...rest }: InputProps) {
  return (
    <TextInput
      className='w-full border border-gray-300 rounded-2xl px-3 py-2 text-black'
      placeholderTextColor='#52525C'
      {...rest}
    />
  )
}