import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import Signature from 'react-native-signature-canvas';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const CreateSignature = () => {
  const [sign, setSign] = useState(null);

  const handleOK = signature => {
    console.log('sginature');
    setSign(signature);
  };

  const handleEmpty = () => {
    console.log('Empty');
    setSign(null);
  };

  const handleClear = () => {
    console.log('clear success!');
    setSign(null);
  };

  const createPDF = async () => {
    try {
      let options = {
        html: `
        <div style={{padding: '20px', }}>
          <img src={${sign}} style={{width: "100px", height: '100px', display: 'inline-block'}}/>
        </div>
        `,
        fileName: 'PDF_Convert',
        directory: 'Documents',
      };

      let file = await RNHTMLtoPDF.convert(options);
      console.log(file);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles().container}>
      {sign ? (
        <View style={styles.preview}>
          <Image
            resizeMode={'contain'}
            style={styles().image}
            source={{uri: sign}}
          />
        </View>
      ) : null}
      <Signature
        onOK={handleOK}
        onEmpty={handleEmpty}
        onClear={handleClear}
        descriptionText="Signature"
        clearText="Clear"
        confirmText="Save"
      />
      {sign && (
        <TouchableOpacity onPress={() => createPDF()}>
          <Text>Convert PDF</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CreateSignature;
