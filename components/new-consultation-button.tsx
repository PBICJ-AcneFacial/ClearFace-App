import { router } from 'expo-router'
import { Plus } from 'lucide-react-native'
import { Text, TouchableOpacity } from 'react-native'

export function NewConsultationButton() {
  function redirectToNewConsullationScreen() {
    router.navigate('/')
  }

  return (
    <TouchableOpacity
      onPress={redirectToNewConsullationScreen}
      className='flex flex-row bg-gray-900 px-3 py-2 rounded-xl gap-3'
    >
      <Text className='text-zinc-50 font-semibold'>Nova</Text>
      <Plus color='#fff' />
    </TouchableOpacity>
  )
}
