import React from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type Props = {
    recordList: Array<number | string>
}

const RecordList = (props: Props) => {

    const { recordList } = props
   // const renderList: any = []

    const renderRecord = ({item}: any): JSX.Element => {

        const timestamp = item.date
        const date = timestamp.toDate().toISOString().split('T')[0].split('-')
        const month = (date[1][0] == '0') ? date[1][1] : date[1]
        const day = (date[2][0] == '0') ? date[2][1] : date[2]
        const renderDate = month + '/' + day

        return(
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
        )
    }

    // recordList.forEach((record: any) => {
    //     renderList.push(renderRecord(record))
    // })

    return(
        <ScrollView>
            <View>
                <FlatList data={recordList} renderItem={renderRecord} />
            </View>
        </ScrollView>
    )

}

export default RecordList

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
})