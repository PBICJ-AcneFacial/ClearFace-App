import * as React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated'
import { Button } from '~/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
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
      <DropdownMenuContent className='w-64 native:w-72 native:mb-80' align='center'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Text>Team</Text>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Text>Invite users</Text>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <Animated.View entering={FadeIn.duration(300)}>
                <DropdownMenuItem>
                  <Text>Email</Text>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Text>Message</Text>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Text>More...</Text>
                </DropdownMenuItem>
              </Animated.View>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <Text>New Team</Text>
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Text>GitHub</Text>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Text>Support</Text>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Text>API</Text>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Text>Log out</Text>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
