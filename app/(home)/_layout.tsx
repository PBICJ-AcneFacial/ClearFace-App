import '~/global.css'

import {
  DarkTheme,
  DefaultTheme,
  Theme,
  ThemeProvider,
} from '@react-navigation/native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { Platform, TouchableOpacity } from 'react-native'
import { NAV_THEME } from '~/lib/constants'
import { useColorScheme } from '~/lib/useColorScheme'
import { PortalHost } from '@rn-primitives/portal'
import { setAndroidNavigationBar } from '~/lib/android-navigation-bar'
import { AlignLeft } from 'lucide-react-native'
import { Drawer } from '~/components/ui/drawer'
import { NewConsultationButton } from '~/components/new-consultation-button'

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
}
const DARK_THEME: Theme = {
  ...DarkTheme,
  colors: NAV_THEME.dark,
}

export default function HomeLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: '',
            headerShown: true,
            headerRight: () => <NewConsultationButton />,
            headerLeft: () => (
              <TouchableOpacity onPress={toggleDrawer} className="p-2">
                <AlignLeft color="#000" size={24} />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack>
    </Drawer>
  )
}

const useIsomorphicLayoutEffect =
  Platform.OS === 'web' && typeof window === 'undefined'
    ? React.useEffect
    : React.useLayoutEffect
