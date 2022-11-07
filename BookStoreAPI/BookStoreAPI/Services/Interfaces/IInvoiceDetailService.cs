using BookStoreAPI.Dtos;
using BookStoreAPI.Model;
using System.Collections.Generic;

namespace BookStoreAPI.Services.Interfaces
{
	public interface IInvoiceDetailService
	{
		public bool Create(InvoiceDetailReq invoiceDetailReq);
		public bool Update(InvoiceDetailReq invoiceDetailReq);
		public List<Invoicedetail> GetByIdInvoice(int id);
	}
}
