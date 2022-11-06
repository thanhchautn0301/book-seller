namespace BookStoreAPI.Responses
{
	public class BaseResponse
	{
		public int StatusCode { get; set; } = 200;
		public string Message { get; set; } = "isSuccess";
		public object Data { get; set; }
	}
}
