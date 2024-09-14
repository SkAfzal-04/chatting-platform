import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage =(props)=>{
    const chatProps=useMultiChatLogic('e8cc966c-ef05-4bf0-a168-44cddae0753e',
        props.user.username,
        props.user.secret
    );

    return (
    <div style={{height :'100vh'}}>
        <MultiChatSocket{...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height: '100%'}} />
    </div>
    )
}

export default ChatsPage