using System;

namespace BookStoreAPI.Dtos
{
	public class InvoiceReq
	{
		public int Id { get; set; }
		public string Status { get; set; }
		public int Total { get; set; }
		public DateTime Updated { get; set; }
		public string Name { get; set; }
		public string Phone { get; set; }
		public string Address { get; set; }
		public int ShippingFee { get; set; }
		public string PaymentCode { get; set; }
		public bool IsDel { get; set; } = false;
	}
}
