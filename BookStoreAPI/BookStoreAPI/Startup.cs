using BookStoreAPI.Model;
using BookStoreAPI.Services;
using BookStoreAPI.Services.Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Stripe;
using System;

namespace BookStoreAPI
{
	public class Startup
	{

		public IConfiguration Configuration { get; }

		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}
			
		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			
			var conn = Configuration.GetConnectionString("DefaultConnection");
			var ver = new MariaDbServerVersion(new System.Version(10, 4, 24));
			services.AddDbContext<bookstoreContext>(otp => otp.UseMySql(conn, ver));
			services.AddControllers();
			services.AddSwaggerGen();
			services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
			services.AddCors(o =>
			{
				o.AddPolicy("CorsPolicy", builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
			});
			services.AddScoped<IBookSerivce, BookService>();
			services.AddScoped<ITopicService, TopicSerivce>();
			services.AddScoped<IInvoiceService, Services.InvoiceService>();
			services.AddScoped<IUserService, Services.UserService>();
			services.AddScoped<IInvoiceDetailService,InvoiceDetailService>();

		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
				app.UseSwagger();
				app.UseSwaggerUI();
			}
			StripeConfiguration.ApiKey = Configuration.GetSection("Stripe")["SecretKey"];
			app.UseHttpsRedirection();
			app.UseCors("CorsPolicy");
			app.UseRouting();

			app.UseEndpoints(endpoints =>
			{
				endpoints.MapControllers();
			});
		}
	}
}
