import React from 'react';
import { TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';

type Props = {
    onPress: any
}

const BackArrow = (props: Props) => {

    const { onPress } = props

    return(
        <TouchableHighlight
          onPress={onPress}
          underlayColor={'#7244F4'} 
        >
            <Icon
              name="arrow-back"
              color="#fff"
            />
        </TouchableHighlight>
    )
}

export default BackArrow

