using AutoMapper;
using BookStoreAPI.Dtos;
using BookStoreAPI.Model;
using BookStoreAPI.Services.Interfaces;

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
			_context.Ivoices.Add(_mapper.Map<Model.Ivoice>(invoice));

			return _context.SaveChanges() > 0;
		}
	}
}
