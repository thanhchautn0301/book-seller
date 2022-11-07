using System;
using System.Collections.Generic;

#nullable disable

namespace BookStoreAPI.Model
{
    public partial class Invoicedetail
    {
        public Invoicedetail()
        {
            InverseIdInvoiceNavigation = new HashSet<Invoicedetail>();
        }

        public int Id { get; set; }
        public int IdProduct { get; set; }
        public int Price { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; }
        public int IdInvoice { get; set; }
        public bool IsDel { get; set; }

        public virtual Invoicedetail IdInvoiceNavigation { get; set; }
        public virtual Book IdProductNavigation { get; set; }
        public virtual ICollection<Invoicedetail> InverseIdInvoiceNavigation { get; set; }
    }
}
