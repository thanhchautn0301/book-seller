using BookStoreAPI.Dtos;
using BookStoreAPI.Model;
using BookStoreAPI.Responses;
using BookStoreAPI.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace BookStoreAPI.Controllers
{

	[ApiController]
	[Route("[controller]")]
	public class UserController : Controller
	{
		private readonly IUserService _userService;
		public UserController(IUserService userService)
		{
			_userService = userService;
		}

		[HttpPost]
		public IActionResult CreateUser([FromBody] UserReq user)
		{
			if (user is null) return BadRequest(new BaseResponse { StatusCode = 400, Message = "BadRequest" });
			int rs = _userService.CreateUser(user);
			if (rs == 0)
			{
				return BadRequest(new BaseResponse { StatusCode = 400, Message = "BadRequest" });
			}
			if (rs == -1)
			{
				return BadRequest(new BaseResponse { StatusCode = 400, Message = "Username exists" });
			}
			return Ok(new BaseResponse());
		}

		[HttpPost("login")]
		public IActionResult Login([FromBody] UserReq user)
		{
			if (user is null) return BadRequest(new BaseResponse { StatusCode = 400, Message = "BadRequest" });
			var rs = _userService.Login(user);
			if (rs is null)
			{
				return Ok(new BaseResponse { StatusCode = 200, Message = "Username or Pssword invalid" });
			}
			return Ok(new BaseResponse { Data = rs });
		}
		[HttpDelete]
		public IActionResult DelUser(int id)
		{
			if (id <= 0) return BadRequest(new BaseResponse { StatusCode = 400, Message = "BadRequest" });
		
			if (!_userService.DelUser(id))
			{
				return BadRequest(new BaseResponse { StatusCode = 400, Message = "BadRequest" });
			}
			return Ok(new BaseResponse ());
		}
	}
}

