﻿namespace BookStoreAPI.Dtos
{
	public class TopicReq
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public bool IsDel { get; set; } = false;
	}
}