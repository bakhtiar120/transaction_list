import React, { FC } from 'react';
import { StyleSheet, Alert, View, ToastAndroid, Text, TouchableHighlight, TouchableOpacity, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TransactionDetailScreenRouteProp } from '../../config/Types';
import Styles from '../../config/Styles';
import { capitalize, currencyFormat, getParsedDate } from '../../config/utility';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Clipboard from '@react-native-clipboard/clipboard';
import { Colors } from '../../config/Colors';

export type Props = {
    data_transactions: array;
};

const TransactionDetail: React.FC<Props> = ({
    data_transactions = []
}) => {
    const [dataTransactions, setDataTransactions] = React.useState(
        data_transactions
    );
    const navigation = useNavigation();
    const route = useRoute<TransactionDetailScreenRouteProp>();

    const copyToClipboard = () => {
        Clipboard.setString(route.params.id);
        let msg = "Copy ID Transaksi Berhasil"
        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.SHORT)
        } else {
            AlertIOS.alert(msg);
        }
    };

    return (
        <View style={styles.container}>
            <View style={Styles.subContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={Styles.title}>ID TRANSAKSI:#{route.params.id}</Text>
                    <View style={{ marginLeft: 10 }}>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => copyToClipboard()}>
                            <MaterialIcon name="content-copy" size={20} color={Colors.orange_color} style={{ transform: [{ rotateY: '180deg' }] }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={[Styles.subContainer, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                <Text style={Styles.title}>DETAIL TRANSAKSI</Text>
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                    <View><Text style={[Styles.title,{color:Colors.orange_color}]}>Tutup</Text></View>
                </TouchableOpacity>

            </View>
            <View style={Styles.line}></View>
            <View style={[Styles.subContainer, { flexDirection: 'row' }]}>
                <View style={{ marginRight: 5 }}>
                    <Text style={Styles.title}>{route.params.bank_sender == "bca" || route.params.bank_sender == "bni" || route.params.bank_sender == "btpn" ? route.params.bank_sender.toUpperCase() : capitalize(route.params.bank_sender)}</Text>
                </View>
                <View>
                    <FontAwesome name="arrow-right" size={25} color="#000000" />
                </View>
                <View style={{ marginLeft: 5 }}>
                    <Text style={Styles.title}>{route.params.bank_receiver == "bca" || route.params.bank_receiver == "bni" || route.params.bank_receiver == "btpn" ? route.params.bank_receiver.toUpperCase() : capitalize(route.params.bank_receiver)}</Text>
                </View>
            </View>
            <View style={Styles.inRowSpaceBetween}>
                <View>
                    <Text style={Styles.title}>{route.params.name}</Text>
                    <Text style={Styles.title}>{route.params.account_number}</Text>
                </View>
                <View style={{ alignSelf: 'flex-end', marginRight: 30 }}>
                    <Text style={Styles.title}>NOMINAL</Text>
                    <Text style={Styles.title}>{currencyFormat(route.params.amount, true)}</Text>
                </View>
            </View>
            <View style={Styles.inRowSpaceBetween}>
                <View>
                    <Text style={Styles.title}>BERITA TRANSFER</Text>
                    <Text style={Styles.title}>{route.params.remark}</Text>
                </View>
                <View style={{ alignSelf: 'flex-end', marginRight: 45 }}>
                    <Text style={Styles.title}>KODE UNIK</Text>
                    <Text style={Styles.title}>{route.params.unique_code}</Text>
                </View>
            </View>
            <View style={Styles.subContainer}>
                <Text style={Styles.title}>WAKTU DIBUAT</Text>
            </View>
            <View style={Styles.subContainer2}>
                <Text style={Styles.title}>{getParsedDate(route.params.created_at)}</Text>
            </View>
            {/* <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                <Text style={{ color: "#000000", fontSize: 16 }}>Go Back</Text>
            </TouchableOpacity> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    greeting: {
        fontSize: 20,
        color: "#000000",
        fontWeight: 'bold',
        margin: 16
    }
});

export default TransactionDetail;