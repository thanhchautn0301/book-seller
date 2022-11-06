using AutoMapper;
using BookStoreAPI.Dtos;
using BookStoreAPI.Model;
using BookStoreAPI.Services.Interfaces;
using System.Linq;

namespace BookStoreAPI.Services
{
	public class UserService : IUserService
	{
		private readonly bookstoreContext _context;
		private readonly IMapper _mapper;

		public UserService(bookstoreContext context, IMapper mapper)
		{
			_context = context;
			_mapper = mapper;
		}

		public int CreateUser(UserReq user)
		{
			var userExixts = _context.Users.Where(e => e.Name == user.Name).FirstOrDefault();
			if (userExixts is null) return -1;
			user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
			_context.Users.Add(_mapper.Map<User>(user));
			return _context.SaveChanges() <= 0 ? 0 : 1;
		}


		public User Login(UserReq userReq)
		{
			var user = _context.Users.Where(e => e.Name == userReq.Name).FirstOrDefault();
			if (user is null) return null;
			if (BCrypt.Net.BCrypt.Verify(userReq.Password, user.Password))
			{
				return user;
			}
			return null;
		}
	}
}
