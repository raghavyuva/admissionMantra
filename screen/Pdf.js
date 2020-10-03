import * as React from 'react'
import { View } from 'react-native'
import PDFReader from 'rn-pdf-reader-js'

export default class App extends React.Component {
  render() {
    return (
      <PDFReader
        source={{
          uri: 'http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf',
        }}
      />
    )
  }
}