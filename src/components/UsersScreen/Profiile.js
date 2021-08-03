import React from 'react'
import { ViewBase, Text, Scrollview, StyleSheet } from 'react-native'
import UserSession from '../../Lib/Sessions';
import Colors from '../../Res/Colors'

class Profile extends React.Component{
    state={
        user: 'undefined',
        token: 'undefined'
    }
    componentDidMount=()=>{
        this.getUserData()
    };
    getUserData = async ()=>{
    //here we got the user data and its token   
        let user = await UserSession.instance.getUser()
        let token = await UserSession.instance.getToken(user.username)
        this.setState({user: user, token: token})
    }
    render(){
        return(
            <Scrollview style={StyleSheetList.scrollview}>
                <View style={StyleSheetList.container}>
                    <Text>profile</Text>
                </View>
            </Scrollview>
        )
    }
}
const styles = StyleSheet.create({

})
export default Profile