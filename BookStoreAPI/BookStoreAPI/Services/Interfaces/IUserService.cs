using BookStoreAPI.Dtos;
using BookStoreAPI.Model;

namespace BookStoreAPI.Services.Interfaces
{
	public interface IUserService
	{
		public int CreateUser(UserReq user);
		public User Login(UserReq user);
		public bool DelUser(int id);
	}
}
