import React, { useEffect, useState } from "react";
import { Text, View, Image, FlatList, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Heart from 'react-native-vector-icons/Entypo'
import HeartFill from 'react-native-vector-icons/AntDesign'
import Chat from 'react-native-vector-icons/Ionicons'
import { getPost } from "../redux/actions/postAction";
import { useSelector, connect, useDispatch } from "react-redux";
import VideoPlayer from 'react-native-video-player'
import { Colors } from "../utils/Constants";
const Home = ({ navigation }) => {
    const DATA = [
        {
            id: '1',
            title: 'Matthieu Laroche',
            image: require('../../assets/images/Image1.png'),
            icon: require('../../assets/logo/icon1.png'),
            description: 'Mauris ultrices ut mauris ut elementum nunc. Quisque eu vulputate nunc. Sed odio lectus.',
        },
        {
            id: '2',
            title: 'Carlos Vanelliope',
            image: require('../../assets/images/Image2.png'),
            icon: require('../../assets/logo/icon2.png'),
            description: 'Mauris ultrices ut mauris ut elementum nunc. Quisque eu vulputate nunc. Sed odio lectus.',
        },
        {
            id: '1',
            title: 'Matthieu Laroche',
            image: require('../../assets/images/Image1.png'),
            icon: require('../../assets/logo/icon1.png'),
            description: 'Mauris ultrices ut mauris ut elementum nunc. Quisque eu vulputate nunc. Sed odio lectus.',
        },
        {
            id: '2',
            title: 'Carlos Vanelliope',
            image: require('../../assets/images/Image2.png'),
            icon: require('../../assets/logo/icon2.png'),
            description: 'Mauris ultrices ut mauris ut elementum nunc. Quisque eu vulputate nunc. Sed odio lectus.',
        }, {
            id: '1',
            title: 'Matthieu Laroche',
            image: require('../../assets/images/Image1.png'),
            icon: require('../../assets/logo/icon1.png'),
            description: 'Mauris ultrices ut mauris ut elementum nunc. Quisque eu vulputate nunc. Sed odio lectus.',
        },
        {
            id: '2',
            title: 'Carlos Vanelliope',
            image: require('../../assets/images/Image2.png'),
            icon: require('../../assets/logo/icon2.png'),
            description: 'Mauris ultrices ut mauris ut elementum nunc. Quisque eu vulputate nunc. Sed odio lectus.',
        },
    ];
    const renderItem = ({ item, index }) => (
        <View style={{ marginRight: 5 }}>
            <VideoPlayer
                style={{ borderRadius: 8, backgroundColor: Colors.primaryColor }}
                video={require('../assets/football.mp4')}
                videoWidth={200}
                resizeMode="stretch"
                videoHeight={200}
                thumbnail={require('../assets/Playing-Football.png')}
            />
            <View style={{ paddingTop: 10, flexDirection: 'row' }}>
                <Image source={item.icon} resizeMode='contain' style={{ alignSelf: 'baseline', borderRadius: 40, height: 30, width: 30 }} />
                <Text style={{ paddingLeft: 8, color: "#000" }}>{item.title}</Text>
            </View>
        </View>
    );
    const rendetItemApi = ({ item, index }) => (
        <View>
            <Image source={{ uri: item.url }} style={{ alignSelf: 'baseline', height: 100, width: 100 }} resizeMode={'contain'} />
        </View>
    );
    const dispatch = useDispatch();
    const userName = useSelector(state => state.auth.user)
    const state = useSelector(state => state.postReducer.data)
    const [like, setLike] = useState([]);
    const newArr = Object.keys(state).map((key) => {
        state[key]._id = key;
        return state[key];
    });
    useEffect(() => {
        // dispatch(getPost())
    }, [])
    const handleSelection = (id) => {
        var selectedIds = [...like] // clone state

        if (selectedIds.includes(id)) {
            let index = selectedIds.indexOf(id)
            selectedIds.splice(index, 1)
            setLike(selectedIds)
        }
        else {
            selectedIds.push(id)
            setLike(selectedIds)
        }
    }
    return (
        <ScrollView>
            <View style={{ paddingLeft: 10, flexDirection: 'row', height: 80, paddingTop: 40, backgroundColor: '#7EAA7C', justifyContent: 'space-between' }}>
                <Icon name="menu" size={20} onPress={() => navigation.openDrawer()} color='#fff' />
                <View>
                    <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}>SearchYourTeam</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('InputForm')} style={{ paddingRight: 15 }}>
                    <Text style={{ color: '#fff', paddingTop: 5 }}>Add Post</Text>
                </TouchableOpacity>
                {/* <Chat name="add" size={25} color={'#fff'}   /> */}
            </View>
            <View style={{ paddingLeft: 15 }}>
                <View style={{ paddingTop: 25 }}>
                    <Text style={{ fontSize: 17, color: "#000" }}>Trending </Text>
                </View>

                <View style={{ marginTop: 10 }}>
                    <FlatList
                        horizontal
                        data={DATA}
                        keyExtractor={item => item.id}
                        renderItem={renderItem}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
            {/* <TouchableOpacity onPress={() => {}}> */}
            <View style={styles.postDetails}>
                <FlatList
                    data={DATA}
                    extraData={like}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => (

                        <View style={{ marginTop: 15, paddingBottom: 10 }}>
                            <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                                <Image source={item.icon} resizeMode='contain' style={{ height: 40, width: 40, borderRadius: 50 }} />
                                <View style={{ flexDirection: 'column', paddingLeft: 10 }}>
                                    <Text style={{ color: "#000", alignSelf: 'center', fontSize: 18, fontWeight: 'bold', paddingTop: 6 }}>{item.title}</Text>
                                    <Text style={{ opacity: 0.6, marginVertical: 4 }}>1  hour  ago</Text>
                                </View>
                                <Icon name='more-horizontal' size={30} style={{ position: 'absolute', right: 0, opacity: 0.5, paddingRight: 20 }} />
                            </View>

                            <Image source={item.image}
                                resizeMode='stretch'
                                style={{ height: 180, width: '90%', borderRadius: 4, alignSelf: 'center', marginTop: 8 }} />

                            <Text style={{ color: "#666666", paddingHorizontal: 30, fontSize: 16, paddingVertical: 18 }}>
                                {item.description}
                                {/* Mauris ultrices ut mauris ut elementum nunc. Quisque eu vulputate nunc. Sed odio lectus. */}
                            </Text>
                            <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingTop: 10 }}>
                                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => handleSelection(item?._id)}>
                                    <HeartFill name='heart' size={22} style={{ color: item._id == like.includes(item._id) ? 'red' : '#ccc' }} />
                                    <Text style={{ color: like ? '#7EAA7C' : '#ccc', paddingHorizontal: 10 }}>{item._id == like.includes(item._id) ? 1 : 0}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Chat name='chatbubble-outline' size={20} style={{ color: '#7EAA7C' }} />
                                    <Text style={{ color: '#7EAA7C', paddingLeft: 10 }}>0</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        position: 'absolute', right: 20, top: 8, backgroundColor: '#7EAA7C',
                                        borderRadius: 20, padding: 4, alignItems: 'center', justifyContent: 'center'
                                    }}>
                                    <Chat name='share-social-outline' size={20} color="#fff"
                                    />
                                </TouchableOpacity>
                            </View>

                        </View>
                    )}
                // ListFooterComponent={()=>{
                //     return(
                //         <View style={{height:400}}/>
                //     )
                // }}
                />
            </View>
            <View style={{ marginTop: 20 }} />
            {/* </TouchableOpacity> */}
        </ScrollView>
    )
}
// const mapStateToProps = ({ postReducer}) => {
//     const {
//     } = postReducer;
//     return {
//       selectedBranch
//     };
//   };
export default
    // connect(mapStateToProps, {getPost})
    (Home);

const styles = StyleSheet.create({
    postDetails: {
        marginTop:30,
        backgroundColor:'#eee',
        // marginHorizontal:20,
        shadowColor:'#a7a7a7',
        shadowRadius:10,
        shadowOpacity:0.7,
        shadowOffset:{
            width:0,
            height:2
        },
        // borderTopLeftRadius:20,
        // borderTopRightRadius:20,
    }
});