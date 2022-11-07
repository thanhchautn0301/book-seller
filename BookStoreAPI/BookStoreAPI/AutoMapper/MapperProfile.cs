using AutoMapper;
using BookStoreAPI.Dtos;
using BookStoreAPI.Model;

namespace BookStoreAPI.AutoMapper
{
	public class MapperProfile : Profile
	{

		public  MapperProfile ()
		{
			MapBook();
			MapTopi();
			MapInvoice();
			MapUser();
			MapInvoiceDetail();
		}
		private void MapBook()
		{
			CreateMap<BookReq, Book>();
		}
		private void MapTopi()
		{
			CreateMap<TopicReq, Topic>();
		}

		private void MapInvoice()
		{
			CreateMap<InvoiceReq, Topic>();
		}
		private void MapUser()
		{
			CreateMap<UserReq, User>();
		}
		private void MapInvoiceDetail()
		{
			CreateMap<InvoiceDetailReq, Invoicedetail>();
		}
	}
}
