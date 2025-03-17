import { Text, View } from 'react-native'
import { router } from 'expo-router'
import { SubmitButton } from '~/components/ui/submit-button'
import { Input } from '~/components/ui/input'

export default function Register() {
  return (
    <View className='flex flex-1 gap-6 px-6 items-center justify-center'>
      <View className='flex w-full gap-6'>
        <Text className='text-left font-semibold text-xl'>Cadastro</Text>
        <Text className='text-sm font-semibold text-zinc-600'>
          Nome, email e senha necessários para a autenticação
        </Text>
      </View>
      <View className='flex w-full items-center flex-col gap-4'>
        <Input placeholder='Informe seu nome' />
        <Input placeholder='Informe seu email' />
        <Input placeholder='Informe sua senha' />
      </View>
      <SubmitButton>Confirmar</SubmitButton>
      <Text className='text-sm font-semibold text-zinc-600'>
        Já tenho uma conta -{' '}
        <Text className='underline' onPress={() => router.navigate('/login')}>
          Entrar
        </Text>
      </Text>
    </View>
  )
}
