using AutoMapper;
using BookStoreAPI.Dtos;
using BookStoreAPI.Model;
using BookStoreAPI.Services.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace BookStoreAPI.Services
{
	public class InvoiceService : IInvoiceService
	{
		private readonly bookstoreContext _context;
		private readonly IMapper _mapper;
		public InvoiceService(bookstoreContext context, IMapper mapper)
		{
			_context = context;
			_mapper = mapper;
		}
		public bool CreateInvoice(InvoiceReq invoice)
		{
			_context.Invoices.Add(_mapper.Map<Model.Invoice>(invoice));

			return _context.SaveChanges() > 0;
		}

		public bool DelInvoice(int id)
		{
			var invoice = _context.Invoices.Find(id);
			if (invoice == null) return false;
			invoice.IsDel = true;
			return _context.SaveChanges() > 0;
		}

		public bool UpdateInvoice(InvoiceReq invoiceReq)
		{
			var invoice = _context.Invoices.Find(invoiceReq.Id);
			if(invoice == null) return false;
			_mapper.Map(invoice, invoiceReq);
			return _context.SaveChanges() > 0;
		}

		public List<Invoice> GetInvoices()
		{
			return _context.Invoices.ToList();
		}

		public Invoice GetById(int id)
		{
			return _context.Invoices.Find(id);
		}
	}
}
