using System;
using System.Collections.Generic;

#nullable disable

namespace BookStoreAPI.Model
{
    public partial class Topic
    {
    

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Book> Books { get; set; }
    }
}
