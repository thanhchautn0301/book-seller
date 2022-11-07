using System;
using System.Collections.Generic;

#nullable disable

namespace BookStoreAPI.Model
{
    public partial class Chatroom
    {
        public Chatroom()
        {
            Chatdetails = new HashSet<Chatdetail>();
        }

        public int IdChat { get; set; }
        public int IdUser { get; set; }

        public virtual ICollection<Chatdetail> Chatdetails { get; set; }
    }
}
