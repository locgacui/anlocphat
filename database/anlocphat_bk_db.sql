create database anlocphat collate SQL_Latin1_General_CP1_CI_AS
go

use anlocphat
go

grant connect on database :: anlocphat to dbo
go

grant view any column encryption key definition, view any column master key definition on database :: anlocphat to [public]
go

create table dbo.SPParasLog
(
    created_date_time             datetime not null,
    store_procedure_name          nvarchar(max),
    store_procedure_parameter_log nvarchar(max)
)
go

create table dbo.accounts
(
    id         uniqueidentifier default newid() not null
        constraint accounts_pk
            primary key,
    username   nvarchar(50)                     not null,
    password   nvarchar(max)                    not null,
    isActive   bit                              not null,
    idEmployee uniqueidentifier                 not null
)
go

create table dbo.employees
(
    id                                 uniqueidentifier default newid() not null,
    code                               nvarchar(50)                     not null,
    name                               nvarchar(max)                    not null,
    dateOfBirth                        date,
    sex                                int,
    citizenIdentificationNumber        nvarchar(50),
    address                            nvarchar(max),
    phoneNumber                        nvarchar(50),
    email                              nvarchar(50),
    picturePath                        nvarchar(max),
    allowViewOtherEmployeeTransactions bit,
    allowViewGeneralInformation        bit,
    idLanguageSystem                   uniqueidentifier,
    note                               nvarchar(max)
)
go

exec sp_addextendedproperty 'MS_Description', N'giới tính
1 - nam
2 - nữ', 'SCHEMA', 'dbo', 'TABLE', 'employees', 'COLUMN', 'sex'
go

create table dbo.groupItems
(
    id          uniqueidentifier default newid() not null,
    name        nvarchar(max),
    idGroupItem uniqueidentifier
)
go

create table dbo.items
(
    id               uniqueidentifier default newid() not null
        primary key,
    code             nvarchar(50)                     not null,
    name             nvarchar(max)                    not null,
    idGroupItem      uniqueidentifier,
    idTypeItem       int,
    idBrandItem      uniqueidentifier,
    idLocation       uniqueidentifier,
    minimumInventory int              default 0,
    maximumInventory int              default 999999999,
    price            numeric(10, 2),
    inventory        int,
    weight           int,
    weightType       int,
    sizeWidth        int,
    sizeLength       int,
    sizeType         int,
    defaultUnit      nvarchar(50)     default '',
    describeItem     nvarchar(max)    default '',
    noteItem         nvarchar(max)    default ''
)
go

exec sp_addextendedproperty 'MS_Description', N'mã', 'SCHEMA', 'dbo', 'TABLE', 'items', 'COLUMN', 'code'
go

exec sp_addextendedproperty 'MS_Description', N'Tên sản phẩm', 'SCHEMA', 'dbo', 'TABLE', 'items', 'COLUMN', 'name'
go

exec sp_addextendedproperty 'MS_Description', N'Nhóm hàng', 'SCHEMA', 'dbo', 'TABLE', 'items', 'COLUMN', 'idGroupItem'
go

exec sp_addextendedproperty 'MS_Description', N'Loại hàng
    1 - Hàng hóa thường
    2 - Hàng hóa - sản xuất
    3 - Dịch vụ
    4 - Combo - Đóng gói', 'SCHEMA', 'dbo', 'TABLE', 'items', 'COLUMN', 'idTypeItem'
go

exec sp_addextendedproperty 'MS_Description', N'Thương hiệu', 'SCHEMA', 'dbo', 'TABLE', 'items', 'COLUMN', 'idBrandItem'
go

exec sp_addextendedproperty 'MS_Description', N'Vị trí hàng hóa', 'SCHEMA', 'dbo', 'TABLE', 'items', 'COLUMN',
     'idLocation'
go

exec sp_addextendedproperty 'MS_Description', N'Định mức tồn ít nhất', 'SCHEMA', 'dbo', 'TABLE', 'items', 'COLUMN',
     'minimumInventory'
go

exec sp_addextendedproperty 'MS_Description', N'Định mức tồn nhiều nhất', 'SCHEMA', 'dbo', 'TABLE', 'items', 'COLUMN',
     'maximumInventory'
go

exec sp_addextendedproperty 'MS_Description', N'Giá bán', 'SCHEMA', 'dbo', 'TABLE', 'items', 'COLUMN', 'price'
go

exec sp_addextendedproperty 'MS_Description', N'Tồn kho', 'SCHEMA', 'dbo', 'TABLE', 'items', 'COLUMN', 'inventory'
go

exec sp_addextendedproperty 'MS_Description', N'Trọng lượng', 'SCHEMA', 'dbo', 'TABLE', 'items', 'COLUMN', 'weight'
go

exec sp_addextendedproperty 'MS_Description', N'Loại trọng lượng
1 - gram
2- kg', 'SCHEMA', 'dbo', 'TABLE', 'items', 'COLUMN', 'weightType'
go

exec sp_addextendedproperty 'MS_Description', N'Kích thước: chiều rộng', 'SCHEMA', 'dbo', 'TABLE', 'items', 'COLUMN',
     'sizeWidth'
go

exec sp_addextendedproperty 'MS_Description', N'Kích thước: chiều rộng', 'SCHEMA', 'dbo', 'TABLE', 'items', 'COLUMN',
     'sizeLength'
go

exec sp_addextendedproperty 'MS_Description', N'Loại thước
1 - mm
2 - cm
3 - m', 'SCHEMA', 'dbo', 'TABLE', 'items', 'COLUMN', 'sizeType'
go

exec sp_addextendedproperty 'MS_Description', N'Đơn vị tính cơ bản', 'SCHEMA', 'dbo', 'TABLE', 'items', 'COLUMN',
     'defaultUnit'
go

exec sp_addextendedproperty 'MS_Description', N'Mô tả sản phẩm', 'SCHEMA', 'dbo', 'TABLE', 'items', 'COLUMN',
     'describeItem'
go

exec sp_addextendedproperty 'MS_Description', N'Mẫu ghi chú', 'SCHEMA', 'dbo', 'TABLE', 'items', 'COLUMN', 'noteItem'
go

-- =============================================
-- Author:		Nguyen Thanh Loc
-- Create date: 09/04/2024
-- Description:	Tìm account theo param
-- =============================================
CREATE PROCEDURE GetAccountByParam
@id uniqueidentifier = '',
@username nvarchar(50) = '',
@password nvarchar(max) = '',
@isActive bit = null,
@idEmployee uniqueidentifier = ''
as
    begin
        INSERT INTO SPParasLog
        (created_date_time, store_procedure_name, store_procedure_parameter_log)
        select
            getdate(),
            'GetAccountByParam',
            'EXEC GetAccountByParam' +
            '  @id = ' + IIF(@id is null, 'null', N'''' + convert(nvarchar(250) , @id) + '''') +
            ', @username = ' + IIF(@username is null, 'null', N'''' + convert(nvarchar(max), @username) + '''') +
            ', @password = ' + IIF(@password is null, 'null', N'''' + convert(nvarchar(max), @password) + '''') +
            ', @isActive = ' + IIF(@isActive is null, 'null', N'''' + convert(nvarchar(10), @isActive) + '''') +
            ', @idEmployee = ' + IIF(@idEmployee is null, 'null', N'''' + convert(nvarchar(250), @idEmployee) + '''')

        select *
        from accounts with (nolock)
        where 1 = 1
        and (@id IS NULL or @id = id)
        and (@username is null or @username = username)
        and (@password is null or @password = password)
        and (@isActive is null or @isActive = isActive)
        and (@idEmployee is null or @idEmployee = idEmployee)

    end
go

