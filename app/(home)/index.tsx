import * as React from 'react'
import { ScrollView, View, Image, TouchableOpacity, Text } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { Upload as ImageUp } from 'lucide-react-native'
import { useLocalSearchParams } from 'expo-router'

export default function Home() {
  const { id } = useLocalSearchParams()
  
  const [messages, setMessages] = React.useState<
    { type: 'image'; uri: string }[]
  >([])
  const [previewImage, setPreviewImage] = React.useState<string | null>(null)

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    })

    console.log(result)

    if (!result.canceled) {
      setPreviewImage(result.assets[0].uri)
    }
  }

  function sendImage() {
    if (previewImage) {
      setMessages((prev) => [...prev, { type: 'image', uri: previewImage }])
      setPreviewImage(null)
    }
  }

  return (
    <View className='flex-1 bg-secondary/30 p-4'>
      <ScrollView className='flex-1'>
        {messages.map((msg, index) => (
          <View
            key={index}
            className='self-end bg-gray-800 p-2 rounded-lg mb-2 max-w-[75%]'
          >
            <Image
              source={{ uri: msg.uri }}
              style={{ width: 200, height: 120, borderRadius: 8 }}
            />
          </View>
        ))}
      </ScrollView>

      {/* Pré-upload da imagem
      {previewImage && (
        <View className='flex bg-gray-900 items-center justify-center rounded-3xl p-3 mb-3'>
          <Image
            source={{ uri: previewImage }}
            style={{ height: 200, borderRadius: 12 }}
          />
        </View>
      )} */}

      {/* Botão para selecionar imagem
      <TouchableOpacity
        onPress={previewImage === null ? pickImage : sendImage}
        className='flex flex-row justify-between bg-gray-900 px-4 py-3 rounded-3xl'
      >
        <Text className='text-zinc-50'>
          {previewImage ? previewImage.split('/').pop() : 'Adicionar Imagem'}
        </Text>
        <ImageUp color='#fff' />
      </TouchableOpacity> */}

      <View className='flex bg-gray-900 itens-center justify-center rounded-3xl'>
        {previewImage && (
          <View className='flex p-3 rounded-3xl'>
            <Image
              source={{ uri: previewImage }}
              style={{ height: 200, borderRadius: 12 }}
            />
          </View>
        )}
        <TouchableOpacity
          onPress={previewImage === null ? pickImage : sendImage}
          className='flex flex-row justify-between bg-gray-900 px-4 py-3 rounded-3xl'
        >
          <Text className='text-zinc-50'>
            {previewImage ? previewImage.split('/').pop() : 'Adicionar Imagem'}
          </Text>
          <ImageUp color='#fff' />
        </TouchableOpacity>
      </View>
    </View>
  )
}
