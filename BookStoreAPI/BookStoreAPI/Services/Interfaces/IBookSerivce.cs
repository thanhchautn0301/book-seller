
using BookStoreAPI.Model;
using System.Collections.Generic;
using BookStoreAPI.Dtos;
namespace BookStoreAPI.Services.Interfaces
{
	public interface IBookSerivce
	{
		public List<Book> GetBooks(int? pageNumber);
		public bool CreateBook(BookReq book);
		public bool UpdateBook(BookReq book);
		public Book GetBook(int idBook);
	}
}
