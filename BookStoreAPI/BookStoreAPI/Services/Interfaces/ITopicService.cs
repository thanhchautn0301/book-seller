using BookStoreAPI.Model;
using System.Collections.Generic;
using BookStoreAPI.Dtos;

namespace BookStoreAPI.Services.Interfaces
{
	public interface ITopicService
	{
		public List<Topic> GetTopic();
		public bool CreateTopic(TopicReq topic);
		public bool UpdateTopic(TopicReq topic);
		public bool DelTopic(int idTopic);
	}
}
