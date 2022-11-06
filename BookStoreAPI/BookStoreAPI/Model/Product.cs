using System;

namespace BookStoreAPI.Model
{
	public class Product
	{
		public string Id { get; set; } = Guid.NewGuid().ToString();

		public string Title { get; set; }

		public long Pirce { get; set; }


	}
}
