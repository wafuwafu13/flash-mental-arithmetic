import React from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

type Props = {
    recordList: { [key: string]: number | string }[];
};

const RecordList: React.FC<Props> = (props) => {
    const { recordList } = props;

    const renderRecord = ({ item }: { item: { [key: string]: number | string } }): JSX.Element => {
        const timestamp: any = item.date;
        const date: string[] = timestamp.toDate().toISOString().split('T')[0].split('-');
        const month: string = date[1][0] == '0' ? date[1][1] : date[1];
        const day: string = date[2][0] == '0' ? date[2][1] : date[2];
        const renderDate: string = month + '/' + day;

        return (
            <View>
                <View style={styles.item}>
                    <Text style={styles.itemTitle}>{renderDate}</Text>
                    <Text style={styles.itemTitle}>{item.surface}</Text>
                    <Text style={styles.itemTitle}>{item.sheet}</Text>
                    <Text style={styles.itemTitle}>{item.digit}</Text>
                    <Text style={styles.itemTitle}>{item.interval}</Text>
                    <Text style={styles.itemTitle}>{item.result}</Text>
                </View>
                <Divider />
            </View>
        );
    };

    return (
        <ScrollView>
            <View>
                <FlatList data={recordList} renderItem={renderRecord} />
            </View>
        </ScrollView>
    );
};

export default RecordList;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: wp('2%'),
        marginBottom: wp('2%')
    },
    itemTitle: {
        flex: 1,
        fontSize: wp('4%'),
        marginTop: wp('1%'),
        marginBottom: wp('1%'),
        paddingRight: wp('2%'),
        paddingLeft: wp('2%')
    }
});
