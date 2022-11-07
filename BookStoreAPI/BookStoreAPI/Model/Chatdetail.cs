using System;
using System.Collections.Generic;

#nullable disable

namespace BookStoreAPI.Model
{
    public partial class Chatdetail
    {
        public int Id { get; set; }
        public int IdUser { get; set; }
        public string Content { get; set; }
        public int IdChatRoom { get; set; }
        public bool IsDel { get; set; }

        public virtual Chatroom IdChatRoomNavigation { get; set; }
        public virtual User IdUserNavigation { get; set; }
    }
}
