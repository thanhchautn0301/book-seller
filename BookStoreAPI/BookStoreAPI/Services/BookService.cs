﻿using AutoMapper;
using BookStoreAPI.Dtos;
using BookStoreAPI.Model;
using BookStoreAPI.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BookStoreAPI.Services
{
	public class BookService : IBookSerivce
	{
		private readonly int pageSize = 9;
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
				return _context.Books.Where(e => e.IsDel == false).Skip(0).Take(pageSize).ToList();
			return _context.Books.Where(e => e.IsDel == false).Skip((int)( pageSize * (pageNumber -1))).Take(pageSize).ToList();
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

		public Tuple<int, List<Book>> Search(string condition, string keywork)
		{
			var books = new List<Book>();
			if (keywork is null)
			{
				books = _context.Books.Where(e => e.IsDel == false).Skip(0).Take(pageSize).ToList();
				return Tuple.Create( books.Count()/9 + 1, books);
			}
			switch (condition)
			{
				case "topic":
					books = _context.Books.Where(e => e.IdTopicNavigation.Name.Contains(keywork) && e.IsDel == false).Skip(0).Take(pageSize).ToList();
					return Tuple.Create(books.Count() / 9 + 1, books);
				case "author":
					books = _context.Books.Where(e => e.IdAuthorNavigation.Name.Contains(keywork) && e.IsDel == false).Skip(0).Take(pageSize).ToList();
					return Tuple.Create(books.Count() / 9 + 1, books);
				default:
					books = _context.Books.Where(e => e.Name.Contains(keywork) && e.IsDel == false).Skip(0).Take(pageSize).ToList();
					return Tuple.Create(books.Count() / 9 + 1, books);
			}
		}

		public bool DelBook(int id)
		{
			var book = _context.Books.Find(id);
			if(book is null) return false;
			book.IsDel = true;
			return _context.SaveChanges() > 0;
		}
	}
}