using System;
using System.Collections.Generic;

#nullable disable

namespace BookStoreAPI.Model
{
    public partial class User
    {
      
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsAdmin { get; set; }
        public string Password { get; set; }

        public virtual ICollection<Chatdetail> Chatdetails { get; set; }
    }
}
