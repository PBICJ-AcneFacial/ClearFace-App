import { Text, View } from 'react-native'
import { router } from 'expo-router'
import { Input } from '~/components/ui/input'
import { SubmitButton } from '~/components/ui/submit-button'

export default function Login() {
  return (
    <View className='flex flex-1 gap-6 px-6 items-center justify-center'>
      <View className='flex w-full gap-6'>
        <Text className='text-left font-semibold text-xl'>Login</Text>
        <Text className='text-sm font-semibold text-zinc-600'>
          Email e senha necessários para a autenticação
        </Text>
      </View>
      <View className='flex w-full items-center flex-col gap-4'>
        <Input placeholder='Informe seu email' />
        <Input placeholder='Informe sua senha' />
      </View>
      <Text
        className='text-sm font-semibold underline text-zinc-600'
        // onPress={() => router.navigate('/(auth)/send-email')}
      >
        Esqueci a senha
      </Text>
      <SubmitButton>Confirmar</SubmitButton>
      <Text className='text-sm font-semibold text-zinc-600'>
        Ainda não tenho uma conta -{' '}
        <Text
          className='underline'
          onPress={() => router.navigate('/register')}
        >
          Cadrastar-se
        </Text>
      </Text>
    </View>
  )
}
