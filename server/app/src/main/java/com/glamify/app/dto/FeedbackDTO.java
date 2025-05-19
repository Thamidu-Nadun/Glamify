package com.glamify.app.dto;

import java.time.LocalDateTime;

public class FeedbackDTO {
    private String id;
    private String customerId;
    private String appointmentId;
    private int rating;
    private String comment;
    private LocalDateTime feedbackTime;

    // Default constructor for JSON deserialization
    public FeedbackDTO() {}

    public FeedbackDTO(String id, String customerId, String appointmentId, int rating, String comment, LocalDateTime feedbackTime) {
        this.id = id;
        this.customerId = customerId;
        this.appointmentId = appointmentId;
        this.rating = rating;
        this.comment = comment;
        this.feedbackTime = feedbackTime;
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getCustomerId() { return customerId; }
    public void setCustomerId(String customerId) { this.customerId = customerId; }

    public String getAppointmentId() { return appointmentId; }
    public void setAppointmentId(String appointmentId) { this.appointmentId = appointmentId; }

    public int getRating() { return rating; }
    public void setRating(int rating) { this.rating = rating; }

    public String getComment() { return comment; }
    public void setComment(String comment) { this.comment = comment; }

    public LocalDateTime getFeedbackTime() { return feedbackTime; }
    public void setFeedbackTime(LocalDateTime feedbackTime) { this.feedbackTime = feedbackTime; }
} 