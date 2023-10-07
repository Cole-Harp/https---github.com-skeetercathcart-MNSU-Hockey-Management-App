

import getUsers from "@/lib/db_actions/getUsers";
import UserList from "@/Components/Messaging/UserList";
import { getAllMessages } from "@/lib/route";
import MessageList from "@/Components/Messaging/MessageList";
import MessageInput from "@/Components/Messaging/MessageInput";
import { getAllConversations } from "@/lib/Messages/getAllConversations";




export default async function usersLayout({ children } :{ children : React.ReactNode })
{
  const users = await getUsers();
  const messages = await getAllMessages();
  const convos = await getAllConversations();
 

    return (
        <div className = 'h-full flex flex-row'>
          <UserList items = {users}  convos = {convos}  />
        </div>
    )
}
  