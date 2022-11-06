using BookStoreAPI.Dtos;
using BookStoreAPI.Model;
using BookStoreAPI.Responses;
using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Hosting.Server.Features;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Stripe;
using Stripe.Checkout;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookStoreAPI.Controllers
{

	[ApiController]
	[Route("[controller]")]

	public class CheckoutController : ControllerBase
	{
		private readonly IConfiguration _configuration;


		public CheckoutController(IConfiguration configuration, bookstoreContext db)
		{
			_configuration = configuration;
		}

		[HttpPost]
		public async Task<ActionResult> CheckoutOrder([FromBody] List<BookReq> books, [FromServices] IServiceProvider sp)
		{
			
			// Build the URL to which the customer will be redirected after paying.
			var server = sp.GetRequiredService<IServer>();

			var serverAddressesFeature = server.Features.Get<IServerAddressesFeature>();

			string? thisApiUrl = null;

			if (serverAddressesFeature is not null)
			{
				thisApiUrl = serverAddressesFeature.Addresses.FirstOrDefault();
			}

			if (thisApiUrl is not null)
			{
				var session = await CheckOut(books, thisApiUrl);

				return Ok(new BaseResponse { Data = new { url = session.Url}} );
			}
			else
			{
				return StatusCode(500);
			}
		}

		[NonAction]
		public async Task<Session> CheckOut(List<BookReq> books, string thisApiUrl)
		{
			// Create a payment flow from the items in the cart.
			// Gets sent to Stripe API.
			var options = new SessionCreateOptions
			{
				// Stripe calls the URLs below when certain checkout events happen such as success and failure.
				SuccessUrl = $"{thisApiUrl}/checkout/success",
				CancelUrl = $"{thisApiUrl}/checkout/fail",  // Checkout cancelled.
				PaymentMethodTypes = new List<string> // Only card available in test mode?
            {
				"card"
			},
				Mode = "payment" // One-time payment. Stripe supports recurring 'subscription' payments.
			};
			var listLineItem =  new List<SessionLineItemOptions>();
			books.ForEach(e => listLineItem.Add(new SessionLineItemOptions
			{
				Price = e.IdPrice,
				Quantity = e.Quantity
			}));
			options.LineItems = listLineItem;
			var service = new SessionService();
			var session = await service.CreateAsync(options);

			return session;
		}

		[HttpGet("success")]
		// Automatic query parameter handling from ASP.NET.
		// Example URL: https://localhost:7051/checkout/success?sessionId=si_123123123123
		public ActionResult CheckoutSuccess()
		{
			/*var sessionService = new SessionService();
			var session = sessionService.Get(sessionId);

			// Here you can save order and customer details to your database.
			var total = session.AmountTotal.Value;
			var customerEmail = session.CustomerDetails.Email;*/

			return Ok();
		}
	}
}