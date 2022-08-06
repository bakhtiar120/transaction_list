import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

export type HomeStackNavigatorParamList = {
    Transactions: undefined;
    TransactionDetail: { id: string,name:string,remark:string,amount:number,created_at:date,unique_code:number,bank_sender:string,bank_receiver:string,account_number:number, };
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'TransactionDetail'
>;

export type TransactionDetailScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'TransactionDetail'
>;