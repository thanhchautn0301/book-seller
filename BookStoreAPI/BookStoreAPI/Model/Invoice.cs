using System;
using System.Collections.Generic;

#nullable disable

namespace BookStoreAPI.Model
{
    public partial class Invoice
    {
        public int Id { get; set; }
        public DateTime Created { get; set; }
        public string Status { get; set; }
        public int Total { get; set; }
        public DateTime Updated { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public int ShippingFee { get; set; }
        public string PaymentCode { get; set; }
        public bool IsDel { get; set; }
    }
}
