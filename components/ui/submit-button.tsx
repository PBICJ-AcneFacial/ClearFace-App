import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

type ButtonProps = TouchableOpacityProps & {}

export function SubmitButton({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className='bg-[#0C8CE9] items-center justify-center h-10 w-full rounded-3xl'
      activeOpacity={0.8}
      {...rest}
    >
      <Text className='text-white'>{children}</Text>
    </TouchableOpacity>
  )
}