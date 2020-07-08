import React from 'react';
import { TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';

type Props = {
    onPress: () => void;
    type: string;
};

const BackArrow: React.FC<Props> = (props) => {
    const { onPress, type } = props;

    const underlayColor: string = type == 'setting' ? '#FF4FC3' : '#7244F4';

    return (
        <TouchableHighlight onPress={onPress} underlayColor={underlayColor}>
            <Icon name="arrow-back" color="#fff" />
        </TouchableHighlight>
    );
};

export default BackArrow;
