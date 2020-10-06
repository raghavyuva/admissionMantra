import React, { useState, useEffect } from 'react'
import { View, FlatList, Text } from 'react-native'
import PDFReader from 'rn-pdf-reader-js'

const Pdf = ({ navigation, route }) => {
  const { thread } = route.params;
  const [data, setData] = useState('');
  const [partdata, setPartdata] = useState(null);
  useEffect(() => {
    const Listener = fetch(`http://helixsmartlabs.in/app/dashboard/pdf.php?id=${thread}`)
      .then((response) => response.json())
      .then((responseJson) => {
        setData(...responseJson);
      }).catch((error) => {
        console.log("Data fetching failed");
      });
  }, []);
  console.log(data.url);

  return (

    <PDFReader
      source={{
        uri: `${data.url}`
      }}
    />
  );
}
export default Pdf;