import { View, Text, Button } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import Taro from '@tarojs/taro'

let context
export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  const errorCallback = () => {
    console.log('11111:pauseCallback')
  }

  function create() {
    context = Taro.createInnerAudioContext()
    context.src = 'https://storage.360buyimg.com/jdrd-blog/27.mp3'
    context.startTime = 0
    context.autoplay = true
    context.loop = false
    context.volume = 1
    context.playbackRate = 1
    context.referrerPolicy = 'origin'
    console.log('create')
  }
  function onError() {
    console.log('onError')
    context.onError(errorCallback)
  }

  function offError() {
    console.log('offError')
    context.offError(errorCallback)
  }

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Button onClick={create}>create</Button>
      <Button onClick={onError}>onError</Button>
      <Button onClick={offError}>offError</Button>
    </View>
  )
}
