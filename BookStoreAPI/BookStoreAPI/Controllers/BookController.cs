using BookStoreAPI.Dtos;
using BookStoreAPI.Model;
using BookStoreAPI.Responses;
using BookStoreAPI.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Dynamic;
using System.Security.Cryptography;

namespace BookStoreAPI.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class BookController : Controller
	{
		public readonly IBookSerivce _bookSerivce;
		public BookController(IBookSerivce bookSerivce)
		{
			_bookSerivce = bookSerivce;
		}

		[HttpGet]
		[HttpGet("getbooks/{pageNumber?}")]
		public IActionResult GetBooks(int? pageNumber)
		{
			var data = _bookSerivce.GetBooks(pageNumber);
			return Ok(new BaseResponse { Data = data });
		}

		[HttpPost]
		public IActionResult CreateBook([FromBody] BookReq book)
		{
			if(book is null) return BadRequest(new BaseResponse { StatusCode = 400, Message = "BadRequest" });
			if (!_bookSerivce.CreateBook(book))
			{
				return BadRequest(new BaseResponse { StatusCode = 400, Message = "BadRequest" });
			}
			return Ok(new BaseResponse());
		}

		[HttpPut]
		public IActionResult UpdateBook([FromBody] BookReq book)
		{
			if (book is null || book.Id <= 0) return BadRequest(new BaseResponse { StatusCode = 400, Message = "BadRequest" });
			if (!_bookSerivce.UpdateBook(book))
			{
				return BadRequest(new BaseResponse { StatusCode = 400, Message = "BadRequest" });
			}
			return Ok(new BaseResponse());
		}

		[HttpGet("getbook/{idBook}")]
		public IActionResult GetBook( int idBook)
		{
			if (idBook <= 0) return BadRequest(new BaseResponse { StatusCode = 400, Message = "BadRequest" });
			var book = _bookSerivce.GetBook(idBook);
			if (book is null)
			{
				return NotFound(new BaseResponse { StatusCode = 404, Message = "Not Found" });
			}
			return Ok(new BaseResponse { Data = book});
		}


		[HttpGet("Search")]
		public IActionResult Search(string? condition, string keywork)
		{
			var rs = _bookSerivce.Search(condition, keywork);
			return Ok(new BaseResponse { Data = new { totalPage = rs.Item1, listBook = rs.Item2 } });
		}



	}
}
