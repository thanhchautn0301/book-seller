using System;
using System.Collections.Generic;

#nullable disable

namespace BookStoreAPI.Model
{
    public partial class Book
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }
        public int Quantity { get; set; }
        public DateTime PublicationDate { get; set; }
        public int Page { get; set; }
        public int IdTopic { get; set; }
        public string IdPrice { get; set; }
        public int IdAuthor { get; set; }

        public virtual Author IdAuthorNavigation { get; set; }
        public virtual Topic IdTopicNavigation { get; set; }
        public virtual ICollection<Invoicedetail> Invoicedetails { get; set; }
    }
}
