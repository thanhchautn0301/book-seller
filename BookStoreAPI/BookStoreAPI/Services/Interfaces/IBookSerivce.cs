
using BookStoreAPI.Model;
using System.Collections.Generic;
using BookStoreAPI.Dtos;
using System;

namespace BookStoreAPI.Services.Interfaces
{
	public interface IBookSerivce
	{
		public List<Book> GetBooks(int? pageNumber);
		public bool CreateBook(BookReq book);
		public bool UpdateBook(BookReq book);
		public Book GetBook(int idBook);
		public Tuple<int, List<Book>> Search(string condition, string keywork);
		public bool DelBook(int id);
	}
}
