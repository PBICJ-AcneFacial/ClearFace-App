import { router } from 'expo-router'
import * as React from 'react'
import { TouchableOpacity, View } from 'react-native'
import {
  DropdownMenu,
  DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger
} from '~/components/ui/dropdown-menu'
import { Text } from '~/components/ui/text'

export function ProfileCard() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <TouchableOpacity>
          <View className='flex-row items-center border-t border-gray-300 pt-4'>
            <View className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center'>
              <Text className='text-white font-bold'>IH</Text>
            </View>
            <Text className='ml-3 text-sm font-bold'>Ismael Henrique</Text>
          </View>
        </TouchableOpacity>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='w-64 native:w-72 native:mb-80'
        align='start'
        side='top'
      >
        <DropdownMenuLabel>ismael.henrique.dev@gmail.com</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Text>Alterar email ou senha</Text>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Text>Documentação</Text>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Text>Overview</Text>
        </DropdownMenuItem>
        <DropdownMenuItem onPress={() => router.navigate('/(auth)/login')}>
          <Text>Log out</Text>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
