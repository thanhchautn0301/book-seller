namespace BookStoreAPI.Dtos
{
	public class UserReq
	{

		public int Id { get; set; }
		public string Name { get; set; }
		public bool IsAdmin { get; set; } = false;
		public string Password { get; set; }
		public bool IsDel { get; set; } = false;
	}
}
