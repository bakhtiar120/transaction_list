import React, { FC } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export type Props = {
    data_transactions: array;
};

const Transactions: React.FC<Props> = ({
    data_transactions = []
}) => {
    const [dataTransactions, setDataTransactions] = React.useState(
        data_transactions
    );
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>
                Hello transaction
            </Text>
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("TransactionDetail")}>
                <Text style={{ color: "#000000", fontSize: 16 }}>Go to Detail</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    greeting: {
        fontSize: 20,
        color: "#000000",
        fontWeight: 'bold',
        margin: 16
    }
});

export default Transactions;