using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace BookStoreAPI.Model
{
    public partial class bookstoreContext : DbContext
    {
        public bookstoreContext()
        {
        }

        public bookstoreContext(DbContextOptions<bookstoreContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Author> Authors { get; set; }
        public virtual DbSet<Book> Books { get; set; }
        public virtual DbSet<Chatdetail> Chatdetails { get; set; }
        public virtual DbSet<Chatroom> Chatrooms { get; set; }
        public virtual DbSet<Invoicedetail> Invoicedetails { get; set; }
        public virtual DbSet<Ivoice> Ivoices { get; set; }
        public virtual DbSet<Topic> Topics { get; set; }
        public virtual DbSet<User> Users { get; set; }

  

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_general_ci");

            modelBuilder.Entity<Author>(entity =>
            {
                entity.ToTable("author");

                entity.Property(e => e.Id).HasColumnType("int(11)");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Book>(entity =>
            {
                entity.ToTable("book");

                entity.HasIndex(e => e.IdAuthor, "IdAuthor");

                entity.HasIndex(e => e.IdTopic, "IdTopic");

                entity.Property(e => e.Id).HasColumnType("int(11)");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.IdAuthor).HasColumnType("int(11)");

                entity.Property(e => e.IdPrice)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.IdTopic).HasColumnType("int(11)");

                entity.Property(e => e.Image)
                    .IsRequired()
                    .HasMaxLength(500);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Page).HasColumnType("int(11)");

                entity.Property(e => e.Price).HasColumnType("int(11)");

                entity.Property(e => e.PublicationDate).HasColumnType("date");

                entity.Property(e => e.Quantity).HasColumnType("int(11)");

                entity.HasOne(d => d.IdAuthorNavigation)
                    .WithMany(p => p.Books)
                    .HasForeignKey(d => d.IdAuthor)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("book_ibfk_2");

                entity.HasOne(d => d.IdTopicNavigation)
                    .WithMany(p => p.Books)
                    .HasForeignKey(d => d.IdTopic)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("book_ibfk_1");
            });

            modelBuilder.Entity<Chatdetail>(entity =>
            {
                entity.ToTable("chatdetail");

                entity.HasIndex(e => e.IdUser, "IdUser");

                entity.HasIndex(e => e.IdChatRoom, "idChatRoom");

                entity.Property(e => e.Id).HasColumnType("int(11)");

                entity.Property(e => e.Content)
                    .IsRequired()
                    .HasMaxLength(500)
                    .HasColumnName("content");

                entity.Property(e => e.IdChatRoom)
                    .HasColumnType("int(11)")
                    .HasColumnName("idChatRoom");

                entity.Property(e => e.IdUser).HasColumnType("int(11)");

                entity.HasOne(d => d.IdChatRoomNavigation)
                    .WithMany(p => p.Chatdetails)
                    .HasForeignKey(d => d.IdChatRoom)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("chatdetail_ibfk_1");

                entity.HasOne(d => d.IdUserNavigation)
                    .WithMany(p => p.Chatdetails)
                    .HasForeignKey(d => d.IdUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("chatdetail_ibfk_2");
            });

            modelBuilder.Entity<Chatroom>(entity =>
            {
                entity.HasKey(e => e.IdChat)
                    .HasName("PRIMARY");

                entity.ToTable("chatroom");

                entity.Property(e => e.IdChat).HasColumnType("int(11)");

                entity.Property(e => e.IdUser).HasColumnType("int(11)");
            });

            modelBuilder.Entity<Invoicedetail>(entity =>
            {
                entity.ToTable("invoicedetail");

                entity.HasIndex(e => e.IdInvoice, "IdInvoice");

                entity.HasIndex(e => e.IdProduct, "IdProduct");

                entity.Property(e => e.Id).HasColumnType("int(11)");

                entity.Property(e => e.IdInvoice).HasColumnType("int(11)");

                entity.Property(e => e.IdProduct).HasColumnType("int(11)");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(20);

                entity.Property(e => e.Price)
                    .HasColumnType("int(11)")
                    .HasColumnName("price");

                entity.Property(e => e.Quantity).HasColumnType("int(11)");

                entity.HasOne(d => d.IdInvoiceNavigation)
                    .WithMany(p => p.InverseIdInvoiceNavigation)
                    .HasForeignKey(d => d.IdInvoice)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("invoicedetail_ibfk_1");

                entity.HasOne(d => d.IdProductNavigation)
                    .WithMany(p => p.Invoicedetails)
                    .HasForeignKey(d => d.IdProduct)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("invoicedetail_ibfk_2");
            });

            modelBuilder.Entity<Ivoice>(entity =>
            {
                entity.ToTable("ivoice");

                entity.Property(e => e.Id).HasColumnType("int(11)");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Created).HasColumnType("datetime");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.PaymentCode)
                    .IsRequired()
                    .HasMaxLength(100)
                    .HasColumnName("paymentCode");

                entity.Property(e => e.Phone)
                    .IsRequired()
                    .HasMaxLength(12);

                entity.Property(e => e.ShippingFee)
                    .HasColumnType("int(11)")
                    .HasColumnName("shippingFee");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.Total).HasColumnType("int(11)");

                entity.Property(e => e.Updated).HasColumnType("datetime");
            });

            modelBuilder.Entity<Topic>(entity =>
            {
                entity.ToTable("topic");

                entity.Property(e => e.Id).HasColumnType("int(11)");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("user");

                entity.Property(e => e.Id).HasColumnType("int(11)");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(500);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
