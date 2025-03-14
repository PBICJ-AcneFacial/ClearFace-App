import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler'
import { ProfileCard } from './profile-card'

const screenWidth = Dimensions.get('window').width
const DRAWER_WIDTH = 300

const consultations = [
  { date: '20 de setembro', time: '19:00' },
  { date: '20 de setembro', time: '19:00' },
]

export function Drawer({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) {
  const translateX = useSharedValue(isOpen ? 0 : -DRAWER_WIDTH)

  React.useEffect(() => {
    translateX.value = withTiming(isOpen ? 0 : -DRAWER_WIDTH, { duration: 300 })
  }, [isOpen])

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }))

  return (
    <GestureHandlerRootView className="flex-1">
      <View className="flex-1">{children}</View>

      {/* Fundo escuro ao abrir o Drawer */}
      {isOpen && (
        <TouchableOpacity className="absolute top-0 left-0 w-full h-full bg-black/50" onPress={onClose} />
      )}

      {/* Drawer */}
      <PanGestureHandler onEnded={onClose}>
        <Animated.View style={animatedStyle} className="absolute left-0 top-0 w-[280px] h-full bg-gray-100 p-5 py-8 shadow-lg">
          <Text className="text-lg font-bold">Últimas consultas</Text>
          <FlatList
            data={consultations}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <View className="flex-row justify-between mt-4">
                <Text className="text-sm font-medium">{item.date}</Text>
                <Text className="text-sm font-medium">{item.time}</Text>
              </View>
            )}
          />

          {/* Rodapé com Usuário */}
          <View className="mt-auto flex-row items-center border-t border-gray-300 pt-4">
            <View className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
              <Text className="text-white font-bold">IH</Text>
            </View>
            <Text className="ml-3 text-sm font-bold">Ismael Henrique</Text>
            <ProfileCard />
          </View>
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  )
}
