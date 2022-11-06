using BookStoreAPI.Dtos;
using BookStoreAPI.Model;
using BookStoreAPI.Services.Interfaces;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;

namespace BookStoreAPI.Services
{
	public class TopicSerivce : ITopicService
	{
		private readonly bookstoreContext _context;
		private readonly IMapper _mapper;
		public TopicSerivce(bookstoreContext context, IMapper mapper)
		{
			_context = context;
			_mapper = mapper;
		}

		public bool CreateTopic(TopicReq topic)
		{
			_context.Topics.Add(_mapper.Map<Topic>(topic));

			return _context.SaveChanges() > 0;
		}

		public List<Topic> GetTopic()
		{
			return _context.Topics.ToList();
		}

		public bool UpdateTopic(TopicReq topic)
		{
			var topicOld = _context.Topics.Find(topic.Id);
			if (topicOld is null) return false;
			_mapper.Map(topic, topicOld);
			return _context.SaveChanges() > 0;
		}
		public bool DelTopic(int idTopic)
		{
			var topic = _context.Topics.Find(idTopic);
			if (topic is null) return false;
			_context.Topics.Remove(topic);
			return _context.SaveChanges() > 0;
		}
	}
}
