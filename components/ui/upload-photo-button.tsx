import { ImageUp } from 'lucide-react-native'
import { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

export function UploadPhotoButton() {
  const [image, setImage] = useState<string | null>(null)

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
      setImage(result.assets[0].uri)
    }
  }

  async function uploadImage() {
    
  }

  return (
    <View className='flex bg-gray-900 itens-center justify-center rounded-3xl'>
      {image && (
        <View className='flex  p-3 rounded-3xl'>
          <Image
            source={{ uri: image }}
            style={{ flex: 1, height: 200, borderRadius: 12 }}
          />
        </View>
      )}
      <TouchableOpacity
        onPress={pickImage}
        className='flex flex-row justify-between bg-gray-900 px-4 py-3 rounded-3xl'
      >
        <Text className='text-zinc-50'>
          {image ? image.split('/').pop() : 'Adicionar Imagem'}
        </Text>
        <ImageUp color='#fff' />
      </TouchableOpacity>
    </View>
  )
}
