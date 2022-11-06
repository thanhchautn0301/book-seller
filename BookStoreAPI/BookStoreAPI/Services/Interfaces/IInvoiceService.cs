using BookStoreAPI.Dtos;

namespace BookStoreAPI.Services.Interfaces
{
	public interface IInvoiceService
	{
		public bool CreateInvoice(InvoiceReq invoice);
	}
}
