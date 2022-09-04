import React, { useState, useCallback, useMemo, useRef } from "react";
import { Text, TouchableOpacity, Image, View, StyleSheet, ImageBackground, ScrollView, StatusBar, FlatList, Button } from 'react-native'
import { Colors } from "../utils/Constants";
import BackIcon from 'react-native-vector-icons/Ionicons'
import DetailsIcon from 'react-native-vector-icons/Entypo'
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';


const Board = ({ navigation }) => {
    const DATA = [
        {
            id: '1',
            num: '4',
            icon: require('../../assets/images/athlete1.png'),
            name: 'Norman Gordon',
            score: '6201'
        },
        {
            id: '2',
            num: '5',
            icon: require('../../assets/images/image5.png'),
            name: 'Brian Cumin',
            score: '423'
        },
        {
            id: '3',
            num: '7',
            icon: require('../../assets/images/post.png'),
            name: 'Eric Widget',
            score: '7323'
        },
        {
            id: '4',
            num: '9',
            icon: require('../../assets/images/videoBackground.png'),
            name: 'Phillip Anthropy',
            score: '1233'
        },
        {
            id: '5',
            num: '4',
            icon: require('../../assets/images/athlete1.png'),
            name: 'Norman Gordon',
            score: '6201'
        },
        {
            id: '6',
            num: '5',
            icon: require('../../assets/images/image5.png'),
            name: 'Brian Cumin',
            score: '423'
        },
        {
            id: '7',
            num: '7',
            icon: require('../../assets/images/post.png'),
            name: 'Eric Widget',
            score: '7323'
        },
        {
            id: '8',
            num: '9',
            icon: require('../../assets/images/videoBackground.png'),
            name: 'Phillip Anthropy',
            score: '1233'
        }
    ]
    // ref
    const bottomSheetModalRef = useRef < BottomSheetModal > (null);

    // variables
    const snapPoints = useMemo(() => ['25%', '50%'], []);

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.scoreList}>
                <View style={styles.flexStart}>
                    <Text style={styles.serial}>{item.num}</Text>
                    <Image style={styles.profImg} source={item.icon} />
                    <Text style={styles.name}>{item.name}</Text>

                </View>
                <View style={styles.flexEnd}>
                    <View style={styles.scoreBox}>
                        <Text style={styles.scoreText}>{item.score}</Text>
                    </View>

                </View>
            </View>
        )
    }
    return (
        <ScrollView style={styles.mainScrollView}  >
            <StatusBar backgroundColor={"#fafafa"} />
            {/* HEADER SECTION */}
            <View style={styles.header} >
                <BackIcon onPress={() => navigation.goBack()} name="arrow-back-outline" size={25} color={"#000"} />
                <Text style={styles.text} >Leader Board</Text>
                <DetailsIcon name="dots-three-vertical" size={22} color={"#000"} />
            </View>

            {/* TAB BUTTON */}
            <View style={styles.tabBtn}>
                <View style={styles.thisMonth}>
                    <Text style={styles.monthText}>This Month</Text>
                </View>
                <View style={styles.allTime}>
                    <Text style={styles.monthText}>All Time</Text>
                </View>
            </View>

            {/* CIRCLE VIEW */}
            <View style={styles.circles}>
                <View style={styles.circles1}>
                    <View style={[styles.num, {
                        width: 25, height: 25, borderRadius: 25,
                        top: 20, left: 90, backgroundColor: '#FF7A7A',
                    }]}>
                        <Text style={styles.numText}>2</Text>
                    </View>
                    <Image
                        style={styles.img1}
                        source={require('../../assets/images/athlete1.png')} />
                    <Text style={styles.title}>Will Barrow</Text>
                    <TouchableOpacity style={[styles.id, { backgroundColor: '#FF7A7A', }]}>
                        <Text style={styles.btnText}>10239</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.circles2}>
                    <View style={[styles.num, {
                        width: 29, height: 29, borderRadius: 29,
                        top: 0, left: 90, backgroundColor: Colors.primaryColor,
                    }]}>
                        <Text style={styles.numText}>1</Text>
                    </View>
                    <Image
                        style={styles.img2}
                        source={require('../../assets/images/trial.png')} />
                    <Text style={styles.title}>Joss Sticks</Text>
                    <TouchableOpacity style={[styles.id, { backgroundColor: Colors.primaryColor, }]}>
                        <Text style={styles.btnText}>2888333</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.circles3}>
                    <View style={[styles.num, {
                        width: 25, height: 25, borderRadius: 25,
                        top: 20, left: 90, backgroundColor: '#3E90DC',
                    }]}>
                        <Text style={styles.numText}>3</Text>
                    </View>
                    <Image
                        style={styles.img3}
                        source={require('../../assets/images/background.png')} />
                    <Text style={styles.title}>Justin Case</Text>
                    <TouchableOpacity style={[styles.id, { backgroundColor: '#3E90DC', }]}>
                        <Text style={styles.btnText}>10239</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* ALL POSTION LIST */}
            <View style={styles.scoreListContainer}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>

            {/* BOTTOM SHEET */}
            <BottomSheetModalProvider>
                <View style={styles.container}>
                    <BottomSheetModal
                        // ref={bottomSheetModalRef}
                        index={1}
                        snapPoints={snapPoints}
                        onChange={handleSheetChanges}
                    >
                        <View style={styles.contentContainer}>
                            <Text>Awesome 🎉</Text>
                        </View>
                    </BottomSheetModal>
                </View>
            </BottomSheetModalProvider>

            {/* FOR BOTTOM MARGIN */}
            <View style={{ height: 50, marginTop: 20 }} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainScrollView: {
        flex: 1,
        backgroundColor: "#fafafa",
    },
    text: {
        color: "#000",
        fontSize: 15,
        fontWeight: "bold",

        paddingHorizontal: 10
    },
    header: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    tabBtn: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
        height: 50,
        alignItems: 'center',
        marginHorizontal: 50
    },
    thisMonth: {
        width: '50%',
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        height: 40,
        justifyContent: 'center',
        shadowColor: '#d0d0d0',
        shadowOpacity: 0.7,
        shadowRadius: 6,
        shadowOffset: { width: 1, height: 1 }
    },
    monthText: {
        color: '#000'
    },
    allTime: {
        width: '50%',
        borderRadius: 10,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        height: 50,
        justifyContent: 'center'
    },
    circles: {
        marginTop: 40,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    circles1: {
        width: '33%',
        alignItems: 'flex-start',
        height: 190,
        justifyContent: 'space-between'

    },
    circles2: {
        width: '33%',
        height: 190,
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    circles3: {
        width: '33%',
        height: 190,
        alignItems: 'flex-end',
        justifyContent: 'space-between'

    },
    img1: {
        marginTop: 20,
        width: 100,
        height: 100,
        borderRadius: 100,
        alignSelf: 'center'
    },
    img2: {
        width: 120,
        height: 120,
        borderRadius: 120,
        alignSelf: 'center'
    },
    img3: {
        marginTop: 20,
        width: 100,
        height: 100,
        borderRadius: 100,
        alignSelf: 'center'
    },
    num: {
        position: 'absolute',
        borderRadius: 25,
        zIndex: 100,
        justifyContent: 'center'
    },
    numText: {
        color: '#fff',
        alignSelf: "center"
    },
    title: {
        alignSelf: 'center',
        marginTop: 10,

    },
    btnText: {
        color: '#fff',
    },
    id: {
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 8,
        alignSelf: 'center',
    },
    scoreListContainer: {
        marginTop: 10,
    },
    scoreList: {
        flex: 1,
        marginTop: 20,
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 15
    },
    flexStart: {
        alignItems: 'flex-start',
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center'
    },

    serial: {
        color: '#000',
        fontSize: 16

    },
    profImg: {
        marginLeft: 20,
        width: 41,
        height: 41,
        borderRadius: 41

    },
    name: {
        marginLeft: 20,
        color: '#333A33'

    },
    flexEnd: {
        alignItems: 'flex-end',
        width: '20%',
        justifyContent: 'center',
    },
    scoreBox: {
        width: 72,
        height: 30,
        borderRadius: 10,
        backgroundColor: '#F2F2F2',
        justifyContent: 'center'
    },
    scoreText: {
        color: '#333A33',
        alignSelf: 'center'
    },

    // FOR BOTTOM SHEET -->>
    container: {
        flex: 1,
        marginTop:20,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: Colors.primaryColor,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },

})

export default Board;