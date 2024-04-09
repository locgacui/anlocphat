package com.anlocphat.retail.entity;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.UUID;

/**
 * @author Nguyễn Thành Lộc
 * @since 31/03/2024
 */
@Entity
@Table(name = "items")  // Specify table name explicitly
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)  // Adjust for SQL Server
    @Column(name = "id", unique = true, nullable = false)
    private UUID id;

    /**
     * Mã sản phẩm
     */
    @Column(name = "code", nullable = false, length = 50)
    private String code;

    /**
     * Tên sản phẩm
     */
    @Column(name = "name", nullable = false, length = 255) // Adjust for nvarchar(max)
    private String name;

    /**
     * Nhóm hàng
     */
    @Column(name = "idGroupItem")
    private UUID idGroupItem;

    /**
     * Loại sản phẩm
     * 1 - Hàng hóa thường
     * 2 - Hàng hóa - sản xuất
     * 3 - Dịch vụ
     * 4 - Combo - Đóng gói
     */
    @Column(name = "idTypeItem")
    private Integer idTypeItem;

    /**
     * Thương hiệu
     */
    @Column(name = "idBrandItem")
    private UUID idBrandItem;

    /**
     * Vị trí hàng hóa
     */
    @Column(name = "idLocation")
    private UUID idLocation;

    /**
     * Định mức tồn ít nhất
     */
    @Column(name = "minimumInventory")
    private Integer minimumInventory;

    /**
     * Định mức tồn nhiều nhất
     */
    @Column(name = "maximumInventory")
    private Integer maximumInventory;

    /**
     * Giá bán
     */
    @Column(name = "price", precision = 10, scale = 2)
    private BigDecimal price;

    /**
     * Tồn kho
     */
    @Column(name = "inventory")
    private Integer inventory;

    /**
     * Trọng lượng
     */
    @Column(name = "weight")
    private Integer weight;

    /**
     * Đơn vị tính trọng lượng
     * 1 - gram
     * 2- kg
     */
    @Column(name = "weightType")
    private Integer weightType;

    /**
     * Chiều rộng
     */
    @Column(name = "sizeWidth")
    private Integer sizeWidth;

    /**
     * Chiều dài
     */
    @Column(name = "sizeLength")
    private Integer sizeLength;

    /**
     * Đơn vị tính chiều dài, rộng
     * 1 - mm
     * 2 - cm
     * 3 - m
     */
    @Column(name = "sizeType")
    private Integer sizeType;

    /**
     * Đơn vị tính mặc định của sản phẩm
     */
    @Column(name = "defaultUnit", length = 50)
    private String defaultUnit;

    /**
     * Mô tả sản phẩm
     */
    @Column(name = "describeItem", length = 255) // Adjust for nvarchar(max)
    private String describeItem;

    /**
     * Ghi chú sản phẩm hóa đơn, đặt hàng
     */
    @Column(name = "noteItem", length = 255) // Adjust for nvarchar(max)
    private String noteItem;

    // Getters and setters omitted for brevity
    public Item() {
    }

    public Item(UUID id, String code, String name, UUID idGroupItem, Integer idTypeItem, UUID idBrandItem, UUID idLocation, Integer minimumInventory, Integer maximumInventory, BigDecimal price, Integer inventory, Integer weight, Integer weightType, Integer sizeWidth, Integer sizeLength, Integer sizeType, String defaultUnit, String describeItem, String noteItem) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.idGroupItem = idGroupItem;
        this.idTypeItem = idTypeItem;
        this.idBrandItem = idBrandItem;
        this.idLocation = idLocation;
        this.minimumInventory = minimumInventory;
        this.maximumInventory = maximumInventory;
        this.price = price;
        this.inventory = inventory;
        this.weight = weight;
        this.weightType = weightType;
        this.sizeWidth = sizeWidth;
        this.sizeLength = sizeLength;
        this.sizeType = sizeType;
        this.defaultUnit = defaultUnit;
        this.describeItem = describeItem;
        this.noteItem = noteItem;
    }

    public UUID getId() {
        return id;
    }

    @Override
    public String toString() {
        return "item{" +
                "id=" + id +
                ", code='" + code + '\'' +
                ", name='" + name + '\'' +
                ", idGroupItem=" + idGroupItem +
                ", idTypeItem=" + idTypeItem +
                ", idBrandItem=" + idBrandItem +
                ", idLocation=" + idLocation +
                ", minimumInventory=" + minimumInventory +
                ", maximumInventory=" + maximumInventory +
                ", price=" + price +
                ", inventory=" + inventory +
                ", weight=" + weight +
                ", weightType=" + weightType +
                ", sizeWidth=" + sizeWidth +
                ", sizeLength=" + sizeLength +
                ", sizeType=" + sizeType +
                ", defaultUnit='" + defaultUnit + '\'' +
                ", describeItem='" + describeItem + '\'' +
                ", noteItem='" + noteItem + '\'' +
                '}';
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public UUID getIdGroupItem() {
        return idGroupItem;
    }

    public void setIdGroupItem(UUID idGroupItem) {
        this.idGroupItem = idGroupItem;
    }

    public Integer getIdTypeItem() {
        return idTypeItem;
    }

    public void setIdTypeItem(Integer idTypeItem) {
        this.idTypeItem = idTypeItem;
    }

    public UUID getIdBrandItem() {
        return idBrandItem;
    }

    public void setIdBrandItem(UUID idBrandItem) {
        this.idBrandItem = idBrandItem;
    }

    public UUID getIdLocation() {
        return idLocation;
    }

    public void setIdLocation(UUID idLocation) {
        this.idLocation = idLocation;
    }

    public Integer getMinimumInventory() {
        return minimumInventory;
    }

    public void setMinimumInventory(Integer minimumInventory) {
        this.minimumInventory = minimumInventory;
    }

    public Integer getMaximumInventory() {
        return maximumInventory;
    }

    public void setMaximumInventory(Integer maximumInventory) {
        this.maximumInventory = maximumInventory;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Integer getInventory() {
        return inventory;
    }

    public void setInventory(Integer inventory) {
        this.inventory = inventory;
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public Integer getWeightType() {
        return weightType;
    }

    public void setWeightType(Integer weightType) {
        this.weightType = weightType;
    }

    public Integer getSizeWidth() {
        return sizeWidth;
    }

    public void setSizeWidth(Integer sizeWidth) {
        this.sizeWidth = sizeWidth;
    }

    public Integer getSizeLength() {
        return sizeLength;
    }

    public void setSizeLength(Integer sizeLength) {
        this.sizeLength = sizeLength;
    }

    public Integer getSizeType() {
        return sizeType;
    }

    public void setSizeType(Integer sizeType) {
        this.sizeType = sizeType;
    }

    public String getDefaultUnit() {
        return defaultUnit;
    }

    public void setDefaultUnit(String defaultUnit) {
        this.defaultUnit = defaultUnit;
    }

    public String getDescribeItem() {
        return describeItem;
    }

    public void setDescribeItem(String describeItem) {
        this.describeItem = describeItem;
    }

    public String getNoteItem() {
        return noteItem;
    }

    public void setNoteItem(String noteItem) {
        this.noteItem = noteItem;
    }
}
