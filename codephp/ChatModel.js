import mongoose from "mongoose"
const ChatSchema = mongoose.Schema(
    {
        menbers:{
            type: Array,
        }
    },
    {
        timestamps:true,
    }
)
const ChatModel = mongoose.model("chat",ChatModel)
export default ChatModel