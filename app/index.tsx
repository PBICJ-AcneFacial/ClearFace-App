import * as React from 'react'
import { ScrollView } from 'react-native'
import { UploadPhotoButton } from '~/components/ui/upload-photo-button'

export default function Home() {
  const [progress, setProgress] = React.useState(78)

  function updateProgressValue() {
    setProgress(Math.floor(Math.random() * 100))
  }
  return (
    <ScrollView className='flex-1 gap-5 p-6 bg-secondary/30'>
      <UploadPhotoButton />
    </ScrollView>
  )
}
