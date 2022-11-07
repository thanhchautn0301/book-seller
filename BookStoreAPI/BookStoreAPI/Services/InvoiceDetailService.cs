using AutoMapper;
using BookStoreAPI.Dtos;
using BookStoreAPI.Model;
using BookStoreAPI.Services.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace BookStoreAPI.Services
{
	public class InvoiceDetailService : IInvoiceDetailService
	{
		private readonly bookstoreContext _context;
		private readonly IMapper _mapper;
		public InvoiceDetailService(bookstoreContext context, IMapper mapper)
		{
			_context = context;
			_mapper = mapper;
		}

		public bool Create(InvoiceDetailReq invoiceDetailReq)
		{
			_context.Invoicedetails.Add(_mapper.Map<Invoicedetail>(invoiceDetailReq));

			return _context.SaveChanges() > 0;
		}

		public List<Invoicedetail> GetByIdInvoice(int idInvoice)
		{
			return _context.Invoicedetails.Where(e => e.IdInvoice == idInvoice).ToList();
		}

		public bool Update(InvoiceDetailReq invoiceDetailReq)
		{
			var invoicedetail= _context.Invoicedetails.Find(invoiceDetailReq);
			_mapper.Map(invoicedetail, invoiceDetailReq);
			return _context.SaveChanges() > 0;
		}
	}
}
