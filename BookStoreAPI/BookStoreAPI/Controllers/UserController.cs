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

		[HttpPost]
		public IActionResult Login([FromBody] UserReq userReq)
		{
			if (userReq is null) return BadRequest(new BaseResponse { StatusCode = 400, Message = "BadRequest" });
			var user = _userService.Login(userReq);
			if (user is null)
			{
				return Ok(new BaseResponse { StatusCode = 200, Message = "User or Password Invalid" });
			}
			return Ok(new BaseResponse { Data = user });
		}
			
		}
	}

