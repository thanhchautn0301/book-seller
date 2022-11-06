using AutoMapper;
using BookStoreAPI.Dtos;
using BookStoreAPI.Model;
using BookStoreAPI.Services.Interfaces;
using Stripe;
using System.Collections.Generic;
using System.Linq;

namespace BookStoreAPI.Services
{
	public class BookService : IBookSerivce
	{
		private readonly int pageSize = 10;
		private readonly bookstoreContext _context;
		private readonly IMapper _mapper;

		public BookService(bookstoreContext context ,IMapper mapper)
		{
			_context = context;
			_mapper = mapper;
		}

		public List<Book> GetBooks(int? pageNumber)
		{
			if(pageNumber == null || pageNumber <= 1)
				return _context.Books.Skip(0).Take(pageSize).ToList();
			return _context.Books.Skip((int)( pageSize * (pageNumber -1))).Take(pageSize).ToList();
		}

		public bool CreateBook(BookReq  book)
		{
			_context.Books.Add(_mapper.Map<Book>(book));

			return _context.SaveChanges() > 0;
		}

		public bool UpdateBook(BookReq book)
		{
			var bookOld = _context.Books.Find(book.Id);
			_mapper.Map(bookOld, book);

			return _context.SaveChanges() > 0;
		}

		public Book GetBook(int idBook)
		{

			return _context.Books.Find(idBook);
		}
	}
}
