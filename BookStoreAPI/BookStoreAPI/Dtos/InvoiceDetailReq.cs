namespace BookStoreAPI.Dtos
{
	public class InvoiceDetailReq
	{
		public int Id { get; set; }
		public int IdProduct { get; set; }
		public int Price { get; set; }
		public string Name { get; set; }
		public int Quantity { get; set; }
		public int IdInvoice { get; set; }
		public bool IsDel { get; set; }
	}
}
