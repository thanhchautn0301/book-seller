using BookStoreAPI.Dtos;
using BookStoreAPI.Model;
using BookStoreAPI.Responses;
using BookStoreAPI.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace BookStoreAPI.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class TopicController : Controller
	{
		private ITopicService _topicService;
		public TopicController(ITopicService topicService)
		{
			_topicService = topicService;
		}
		[HttpGet]
		public IActionResult GetTopics()
		{
			var data = _topicService.GetTopic();
			return Ok(new BaseResponse { Data = data });
		}

		[HttpPost]
		public IActionResult CreateTopic([FromBody] TopicReq topic)
		{
			if (topic is null) return BadRequest(new BaseResponse { StatusCode = 400, Message = "BadRequest" });
			if (!_topicService.CreateTopic(topic))
			{
				return BadRequest(new BaseResponse { StatusCode = 400, Message = "BadRequest" });
			}
			return Ok(new BaseResponse());
		}

		[HttpPut]
		public IActionResult UpdateTopic([FromBody] TopicReq topic)
		{
			if (topic is null || topic.Id < 0) return BadRequest(new BaseResponse { StatusCode = 400, Message = "BadRequest" });
			if (!_topicService.UpdateTopic(topic))
			{
				return BadRequest(new BaseResponse { StatusCode = 400, Message = "BadRequest" });
			}
			return Ok(new BaseResponse());
		}

		[HttpDelete]
		public IActionResult DelTopic(int idTopic)
		{
			if ( idTopic < 0) return BadRequest(new BaseResponse { StatusCode = 400, Message = "BadRequest" });
			if (!_topicService.DelTopic(idTopic))
			{
				return BadRequest(new BaseResponse { StatusCode = 400, Message = "BadRequest" });
			}
			return Ok(new BaseResponse());
		}

	}
}
