using AutoMapper;
using BookStoreAPI.Dtos;
using BookStoreAPI.Model;
using BookStoreAPI.Services.Interfaces;
using System.Linq;
using System.Security.Cryptography;
using System.Text;

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
			if (userExixts is not null) return -1;
			user.Password = GetMD5HashData(user.Password);
			_context.Users.Add(_mapper.Map<User>(user));
			return _context.SaveChanges() <= 0 ? 0 : 1;
		}

		public bool DelUser(int id)
		{
			var user = _context.Users.Find();
			if (user is null) return false;
			user.IsDel = true;
			return _context.SaveChanges() > 0;
		}

		public User Login(UserReq userReq)
		{
			var user = _context.Users.Where(e => e.Name == userReq.Name).FirstOrDefault();
			if (user is null) return null;
			if (ValidateMD5HashData(userReq.Password, user.Password))
			{
				user.Password = null;
				return user;
			}
			return null;
		}

		private string GetMD5HashData(string data)
		{
			//create new instance of md5
			MD5 md5 = MD5.Create();

			//convert the input text to array of bytes
			byte[] hashData = md5.ComputeHash(Encoding.Default.GetBytes(data));

			//create new instance of StringBuilder to save hashed data
			StringBuilder returnValue = new StringBuilder();

			//loop for each byte and add it to StringBuilder
			for (int i = 0; i < hashData.Length; i++)
			{
				returnValue.Append(hashData[i].ToString());
			}

			// return hexadecimal string
			return returnValue.ToString();

		}

		
		private bool ValidateMD5HashData(string inputData, string storedHashData)
		{
			//hash input text and save it string variable
			string getHashInputData = GetMD5HashData(inputData);

			if (string.Compare(getHashInputData, storedHashData) == 0)
			{
				return true;
			}
			else
			{
				return false;
			}
		}
	}
}
