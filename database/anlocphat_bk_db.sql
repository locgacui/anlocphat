USE [master]
GO
/****** Object:  Database [anlocphat]    Script Date: 4/5/2024 6:53:58 AM ******/
CREATE DATABASE [anlocphat]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'anlocphat', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\anlocphat.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'anlocphat_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\anlocphat_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [anlocphat] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [anlocphat].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [anlocphat] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [anlocphat] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [anlocphat] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [anlocphat] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [anlocphat] SET ARITHABORT OFF 
GO
ALTER DATABASE [anlocphat] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [anlocphat] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [anlocphat] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [anlocphat] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [anlocphat] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [anlocphat] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [anlocphat] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [anlocphat] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [anlocphat] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [anlocphat] SET  DISABLE_BROKER 
GO
ALTER DATABASE [anlocphat] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [anlocphat] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [anlocphat] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [anlocphat] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [anlocphat] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [anlocphat] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [anlocphat] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [anlocphat] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [anlocphat] SET  MULTI_USER 
GO
ALTER DATABASE [anlocphat] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [anlocphat] SET DB_CHAINING OFF 
GO
ALTER DATABASE [anlocphat] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [anlocphat] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [anlocphat] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [anlocphat] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [anlocphat] SET QUERY_STORE = OFF
GO
USE [anlocphat]
GO
/****** Object:  Table [dbo].[accounts]    Script Date: 4/5/2024 6:53:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[accounts](
	[id] [uniqueidentifier] NOT NULL,
	[username] [nvarchar](50) NULL,
	[password] [nvarchar](max) NULL,
	[isActive] [bit] NULL,
	[idEmployee] [uniqueidentifier] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[employees]    Script Date: 4/5/2024 6:53:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[employees](
	[id] [uniqueidentifier] NOT NULL,
	[code] [nvarchar](50) NOT NULL,
	[name] [nvarchar](max) NOT NULL,
	[dateOfBirth] [date] NULL,
	[sex] [int] NULL,
	[citizenIdentificationNumber] [nvarchar](50) NULL,
	[address] [nvarchar](max) NULL,
	[phoneNumber] [nvarchar](50) NULL,
	[email] [nvarchar](50) NULL,
	[picturePath] [nvarchar](max) NULL,
	[allowViewOtherEmployeeTransactions] [bit] NULL,
	[allowViewGeneralInformation] [bit] NULL,
	[idLanguageSystem] [uniqueidentifier] NULL,
	[note] [nvarchar](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[groupItems]    Script Date: 4/5/2024 6:53:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[groupItems](
	[id] [uniqueidentifier] NOT NULL,
	[name] [nvarchar](max) NULL,
	[idGroupItem] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[items]    Script Date: 4/5/2024 6:53:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[items](
	[id] [uniqueidentifier] NOT NULL,
	[code] [nvarchar](50) NOT NULL,
	[name] [nvarchar](max) NOT NULL,
	[idGroupItem] [uniqueidentifier] NULL,
	[idTypeItem] [int] NULL,
	[idBrandItem] [uniqueidentifier] NULL,
	[idLocation] [uniqueidentifier] NULL,
	[minimumInventory] [int] NULL,
	[maximumInventory] [int] NULL,
	[price] [numeric](10, 2) NULL,
	[inventory] [int] NULL,
	[weight] [int] NULL,
	[weightType] [int] NULL,
	[sizeWidth] [int] NULL,
	[sizeLength] [int] NULL,
	[sizeType] [int] NULL,
	[defaultUnit] [nvarchar](50) NULL,
	[describeItem] [nvarchar](max) NULL,
	[noteItem] [nvarchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[accounts] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[employees] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[groupItems] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[items] ADD  DEFAULT (newid()) FOR [id]
GO
ALTER TABLE [dbo].[items] ADD  DEFAULT ((0)) FOR [minimumInventory]
GO
ALTER TABLE [dbo].[items] ADD  DEFAULT ((999999999)) FOR [maximumInventory]
GO
ALTER TABLE [dbo].[items] ADD  DEFAULT ('') FOR [defaultUnit]
GO
ALTER TABLE [dbo].[items] ADD  DEFAULT ('') FOR [describeItem]
GO
ALTER TABLE [dbo].[items] ADD  DEFAULT ('') FOR [noteItem]
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'mã' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'items', @level2type=N'COLUMN',@level2name=N'code'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Tên sản phẩm' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'items', @level2type=N'COLUMN',@level2name=N'name'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Nhóm hàng' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'items', @level2type=N'COLUMN',@level2name=N'idGroupItem'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Loại hàng
    1 - Hàng hóa thường
    2 - Hàng hóa - sản xuất
    3 - Dịch vụ
    4 - Combo - Đóng gói' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'items', @level2type=N'COLUMN',@level2name=N'idTypeItem'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Thương hiệu' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'items', @level2type=N'COLUMN',@level2name=N'idBrandItem'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Vị trí hàng hóa' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'items', @level2type=N'COLUMN',@level2name=N'idLocation'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Định mức tồn ít nhất' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'items', @level2type=N'COLUMN',@level2name=N'minimumInventory'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Định mức tồn nhiều nhất' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'items', @level2type=N'COLUMN',@level2name=N'maximumInventory'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Giá bán' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'items', @level2type=N'COLUMN',@level2name=N'price'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Tồn kho' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'items', @level2type=N'COLUMN',@level2name=N'inventory'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Trọng lượng' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'items', @level2type=N'COLUMN',@level2name=N'weight'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Loại trọng lượng
1 - gram
2- kg' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'items', @level2type=N'COLUMN',@level2name=N'weightType'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Kích thước: chiều rộng' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'items', @level2type=N'COLUMN',@level2name=N'sizeWidth'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Kích thước: chiều rộng' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'items', @level2type=N'COLUMN',@level2name=N'sizeLength'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Loại thước
1 - mm
2 - cm
3 - m' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'items', @level2type=N'COLUMN',@level2name=N'sizeType'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Đơn vị tính cơ bản' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'items', @level2type=N'COLUMN',@level2name=N'defaultUnit'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Mô tả sản phẩm' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'items', @level2type=N'COLUMN',@level2name=N'describeItem'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Mẫu ghi chú' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'items', @level2type=N'COLUMN',@level2name=N'noteItem'
GO
USE [master]
GO
ALTER DATABASE [anlocphat] SET  READ_WRITE 
GO
