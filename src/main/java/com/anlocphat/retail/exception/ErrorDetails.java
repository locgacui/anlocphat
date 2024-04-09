package com.anlocphat.retail.exception;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public class ErrorDetails {
    private int code;
    private Date timestamp = new Date();
    private String message;
    private Object details;

    public ErrorDetails() {

    }

    public ErrorDetails(int code, Date timestamp, String message, String details) {
        this.code = code;
        this.timestamp = timestamp;
        this.message = message;
        this.details = details;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd hh:mm:ss")
    public Date getTimestamp() {
        return timestamp;
    }

    public String getMessage() {
        return message;
    }

    public Object getDetails() {
        return details;
    }
}
