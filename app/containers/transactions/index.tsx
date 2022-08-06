import React, { FC, useState, useEffect } from 'react';
import { StyleSheet, Modal, View, Text, TouchableWithoutFeedback, TextInput, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { capitalize, currencyFormat, getParsedDate } from '../../config/utility';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
import Styles from '../../config/Styles';
import { Colors } from '../../config/Colors';

export type Props = {
    data_transactions: array;
};

export interface Itransaction {
    id: string;
    amount: number;
		account_number:number;
    sender_bank: string;
    beneficiary_name: string;
    beneficiary_bank: string;
    created_at: date;
    completed_at: date;
		remark:string;
    status: string;
		unique_code:number;
}

const Transactions: React.FC<Props> = ({
    data_transactions = []
}) => {
    const [dataTransactions, setDataTransactions] = React.useState(
        data_transactions
    );
    const [search, setSearch] = React.useState("");
    const [modalVisible, setModalVisible] = React.useState(false);
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;

    const navigation = useNavigation();
    const databro = [{
        "id": "FT93905",
        "amount": 3427342,
        "unique_code": 277,
        "status": "SUCCESS",
        "sender_bank": "bni",
        "account_number": "6510932463",
        "beneficiary_name": "Beck Glover",
        "beneficiary_bank": "btpn",
        "remark": "sample remark",
        "created_at": "2022-08-04 13:06:16",
        "completed_at": "2022-08-04 13:06:16",
        "fee": 0
    },
    {
        "id": "FT29774",
        "amount": 3790103,
        "unique_code": 759,
        "status": "SUCCESS",
        "sender_bank": "bni",
        "account_number": "9558197550",
        "beneficiary_name": "Miranda Bannister",
        "beneficiary_bank": "mandiri",
        "remark": "sample remark",
        "created_at": "2022-08-04 13:05:16",
        "completed_at": "2022-08-04 13:06:16",
        "fee": 0
    },
    {
        "id": "FT91033",
        "amount": 1173281,
        "unique_code": 277,
        "status": "SUCCESS",
        "sender_bank": "bni",
        "account_number": "2687964172",
        "beneficiary_name": "Hal Matthams",
        "beneficiary_bank": "bca",
        "remark": "sample remark",
        "created_at": "2022-08-04 13:04:16",
        "completed_at": "2022-08-04 13:06:16",
        "fee": 0
    },
    {
        "id": "FT22908",
        "amount": 1447796,
        "unique_code": 485,
        "status": "SUCCESS",
        "sender_bank": "bni",
        "account_number": "2710317477",
        "beneficiary_name": "Beck Glover",
        "beneficiary_bank": "mandiri",
        "remark": "sample remark",
        "created_at": "2022-08-03 10:06:16",
        "completed_at": "2022-08-04 13:06:16",
        "fee": 0
    },
    {
        "id": "FT28534",
        "amount": 108357,
        "unique_code": 532,
        "status": "SUCCESS",
        "sender_bank": "bni",
        "account_number": "8345599647",
        "beneficiary_name": "Jake Castillo",
        "beneficiary_bank": "bsm",
        "remark": "sample remark",
        "created_at": "2022-08-02 09:06:16",
        "completed_at": "2022-08-04 13:06:16",
        "fee": 0
    },
    {
        "id": "FT29734",
        "amount": 1415512,
        "unique_code": 157,
        "status": "PENDING",
        "sender_bank": "bni",
        "account_number": "3285491728",
        "beneficiary_name": "Sammy-Jo Mccall",
        "beneficiary_bank": "btpn",
        "remark": "sample remark",
        "created_at": "2022-08-01 08:06:16",
        "completed_at": "2022-08-04 13:06:16",
        "fee": 0
    },
    {
        "id": "FT40791",
        "amount": 4020254,
        "unique_code": 188,
        "status": "SUCCESS",
        "sender_bank": "bni",
        "account_number": "2732234940",
        "beneficiary_name": "Rhiannan Simmons",
        "beneficiary_bank": "bsm",
        "remark": "sample remark",
        "created_at": "2022-07-31 07:06:16",
        "completed_at": "2022-08-04 13:06:16",
        "fee": 0
    },
    {
        "id": "FT89053",
        "amount": 200176,
        "unique_code": 178,
        "status": "SUCCESS",
        "sender_bank": "bni",
        "account_number": "5094429735",
        "beneficiary_name": "Rhiannan Simmons",
        "beneficiary_bank": "muamalat",
        "remark": "sample remark",
        "created_at": "2022-07-30 06:06:16",
        "completed_at": "2022-08-04 13:06:16",
        "fee": 0
    },
    {
        "id": "FT94244",
        "amount": 320319,
        "unique_code": 893,
        "status": "SUCCESS",
        "sender_bank": "bni",
        "account_number": "5121145784",
        "beneficiary_name": "Beck Glover",
        "beneficiary_bank": "muamalat",
        "remark": "sample remark",
        "created_at": "2022-07-29 05:06:16",
        "completed_at": "2022-08-04 13:06:16",
        "fee": 0
    },
    {
        "id": "FT25656",
        "amount": 1804925,
        "unique_code": 579,
        "status": "SUCCESS",
        "sender_bank": "bni",
        "account_number": "2669700287",
        "beneficiary_name": "Hal Matthams",
        "beneficiary_bank": "bsm",
        "remark": "sample remark",
        "created_at": "2022-07-28 04:06:16",
        "completed_at": "2022-08-04 13:06:16",
        "fee": 0
    }
    ]
    const [dataTemp, setDataTemp] = React.useState(databro)
    const data_radio_button = [
        {
            "name": "URUTKAN",
            "value": "urutkan"
        },
        {
            "name": "Nama A-Z",
            "value": "name_asc"
        },
        {
            "name": "Nama Z-A",
            "value": "name_desc"
        },
        {
            "name": "Tanggal Terbaru",
            "value": "tgl_desc"
        },
        {
            "name": "Tanggal Terlama",
            "value": "tgl_asc"
        }
    ]
    const [checked, setChecked] = React.useState('urutkan');

    useEffect(() => {
        getData()
    }, []);

    const getData = () => {
        let url = "https://recruitment-test.flip.id/frontend-test";
        axios.get(url).then((response) => {
            console.log("responsenya ", response.data.length)
        }).catch(error => console.error("error bro ", error))
    }


    const urutkan = () => {
        setModalVisible(true)
    }

    const Item = ({ data }: { data: Itransaction }) => (
				
        <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate("TransactionDetail",{
					id:data.id,name : data.beneficiary_name,created_at:data.created_at,bank_sender:data.sender_bank,bank_receiver:data.beneficiary_bank,name:data.beneficiary_name,remark:data.remark,unique_code:data.unique_code,amount:data.amount,account_number:data.account_number
				})}>
					<View style = {{
            flexDirection: 'row', marginVertical: 8, justifyContent: 'center',
            marginHorizontal: 10,
        }}>
            <View style={{ width: 10, backgroundColor: data.status == "SUCCESS" ? Colors.orange_color : Colors.pending_color, borderTopLeftRadius: 15, borderBottomLeftRadius: 15 }}>

            </View>
            <View
                style={{
                    backgroundColor: '#ffffff',
                    borderTopRightRadius: 15,
                    borderBottomRightRadius: 15,
                    padding: 20,
                    width: width - 30

                }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginRight: 5 }}>
                                <Text style={Styles.title}>{data.sender_bank == "bca" || data.sender_bank == "bni" || data.sender_bank == "btpn" ? data.sender_bank.toUpperCase() : capitalize(data.sender_bank)}</Text>
                            </View>
                            <View>
                                <FontAwesome name="arrow-right" size={25} color="#000000" />
                            </View>
                            <View style={{ marginLeft: 5 }}>
                                <Text style={Styles.title}>{data.beneficiary_bank == "bca" || data.beneficiary_bank == "bni" || data.beneficiary_bank == "btpn" ? data.beneficiary_bank.toUpperCase() : capitalize(data.beneficiary_bank)}</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={Styles.subtitle}>{data.beneficiary_name}</Text>
                        </View>
                        <View style={{ marginTop: 10, flexDirection: 'row' }}>
                            <Text style={Styles.subtitle}>{currencyFormat(data.amount, true)}</Text>
                            <View style={{
                                height: 10,
                                backgroundColor: "#000000",
                                justifyContent: 'center',
                                alignSelf: 'center',
                                marginHorizontal: 5,
                                width: 10,
                                borderRadius: 1000,
                            }}></View>
                            <Text style={Styles.subtitle}>{getParsedDate(data.completed_at)}</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        {
                            data.status == "SUCCESS" ?
                                <View style={{ paddingVertical: 6, paddingHorizontal: 10, borderRadius: 8, backgroundColor: Colors.orange_color }}>
                                    <Text style={{ color: "#ffffff", fontWeight: 'bold' }}>Berhasil</Text>
                                </View>
                                :
                                <View style={{ paddingVertical: 6, paddingHorizontal: 10, borderRadius: 8, borderWidth: 2, borderColor: Colors.border_pending_color }}>
                                    <Text style={{ color: "#000000", fontWeight: 'bold' }}>Pengecekan</Text>
                                </View>
                        }
                    </View>
                </View>
            </View>
        </View >
				</TouchableOpacity>
    );

function renderRadioButton(data) {
    let radio_button = [];
    for (let i = 0; i < data.length; i++) {
        console.log("data radio ", data[i]);
        radio_button.push(
            <TouchableOpacity activeOpacity={0.7} onPress={() => sortData(data[i].value)}>
							<View style={Styles.inRowCenter}>
                <RadioButton
                    color={Colors.orange_color}
                    unchecked_color={Colors.orange_color}
                    value={data[i].value}
                    status={checked === data[i].value ? 'checked' : 'unchecked'}
                    onPress={() => sortData(data[i].value)}
                />
                <Text style={Styles.subtitle}>{data[i].name}</Text>
            </View>
						</TouchableOpacity>
        )
    }
    return radio_button
}

function submitSearch() {
    console.log("submit search ", search)
    let searchText = search.toLowerCase()
    if (search != '') {
        setDataTemp(null)
        let data_sip = []
        for (let i = 0; i < databro.length; i++) {
            if (databro[i].beneficiary_bank.toLowerCase().includes(searchText) || databro[i].beneficiary_name.toLowerCase().includes(searchText) || databro[i].sender_bank.toLowerCase().includes(searchText) || databro[i].amount == search) {
                console.log("masuk if ", databro[i])
                data_sip.push(databro[i])
            }
        }
        setDataTemp(data_sip)
        setSearch('')
    }
}

function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}

const sortData = (name) => {
	setChecked(name)
	console.log("sort data ",name)
	let result=[]
	if(name=="name_asc") {
		result = databro.sort(compareValues('beneficiary_name'))
		
	}
	else if(name=="name_desc") {
		result = databro.sort(compareValues('beneficiary_name','desc'))
	}
	else if(name=="tgl_desc") {
		result = databro.sort(compareValues('completed_at','desc'))
	}
	else if(name=="tgl_asc") {
		result = databro.sort(compareValues('completed_at'))
	}
	setDataTemp(result)
	setChecked('urutkan')
	setModalVisible(false)
}


return (
    <View style={styles.container}>
        <View style={{ flexDirection: 'row', borderRadius: 8, backgroundColor: "#ffffff", marginBottom: 10, marginTop: 10, paddingHorizontal: 10, paddingVertical: 7, marginHorizontal: 10 }}>
            <View style={{ alignSelf: 'center', justifyContent: 'center' }}>
                <Icon name="search" size={20} color={Colors.gray_color} />
            </View>
            <View>
                <TextInput
                    style={{ width: width - (width / 2) + 20, color: Colors.black_color }}
                    onChangeText={data => {
                        setSearch(data)
                    }}
                    onSubmitEditing={submitSearch}
                    value={search}
                    placeholder={'Cari nama, bank, atau nominal'}
                    placeholderTextColor={Colors.gray_color}
                />
            </View>
            <TouchableOpacity style={{ alignSelf: 'center' }} activeOpacity={0.7} onPress={() => urutkan()}>
                <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color: Colors.pending_color }}>URUTKAN</Text>
                    <Icon name="chevron-down" size={30} color={Colors.pending_color} />
                </View>
            </TouchableOpacity>
        </View>
        {
            dataTemp != null && dataTemp.length != 0 &&
            <FlatList
                data={dataTemp}
                contentContainerStyle={{ paddingBottom: 120, marginBottom: 15 }}
                renderItem={({ item }) => <Item data={item} />}
                keyExtractor={(item: Itransaction) => item.id}
            />
        }

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            on
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <TouchableWithoutFeedback onPress={() => { setModalVisible(false) }}>
                    <View style={Styles.modalView}>
                        {
                            renderRadioButton(data_radio_button)
                        }
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </Modal>


    </View>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#DCDCDC"
    },
    greeting: {
        fontSize: 20,
        color: "#000000",
        fontWeight: 'bold',
        margin: 16
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
});

export default Transactions;