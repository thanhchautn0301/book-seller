using BookStoreAPI.Dtos;
using BookStoreAPI.Responses;
using BookStoreAPI.Services;
using BookStoreAPI.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace BookStoreAPI.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class InvoiceDetailController : Controller
	{
		private readonly IInvoiceDetailService _invoiceDetailService;
		public InvoiceDetailController(IInvoiceDetailService invoiceDetailService)
		{
			_invoiceDetailService = invoiceDetailService;
		}


		[HttpPost]
		public IActionResult CreateInvoiceDetail([FromBody] InvoiceDetailReq invoiceDetailReq)
		{
			if (invoiceDetailReq is null) return BadRequest(new BaseResponse { StatusCode = 400, Message = "BadRequest" });
			if (!_invoiceDetailService.Create(invoiceDetailReq))
			{
				return BadRequest(new BaseResponse { StatusCode = 400, Message = "BadRequest" });
			}
			return Ok(new BaseResponse());
		}

		[HttpPut]
		public IActionResult UpdateInvoiceDetail([FromBody] InvoiceDetailReq invoiceDetailReq)
		{
			if (invoiceDetailReq is null || invoiceDetailReq.Id <= 0) return BadRequest(new BaseResponse { StatusCode = 400, Message = "BadRequest" });
			if (!_invoiceDetailService.Update(invoiceDetailReq))
			{
				return BadRequest(new BaseResponse { StatusCode = 400, Message = "BadRequest" });
			}
			return Ok(new BaseResponse());
		}


		[HttpGet]
		public IActionResult GetByIdInvoice(int idInvoice)
		{
			if (idInvoice <= 0) return BadRequest(new BaseResponse { StatusCode = 400, Message = "BadRequest" });
			
			return Ok(new BaseResponse { Data = _invoiceDetailService.GetByIdInvoice(idInvoice)});
		}
	}
}
