using BookStoreAPI.Dtos;
using BookStoreAPI.Model;
using BookStoreAPI.Responses;
using BookStoreAPI.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace BookStoreAPI.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class InvoiceController : Controller
	{
		private readonly IInvoiceService _invoiceService;
		public InvoiceController(IInvoiceService invoiceService)
		{
			_invoiceService = invoiceService;
		}
		[HttpPost]
		public IActionResult CreateInvoice([FromBody] InvoiceReq invoice)
		{
			if (invoice is null) return BadRequest(new BaseResponse { StatusCode = 400, Message = "BadRequest" });
			if (!_invoiceService.CreateInvoice(invoice))
			{
				return BadRequest(new BaseResponse { StatusCode = 400, Message = "BadRequest" });
			}
			return Ok(new BaseResponse());
		}
	}
}
