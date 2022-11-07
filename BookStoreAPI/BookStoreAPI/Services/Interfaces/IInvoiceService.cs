using BookStoreAPI.Dtos;
using BookStoreAPI.Model;
using System.Collections.Generic;

namespace BookStoreAPI.Services.Interfaces
{
	public interface IInvoiceService
	{
		public bool CreateInvoice(InvoiceReq invoice);
		public bool UpdateInvoice(InvoiceReq invoiceReq);
		public bool DelInvoice(int id);
		public List<Invoice> GetInvoices();
		public Invoice GetById(int id);
	}
}
